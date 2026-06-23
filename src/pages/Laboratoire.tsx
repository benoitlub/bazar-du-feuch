import { useEffect, useRef, useState, type PointerEvent } from "react";
import { Header } from "@/components/Header";
import { ItemModal } from "@/components/laboratoire/ItemModal";
import { deskItems, type DeskItem } from "@/components/laboratoire/deskItems";

const DESK_W = 1600;
const DESK_H = 1180;
const ZOOM_MIN = 0.3;
const ZOOM_MAX = 1.25;
const ZOOM_INIT = 0.48;

type Pos = { x: number; y: number };
type DragState = { id: string; startX: number; startY: number; itemX: number; itemY: number; moved: boolean };

const initialPositions = Object.fromEntries(deskItems.map((item) => [item.id, { x: item.x, y: item.y }]));
const initialZ = Object.fromEntries(deskItems.map((item, index) => [item.id, index + 1]));

function DeskItemContent({ item }: { item: DeskItem }) {
  return <img src={item.image} alt={item.label} className="block h-auto w-full object-contain" draggable={false} />;
}

export default function Laboratoire() {
  const [zoom, setZoom] = useState(ZOOM_INIT);
  const [positions, setPositions] = useState<Record<string, Pos>>(initialPositions);
  const [zIndices, setZIndices] = useState<Record<string, number>>(initialZ);
  const [selected, setSelected] = useState<DeskItem | null>(null);
  const drag = useRef<DragState | null>(null);
  const maxZ = useRef(deskItems.length + 1);

  useEffect(() => {
    const previousRootOverscroll = document.documentElement.style.overscrollBehavior;
    const previousBodyOverscroll = document.body.style.overscrollBehavior;
    document.documentElement.style.overscrollBehavior = "none";
    document.body.style.overscrollBehavior = "none";

    return () => {
      document.documentElement.style.overscrollBehavior = previousRootOverscroll;
      document.body.style.overscrollBehavior = previousBodyOverscroll;
    };
  }, []);

  const zoomBy = (delta: number) => setZoom((value) => Math.min(ZOOM_MAX, Math.max(ZOOM_MIN, Number((value + delta).toFixed(2)))));

  const startDrag = (event: PointerEvent<HTMLDivElement>, item: DeskItem) => {
    event.preventDefault();
    event.stopPropagation();
    const current = positions[item.id];
    drag.current = { id: item.id, startX: event.clientX, startY: event.clientY, itemX: current.x, itemY: current.y, moved: false };
    setZIndices((previous) => ({ ...previous, [item.id]: ++maxZ.current }));
    event.currentTarget.setPointerCapture(event.pointerId);
  };

  const moveDrag = (event: PointerEvent<HTMLDivElement>) => {
    if (!drag.current) return;
    if (event.pointerType === "touch") event.preventDefault();
    const current = drag.current;
    const dx = (event.clientX - current.startX) / zoom;
    const dy = (event.clientY - current.startY) / zoom;
    if (Math.abs(dx) > 3 || Math.abs(dy) > 3) current.moved = true;
    setPositions((previous) => ({ ...previous, [current.id]: { x: current.itemX + dx, y: current.itemY + dy } }));
  };

  const stopDrag = (item: DeskItem) => {
    const current = drag.current;
    drag.current = null;
    if (current && !current.moved) setSelected(item);
  };

  return (
    <main
      className="flex h-[100dvh] flex-col overflow-hidden overscroll-none bg-[#080401] text-[#ead9b5]"
      style={{ overscrollBehavior: "none" }}
    >
      <Header />

      <div className="pointer-events-none fixed left-1/2 top-[62px] z-40 -translate-x-1/2 whitespace-nowrap rounded border border-amber-800/40 bg-[#120802]/90 px-3 py-1 font-serif-display text-[10px] uppercase tracking-[0.22em] text-amber-200/70 backdrop-blur">
        ⚗ Bureau du Feuch Institute — drag · clic · explore
      </div>

      <div className="fixed bottom-5 right-4 z-50 flex flex-col items-center gap-2">
        <button className="grid h-10 w-10 place-items-center rounded border border-amber-700/50 bg-[#1c0c04]/95 text-lg shadow-lg" onClick={() => zoomBy(0.08)} aria-label="Zoom avant">＋</button>
        <button className="grid h-10 w-10 place-items-center rounded border border-amber-700/50 bg-[#1c0c04]/95 text-lg shadow-lg" onClick={() => zoomBy(-0.08)} aria-label="Zoom arrière">－</button>
        <button className="rounded border border-amber-700/50 bg-[#1c0c04]/95 px-3 py-2 text-xs shadow-lg" onClick={() => setZoom(ZOOM_INIT)}>Reset</button>
        <span className="font-mono text-[10px] text-amber-200/50">{Math.round(zoom * 100)}%</span>
      </div>

      <section className="relative min-h-0 flex-1 overflow-auto overscroll-none pt-0" style={{ overscrollBehavior: "none" }}>
        <div style={{ width: DESK_W * zoom, height: DESK_H * zoom }} className="relative shrink-0">
          <div
            style={{ width: DESK_W, height: DESK_H, transform: `scale(${zoom})`, transformOrigin: "top left" }}
            className="relative bg-[#180c04] shadow-[inset_0_0_140px_rgba(0,0,0,0.85)] bg-[radial-gradient(ellipse_at_38%_28%,rgba(80,38,8,0.55),transparent_50%),radial-gradient(ellipse_at_72%_68%,rgba(40,18,4,0.5),transparent_46%)]"
          >
            {[[28, 26, "Bibliothèque"], [28, 310, "Applications"], [28, 540, "Jeux & prototypes"], [858, 24, "Archives Blacklace"], [858, 768, "Cartes, plans & dossiers"]].map(([x, y, label]) => (
              <div key={String(label)} className="absolute font-serif-display text-[11px] uppercase tracking-[0.2em] text-amber-200/25" style={{ left: Number(x), top: Number(y) }}>{label}</div>
            ))}

            {[300, 528, 760].map((y) => <div key={y} className="absolute left-5 h-px w-[820px] bg-gradient-to-r from-amber-700/20 via-amber-700/10 to-transparent" style={{ top: y }} />)}
            <div className="absolute bottom-3 left-[848px] top-3 w-px bg-gradient-to-b from-amber-700/20 via-amber-700/10 to-transparent" />

            {deskItems.map((item) => {
              const pos = positions[item.id];
              return (
                <div
                  key={item.id}
                  onPointerDown={(event) => startDrag(event, item)}
                  onPointerMove={moveDrag}
                  onPointerUp={() => stopDrag(item)}
                  onPointerCancel={() => stopDrag(item)}
                  onLostPointerCapture={() => stopDrag(item)}
                  className="absolute select-none drop-shadow-[4px_8px_18px_rgba(0,0,0,0.62)]"
                  style={{
                    left: pos.x,
                    top: pos.y,
                    width: item.width,
                    zIndex: zIndices[item.id],
                    transform: `rotate(${item.rotation}deg)`,
                    touchAction: "none",
                    cursor: "grab",
                  }}
                >
                  <DeskItemContent item={item} />
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {selected ? <ItemModal item={selected} onClose={() => setSelected(null)} /> : null}
    </main>
  );
}
