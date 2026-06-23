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

const frameStyle: Record<DeskItem["kind"], string> = {
  book: "bg-[#f5efe3] text-[#251407] shadow-[4px_8px_22px_rgba(0,0,0,0.6)] overflow-hidden",
  app: "bg-[#061111] border border-emerald-700/40 text-[#e2d0ad] shadow-[0_0_22px_rgba(0,180,150,0.12),4px_8px_22px_rgba(0,0,0,0.65)] overflow-hidden",
  game: "bg-[#130909] border border-red-900/50 text-[#e6c2a4] shadow-[4px_8px_22px_rgba(0,0,0,0.65)] overflow-hidden",
  note: "bg-[#f0e2b8] text-[#281405] shadow-[3px_6px_18px_rgba(0,0,0,0.55)]",
  badge: "rounded-full border-2 border-[#7a5a12] bg-[radial-gradient(circle_at_33%_33%,#4a3210,#1a1005)] text-[#d5ad44] shadow-[3px_6px_18px_rgba(0,0,0,0.62)]",
  card: "bg-[#e6d8b8] border border-[#9a8060] text-[#1f1006] shadow-[3px_6px_18px_rgba(0,0,0,0.55)]",
  decor: "bg-[#201006] border border-amber-900/50 text-[#f3d58f] shadow-[4px_8px_22px_rgba(0,0,0,0.65)] overflow-hidden",
  support: "bg-[linear-gradient(145deg,#2e1408,#180804)] border border-orange-800/50 text-[#e0c8a0] shadow-[4px_8px_22px_rgba(0,0,0,0.65)] overflow-hidden",
  polaroid: "bg-white p-2 pb-6 text-[#321a0b] shadow-[3px_7px_18px_rgba(0,0,0,0.65)]",
  map: "bg-[#d8c296] border border-[#8a653e] text-[#261407] shadow-[4px_8px_22px_rgba(0,0,0,0.62)] overflow-hidden",
  ticket: "bg-[#dec89d] border border-[#7c5631] text-[#241204] shadow-[4px_8px_22px_rgba(0,0,0,0.62)] overflow-hidden",
  poster: "bg-[#2a1737] border border-purple-900/60 text-[#f0d4ff] shadow-[4px_8px_22px_rgba(0,0,0,0.62)] overflow-hidden",
  folder: "bg-[#c2a16a] border border-[#5a3519] text-[#221003] shadow-[4px_8px_22px_rgba(0,0,0,0.62)] overflow-hidden",
  coaster: "rounded-full bg-[radial-gradient(circle,#3a210c,#090503)] border-4 border-[#7a5524] text-[#e0bd64] shadow-[4px_8px_22px_rgba(0,0,0,0.7)] overflow-hidden",
  playingCard: "bg-[#ead9b5] border-2 border-[#351609] text-[#250a05] shadow-[3px_7px_20px_rgba(0,0,0,0.68)] overflow-hidden",
};

function DeskItemContent({ item }: { item: DeskItem }) {
  if (item.kind === "book") {
    return (
      <>
        {item.image ? <img src={item.image} alt={item.label} className="block w-full object-cover" style={{ height: item.width * 1.42 }} draggable={false} /> : <div className="grid aspect-[1/1.42] place-items-center text-4xl">{item.emoji}</div>}
        <div className="px-2 py-1 text-center font-serif-display text-[11px] uppercase leading-tight tracking-wider">{item.label}</div>
      </>
    );
  }

  if (item.image) {
    return <img src={item.image} alt={item.label} className="block h-auto w-full object-contain" draggable={false} />;
  }

  if (item.kind === "note" || item.kind === "card") {
    return <div className="p-3"><pre className="m-0 whitespace-pre-wrap break-words font-mono text-[11px] leading-relaxed">{item.body ?? item.description}</pre></div>;
  }

  if (item.kind === "map") {
    return (
      <div className="relative h-full min-h-[150px] p-3">
        <div className="absolute inset-0 opacity-25 bg-[radial-gradient(circle_at_30%_28%,#6b4522_0_2px,transparent_3px),linear-gradient(90deg,rgba(80,45,20,.18)_1px,transparent_1px),linear-gradient(rgba(80,45,20,.18)_1px,transparent_1px)] bg-[length:56px_56px,22px_22px,22px_22px]" />
        <div className="relative font-serif-display text-lg uppercase leading-none tracking-wider">{item.label}</div>
        <div className="relative mx-auto mt-4 h-20 w-32 rounded-[48%] border-2 border-[#5b3218] bg-[#b79a68]/50 shadow-inner" />
        <div className="relative mt-2 font-mono text-[10px]">{item.caption}</div>
      </div>
    );
  }

  if (item.kind === "folder") {
    return (
      <div className="relative min-h-[150px] p-4">
        <div className="absolute right-0 top-4 h-10 w-16 rounded-l bg-[#d7bd82]" />
        <div className="relative rounded border-2 border-[#56734f] p-2 text-center font-serif-display text-xl uppercase leading-tight text-[#477146]">{item.label}</div>
        <p className="relative mt-4 line-clamp-4 font-mono text-[10px] leading-relaxed">{item.description}</p>
      </div>
    );
  }

  if (item.kind === "ticket") {
    return (
      <div className="p-3">
        <div className="flex items-center justify-between border-b border-dashed border-[#5a3316] pb-1 font-mono text-[10px] uppercase"><strong>BNN24</strong><span>PRESS</span></div>
        <div className="mt-2 font-serif-display text-2xl leading-none">{item.label}</div>
        <div className="mt-3 grid h-12 w-12 place-items-center bg-[#251407] text-[8px] text-[#dfcfaa]">QR</div>
      </div>
    );
  }

  if (item.kind === "poster") {
    return <div className="grid min-h-[150px] place-items-center p-4 text-center"><div><div className="font-serif-display text-4xl font-bold uppercase">BNN24</div><p className="mt-2 font-mono text-[10px] uppercase tracking-widest">La vérité n'a pas peur de la nuit</p></div></div>;
  }

  if (item.kind === "playingCard") {
    return <div className="grid aspect-[.72/1] place-items-center p-3 text-center"><div><div className="text-4xl">{item.emoji}</div><div className="mt-3 font-serif-display text-2xl uppercase leading-none">{item.label}</div><div className="mt-2 font-mono text-[9px] uppercase tracking-widest">Pro.Hibited</div></div></div>;
  }

  if (item.kind === "coaster" || item.kind === "badge") {
    return <div className="flex h-full min-h-[120px] flex-col items-center justify-center gap-1 p-2 text-center"><span className="text-4xl">{item.emoji}</span><span className="font-serif-display text-[10px] uppercase tracking-widest">{item.label}</span></div>;
  }

  if (item.kind === "polaroid") {
    return <><div className="grid aspect-square place-items-center bg-[#2a2018] text-4xl">{item.image ? <img src={item.image} alt={item.label} className="h-full w-full object-cover" draggable={false} /> : item.emoji}</div><div className="mt-1 text-center font-serif-display text-[11px] italic">{item.label}</div></>;
  }

  if (item.kind === "decor") {
    return <div className="grid aspect-square place-items-center text-5xl">{item.image ? <img src={item.image} alt={item.label} className="h-full w-full object-cover" draggable={false} /> : item.emoji}</div>;
  }

  return (
    <div className="p-3">
      <div className="mb-2 font-mono text-[8px] uppercase tracking-[0.22em] opacity-60">feuch_lab · {item.kind}</div>
      <div className="mb-1 text-3xl">{item.emoji}</div>
      <h3 className="font-serif-display text-lg leading-tight">{item.label}</h3>
      <p className="mt-2 line-clamp-4 text-[11px] leading-relaxed opacity-70">{item.description}</p>
    </div>
  );
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
              const isRound = item.kind === "badge" || item.kind === "coaster";
              return (
                <div
                  key={item.id}
                  onPointerDown={(event) => startDrag(event, item)}
                  onPointerMove={moveDrag}
                  onPointerUp={() => stopDrag(item)}
                  onPointerCancel={() => stopDrag(item)}
                  onLostPointerCapture={() => stopDrag(item)}
                  className={`absolute select-none rounded-sm ${frameStyle[item.kind]}`}
                  style={{
                    left: pos.x,
                    top: pos.y,
                    width: item.width,
                    height: isRound ? item.width : undefined,
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
