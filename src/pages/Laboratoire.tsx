import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
  type PointerEvent as ReactPointerEvent,
  type WheelEvent,
} from "react";
import { Focus, Minus, Plus } from "lucide-react";
import { Header } from "@/components/Header";
import { ItemModal } from "@/components/laboratoire/ItemModal";
import { deskDecor } from "@/components/laboratoire/deskDecor";
import { deskItems, type DeskItem } from "@/components/laboratoire/deskItems";
import feuletteCover from "@/assets/laboratoire/feulette-cover.webp";

const DESK_W = 1840;
const DESK_H = 1280;
const ZOOM_MIN = 0.24;
const ZOOM_MAX = 1.35;

type Pos = { x: number; y: number };
type View = { x: number; y: number; zoom: number };
type DragState = {
  id: string;
  pointerId: number;
  startX: number;
  startY: number;
  itemX: number;
  itemY: number;
  moved: boolean;
};
type PanState = {
  pointerId: number;
  startX: number;
  startY: number;
  viewX: number;
  viewY: number;
  lastX: number;
  lastY: number;
  lastTime: number;
  velocityX: number;
  velocityY: number;
};
type PinchState = {
  distance: number;
  zoom: number;
  deskX: number;
  deskY: number;
};

const initialPositions = Object.fromEntries(deskItems.map((item) => [item.id, { x: item.x, y: item.y }]));
const initialZ = Object.fromEntries(deskItems.map((item, index) => [item.id, index + 10]));

function clamp(value: number, min: number, max: number) {
  return Math.min(max, Math.max(min, value));
}

function distance(a: Pos, b: Pos) {
  return Math.hypot(a.x - b.x, a.y - b.y);
}

function midpoint(a: Pos, b: Pos) {
  return { x: (a.x + b.x) / 2, y: (a.y + b.y) / 2 };
}

function DeskItemContent({ item }: { item: DeskItem }) {
  const framed = item.frame && item.frame !== "bare";

  return (
    <div className={framed ? `lab-device lab-device--${item.frame}` : "relative"}>
      <div className={framed ? "lab-device__screen" : "relative overflow-hidden"}>
        <img src={item.image} alt={item.label} className="block h-auto w-full object-contain" draggable={false} />
        {item.signalEffect ? <div className="lab-scanlines pointer-events-none absolute inset-0" /> : null}
      </div>
      {framed ? <div className="lab-device__controls" aria-hidden="true"><i /><i /><i /></div> : null}
    </div>
  );
}

function FeuletteVisitor() {
  const [visit, setVisit] = useState<{ key: number; y: number; reverse: boolean } | null>(null);

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;
    let hideTimer: ReturnType<typeof setTimeout>;

    const schedule = () => {
      timer = setTimeout(() => {
        setVisit({ key: Date.now(), y: 230 + Math.random() * 690, reverse: Math.random() > 0.5 });
        hideTimer = setTimeout(() => {
          setVisit(null);
          schedule();
        }, 9000);
      }, 9000 + Math.random() * 16000);
    };

    schedule();
    return () => {
      clearTimeout(timer);
      clearTimeout(hideTimer);
    };
  }, []);

  if (!visit) return null;

  return (
    <div
      key={visit.key}
      className={`lab-feulette ${visit.reverse ? "lab-feulette--reverse" : ""}`}
      style={{ top: visit.y }}
      aria-hidden="true"
    >
      <img src={feuletteCover} alt="" draggable={false} />
    </div>
  );
}

export default function Laboratoire() {
  const debugDecor = new URLSearchParams(window.location.search).get("debugDecor") === "1";
  const viewportRef = useRef<HTMLElement | null>(null);
  const [view, setView] = useState<View>({ x: 0, y: 0, zoom: 0.5 });
  const viewRef = useRef(view);
  const [positions, setPositions] = useState<Record<string, Pos>>(initialPositions);
  const [zIndices, setZIndices] = useState<Record<string, number>>(initialZ);
  const [selected, setSelected] = useState<DeskItem | null>(null);
  const drag = useRef<DragState | null>(null);
  const pan = useRef<PanState | null>(null);
  const pinch = useRef<PinchState | null>(null);
  const pointers = useRef(new Map<number, Pos>());
  const maxZ = useRef(deskItems.length + 20);
  const inertiaFrame = useRef<number | null>(null);
  const lastTap = useRef(0);

  useEffect(() => {
    viewRef.current = view;
  }, [view]);

  const stopInertia = useCallback(() => {
    if (inertiaFrame.current !== null) cancelAnimationFrame(inertiaFrame.current);
    inertiaFrame.current = null;
  }, []);

  const fitDesk = useCallback(() => {
    const viewport = viewportRef.current;
    if (!viewport) return;
    const width = viewport.clientWidth;
    const height = viewport.clientHeight;
    const zoom = clamp(Math.min((width - 28) / DESK_W, (height - 28) / DESK_H), ZOOM_MIN, 0.82);
    setView({ x: (width - DESK_W * zoom) / 2, y: (height - DESK_H * zoom) / 2, zoom });
  }, []);

  useLayoutEffect(() => {
    fitDesk();
    const observer = new ResizeObserver(fitDesk);
    if (viewportRef.current) observer.observe(viewportRef.current);
    return () => observer.disconnect();
  }, [fitDesk]);

  useEffect(() => {
    const root = document.documentElement;
    const body = document.body;
    const previous = {
      rootOverscroll: root.style.overscrollBehavior,
      bodyOverscroll: body.style.overscrollBehavior,
      bodyOverflow: body.style.overflow,
    };
    root.style.overscrollBehavior = "none";
    body.style.overscrollBehavior = "none";
    body.style.overflow = "hidden";

    return () => {
      root.style.overscrollBehavior = previous.rootOverscroll;
      body.style.overscrollBehavior = previous.bodyOverscroll;
      body.style.overflow = previous.bodyOverflow;
      stopInertia();
    };
  }, [stopInertia]);

  const zoomAt = useCallback((nextZoom: number, clientX: number, clientY: number) => {
    setView((current) => {
      const zoom = clamp(nextZoom, ZOOM_MIN, ZOOM_MAX);
      const deskX = (clientX - current.x) / current.zoom;
      const deskY = (clientY - current.y) / current.zoom;
      return { zoom, x: clientX - deskX * zoom, y: clientY - deskY * zoom };
    });
  }, []);

  const zoomFromCenter = (delta: number) => {
    const viewport = viewportRef.current;
    if (!viewport) return;
    const rect = viewport.getBoundingClientRect();
    zoomAt(viewRef.current.zoom + delta, rect.width / 2, rect.height / 2);
  };

  const viewportPoint = (clientX: number, clientY: number) => {
    const rect = viewportRef.current?.getBoundingClientRect();
    return {
      x: clientX - (rect?.left ?? 0),
      y: clientY - (rect?.top ?? 0),
    };
  };

  const startDrag = (event: ReactPointerEvent<HTMLDivElement>, item: DeskItem) => {
    event.preventDefault();
    event.stopPropagation();
    stopInertia();
    const current = positions[item.id];
    drag.current = {
      id: item.id,
      pointerId: event.pointerId,
      startX: event.clientX,
      startY: event.clientY,
      itemX: current.x,
      itemY: current.y,
      moved: false,
    };
    setZIndices((previous) => ({ ...previous, [item.id]: ++maxZ.current }));
    event.currentTarget.setPointerCapture(event.pointerId);
  };

  const moveDrag = (event: ReactPointerEvent<HTMLDivElement>) => {
    const current = drag.current;
    if (!current || current.pointerId !== event.pointerId) return;
    event.preventDefault();
    const dx = (event.clientX - current.startX) / viewRef.current.zoom;
    const dy = (event.clientY - current.startY) / viewRef.current.zoom;
    if (Math.abs(dx) > 4 || Math.abs(dy) > 4) current.moved = true;
    setPositions((previous) => ({
      ...previous,
      [current.id]: { x: current.itemX + dx, y: current.itemY + dy },
    }));
  };

  const stopDrag = (item: DeskItem, pointerId: number) => {
    const current = drag.current;
    if (!current || current.pointerId !== pointerId) return;
    drag.current = null;
    if (!current.moved) setSelected(item);
  };

  const beginPinch = () => {
    const [a, b] = [...pointers.current.values()];
    if (!a || !b) return;
    const center = midpoint(a, b);
    const current = viewRef.current;
    pinch.current = {
      distance: distance(a, b),
      zoom: current.zoom,
      deskX: (center.x - current.x) / current.zoom,
      deskY: (center.y - current.y) / current.zoom,
    };
    pan.current = null;
  };

  const startPan = (event: ReactPointerEvent<HTMLElement>) => {
    if (event.button !== 0 && event.pointerType === "mouse") return;
    event.preventDefault();
    stopInertia();
    const point = viewportPoint(event.clientX, event.clientY);
    pointers.current.set(event.pointerId, point);
    event.currentTarget.setPointerCapture(event.pointerId);

    if (pointers.current.size === 2) {
      beginPinch();
      return;
    }

    const current = viewRef.current;
    pan.current = {
      pointerId: event.pointerId,
      startX: point.x,
      startY: point.y,
      viewX: current.x,
      viewY: current.y,
      lastX: point.x,
      lastY: point.y,
      lastTime: performance.now(),
      velocityX: 0,
      velocityY: 0,
    };
  };

  const movePan = (event: ReactPointerEvent<HTMLElement>) => {
    if (!pointers.current.has(event.pointerId)) return;
    event.preventDefault();
    const point = viewportPoint(event.clientX, event.clientY);
    pointers.current.set(event.pointerId, point);

    if (pointers.current.size >= 2 && pinch.current) {
      const [a, b] = [...pointers.current.values()];
      const center = midpoint(a, b);
      const zoom = clamp(pinch.current.zoom * (distance(a, b) / pinch.current.distance), ZOOM_MIN, ZOOM_MAX);
      setView({
        zoom,
        x: center.x - pinch.current.deskX * zoom,
        y: center.y - pinch.current.deskY * zoom,
      });
      return;
    }

    const current = pan.current;
    if (!current || current.pointerId !== event.pointerId) return;
    const now = performance.now();
    const elapsed = Math.max(8, now - current.lastTime);
    current.velocityX = (point.x - current.lastX) / elapsed;
    current.velocityY = (point.y - current.lastY) / elapsed;
    current.lastX = point.x;
    current.lastY = point.y;
    current.lastTime = now;
    setView((previous) => ({
      ...previous,
      x: current.viewX + point.x - current.startX,
      y: current.viewY + point.y - current.startY,
    }));
  };

  const runInertia = (velocityX: number, velocityY: number) => {
    let vx = velocityX * 16;
    let vy = velocityY * 16;
    const tick = () => {
      vx *= 0.92;
      vy *= 0.92;
      if (Math.abs(vx) + Math.abs(vy) < 0.3) {
        inertiaFrame.current = null;
        return;
      }
      setView((current) => ({ ...current, x: current.x + vx, y: current.y + vy }));
      inertiaFrame.current = requestAnimationFrame(tick);
    };
    inertiaFrame.current = requestAnimationFrame(tick);
  };

  const stopPan = (event: ReactPointerEvent<HTMLElement>) => {
    const current = pan.current;
    const point = viewportPoint(event.clientX, event.clientY);
    pointers.current.delete(event.pointerId);

    if (pointers.current.size < 2) pinch.current = null;
    if (pointers.current.size === 1) {
      const [pointerId, point] = [...pointers.current.entries()][0];
      const active = viewRef.current;
      pan.current = {
        pointerId,
        startX: point.x,
        startY: point.y,
        viewX: active.x,
        viewY: active.y,
        lastX: point.x,
        lastY: point.y,
        lastTime: performance.now(),
        velocityX: 0,
        velocityY: 0,
      };
      return;
    }

    pan.current = null;
    if (current && current.pointerId === event.pointerId) {
      const moved = Math.hypot(point.x - current.startX, point.y - current.startY);
      const now = performance.now();
      if (moved < 12 && now - lastTap.current < 320) {
        fitDesk();
        lastTap.current = 0;
      } else {
        if (moved < 12) lastTap.current = now;
        runInertia(current.velocityX, current.velocityY);
      }
    }
  };

  const handleWheel = (event: WheelEvent<HTMLElement>) => {
    event.preventDefault();
    const rect = event.currentTarget.getBoundingClientRect();
    zoomAt(viewRef.current.zoom * Math.exp(-event.deltaY * 0.0012), event.clientX - rect.left, event.clientY - rect.top);
  };

  return (
    <main className="flex h-[100dvh] flex-col overflow-hidden overscroll-none bg-[#070402] text-[#ead9b5]">
      <Header />

      <div className="pointer-events-none fixed left-1/2 top-[63px] z-40 -translate-x-1/2 whitespace-nowrap border border-amber-800/35 bg-[#120802]/88 px-3 py-1 font-serif-display text-[9px] uppercase tracking-[0.18em] text-amber-200/65 backdrop-blur">
        Bureau du Feuch Institute · déplacer · pincer · fouiller
      </div>

      <div className="fixed bottom-4 right-3 z-50 flex flex-col gap-2">
        <button className="lab-control" onClick={() => zoomFromCenter(0.1)} aria-label="Zoom avant" title="Zoom avant">
          <Plus />
        </button>
        <button className="lab-control" onClick={() => zoomFromCenter(-0.1)} aria-label="Zoom arrière" title="Zoom arrière">
          <Minus />
        </button>
        <button className="lab-control" onClick={fitDesk} aria-label="Recentrer le bureau" title="Recentrer">
          <Focus />
        </button>
        <span className="text-center font-mono text-[9px] text-amber-200/45">{Math.round(view.zoom * 100)}%</span>
      </div>

      <section
        ref={viewportRef}
        className="lab-viewport relative min-h-0 flex-1 overflow-hidden"
        onPointerDown={startPan}
        onPointerMove={movePan}
        onPointerUp={stopPan}
        onPointerCancel={stopPan}
        onWheel={handleWheel}
      >
        <div
          className="lab-desk absolute left-0 top-0"
          style={{
            width: DESK_W,
            height: DESK_H,
            transform: `translate3d(${view.x}px, ${view.y}px, 0) scale(${view.zoom})`,
          }}
        >
          <div className="lab-sator-mark" aria-hidden="true">
            <span>SATOR</span><span>AREPO</span><span>TENET</span><span>OPERA</span><span>ROTAS</span>
          </div>
          <div className="lab-dust" aria-hidden="true" />

          {deskDecor.map((decor) => (
            <div
              key={decor.id}
              className={`lab-decor absolute select-none ${
                decor.motion ? `lab-decor--${decor.motion}` : ""
              } ${debugDecor ? "lab-decor--debug" : "pointer-events-none"}`}
              data-decor-name={decor.label}
              title={debugDecor ? decor.label : undefined}
              style={{
                left: decor.x,
                top: decor.y,
                width: decor.width,
                zIndex: decor.zIndex ?? 0,
                opacity: decor.opacity ?? 1,
                transform: `rotate(${decor.rotation}deg)`,
              }}
            >
              <img src={decor.image} alt="" draggable={false} className="block h-auto w-full" />
            </div>
          ))}

          <FeuletteVisitor />

          {deskItems.map((item) => {
            const pos = positions[item.id];
            return (
              <div
                key={item.id}
                onPointerDown={(event) => startDrag(event, item)}
                onPointerMove={moveDrag}
                onPointerUp={(event) => stopDrag(item, event.pointerId)}
                onPointerCancel={(event) => stopDrag(item, event.pointerId)}
                className={`lab-object absolute select-none ${
                  item.id === "feuch-folder" ? "lab-object--featured" : ""
                }`}
                style={{
                  left: pos.x,
                  top: pos.y,
                  width: item.width,
                  zIndex: zIndices[item.id],
                  transform: `rotate(${item.rotation}deg)`,
                }}
              >
                <DeskItemContent item={item} />
              </div>
            );
          })}
        </div>
      </section>

      {selected ? <ItemModal item={selected} onClose={() => setSelected(null)} /> : null}
    </main>
  );
}
