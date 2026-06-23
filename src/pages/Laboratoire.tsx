import { useRef, useState } from "react";
import { Header } from "@/components/Header";
import { ItemModal } from "@/components/laboratoire/ItemModal";
import { deskItems, type DeskItem } from "@/components/laboratoire/deskItems";

const DESK_W = 1600;
const DESK_H = 1050;
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

  if (item.kind === "note" || item.kind === "card") {
    return (
      <div className="p-3">
        <pre className="m-0 whitespace-pre-wrap break-words font-mono text-[11px] leading-relaxed">{item.body ?? item.description}</pre>
      </div>
    );
  }

  if (item.kind === "badge") {
    return (
      <div className="flex h-full flex-col items-center justify-center gap-1 p-2 text-center">
        <span className="text-3xl">{item.emoji}</span>
        <span className="font-serif-display text-[10px] uppercase tracking-widest">{item.label}</span>
      </div>
    );
  }

  if (item.kind === "polaroid") {
    return (
      <>
        <div className="grid aspect-square place-items-center bg-[#2a2018] text-4xl">{item.image ? <img src={item.image} alt={item.label} className="h-full w-full object-cover" draggable={false} /> : item.emoji}</div>
        <div className="mt-1 text-center font-serif-display text-[11px] italic">{item.label}</div>
      </>
    );
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

  const zoomBy = (delta: number) => setZoom((value) => Math.min(ZOOM_MAX, Math.max(ZOOM_MIN, Number((value + delta).toFixed(2)))));

  const startDrag = (event: React.PointerEvent<HTMLDivElement>, item: DeskItem) => {
    event.preventDefault();
    event.stopPropagation();
    const current = positions[item.id];
    drag.current = { id: item.id, startX: event.clientX, startY: event.clientY, itemX: current.x, itemY: current.y, moved: false };
    setZIndices((previous) => ({ ...previous, [item.id]: ++maxZ.current }));
    event.currentTarget.setPointerCapture(event.pointerId);
  };

  const moveDrag = (event: React.PointerEvent<HTMLDivElement>) => {
    if (!drag.current) return;
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
    <main className="flex min-h-screen flex-col bg-[#080401] text-[#ead9b5]">
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

      <section className="relative flex-1 overflow-auto overscroll-none pt-0">
        <div style={{ width: DESK_W * zoom, height: DESK_H * zoom }} className="relative shrink-0">
          <div
            style={{ width: DESK_W, height: DESK_H, transform: `scale(${zoom})`, transformOrigin: "top left" }}
            className="relative bg-[#180c04] shadow-[inset_0_0_140px_rgba(0,0,0,0.85)] bg-[radial-gradient(ellipse_at_38%_28%,rgba(80,38,8,0.55),transparent_50%),radial-gradient(ellipse_at_72%_68%,rgba(40,18,4,0.5),transparent_46%)]"
          >
            {[[28, 26, "Bibliothèque"], [28, 270, "Applications"], [28, 480, "Jeux & prototypes"], [28, 678, "Soutenir"], [858, 24, "Archives Blacklace"]].map(([x, y, label]) => (
              <div key={String(label)} className="absolute font-serif-display text-[11px] uppercase tracking-[0.2em] text-amber-200/25" style={{ left: Number(x), top: Number(y) }}>{label}</div>
            ))}

            {[268, 484, 692].map((y) => <div key={y} className="absolute left-5 h-px w-[820px] bg-gradient-to-r from-amber-700/20 via-amber-700/10 to-transparent" style={{ top: y }} />)}
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
                  className={`absolute select-none rounded-sm ${frameStyle[item.kind]}`}
                  style={{
                    left: pos.x,
                    top: pos.y,
                    width: item.width,
                    height: item.kind === "badge" ? item.width : undefined,
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
