import { useEffect, useRef, useState, type PointerEvent } from "react";
import { createPortal } from "react-dom";
import dice420 from "@/assets/laboratoire/games/420-dice-game-card.svg";

const GAME_URL = "https://benoitlub.github.io/420-dice-game-reboot/";

type Position = { x: number; y: number };
type DragState = {
  pointerId: number;
  startX: number;
  startY: number;
  originX: number;
  originY: number;
  moved: boolean;
};

export function Dice420LabObject() {
  const [host, setHost] = useState<HTMLElement | null>(null);
  const [position, setPosition] = useState<Position>({ x: 715, y: 785 });
  const [open, setOpen] = useState(false);
  const drag = useRef<DragState | null>(null);
  const frame = useRef<number | null>(null);
  const pending = useRef<Position | null>(null);

  useEffect(() => {
    const findHost = () => {
      const desk = document.querySelector<HTMLElement>(".lab-desk");
      if (desk) setHost(desk);
      else window.requestAnimationFrame(findHost);
    };
    findHost();
    return () => {
      if (frame.current !== null) window.cancelAnimationFrame(frame.current);
    };
  }, []);

  const flush = () => {
    if (pending.current) setPosition(pending.current);
    pending.current = null;
    frame.current = null;
  };

  const startDrag = (event: PointerEvent<HTMLDivElement>) => {
    event.preventDefault();
    event.stopPropagation();
    drag.current = {
      pointerId: event.pointerId,
      startX: event.clientX,
      startY: event.clientY,
      originX: position.x,
      originY: position.y,
      moved: false,
    };
    event.currentTarget.setPointerCapture(event.pointerId);
  };

  const moveDrag = (event: PointerEvent<HTMLDivElement>) => {
    const current = drag.current;
    if (!current || current.pointerId !== event.pointerId) return;
    const desk = host;
    const transform = desk ? getComputedStyle(desk).transform : "none";
    const matrix = transform !== "none" ? new DOMMatrixReadOnly(transform) : null;
    const zoom = matrix?.a || 1;
    const dx = (event.clientX - current.startX) / zoom;
    const dy = (event.clientY - current.startY) / zoom;
    if (Math.abs(dx) > 4 || Math.abs(dy) > 4) current.moved = true;
    pending.current = { x: current.originX + dx, y: current.originY + dy };
    if (frame.current === null) frame.current = window.requestAnimationFrame(flush);
  };

  const stopDrag = (event: PointerEvent<HTMLDivElement>) => {
    const current = drag.current;
    if (!current || current.pointerId !== event.pointerId) return;
    drag.current = null;
    if (!current.moved) setOpen(true);
  };

  if (!host) return null;

  return (
    <>
      {createPortal(
        <div
          className="lab-object absolute select-none"
          style={{ left: position.x, top: position.y, width: 230, zIndex: 68, transform: "rotate(-3deg)", touchAction: "none" }}
          onPointerDown={startDrag}
          onPointerMove={moveDrag}
          onPointerUp={stopDrag}
          onPointerCancel={stopDrag}
          title="420 Dice Game"
        >
          <img src={dice420} alt="420 Dice Game" draggable={false} loading="lazy" className="block h-auto w-full" />
        </div>,
        host,
      )}

      {open ? (
        <div className="fixed inset-0 z-[120] grid place-items-center bg-black/75 p-4 backdrop-blur-sm" onClick={() => setOpen(false)}>
          <article className="grid w-full max-w-3xl gap-5 rounded-2xl border border-amber-800/60 bg-[#160b05] p-5 text-[#ead9b5] shadow-2xl md:grid-cols-[290px_1fr]" onClick={(event) => event.stopPropagation()}>
            <img src={dice420} alt="420 Dice Game" className="w-full rounded-xl shadow-xl" />
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-amber-300/55">Jeu disponible · FR / ES / EN</p>
              <h2 className="mt-2 font-serif-display text-5xl leading-none">420 Dice Game</h2>
              <p className="mt-4 leading-relaxed text-[#cdbb94]">
                Un jeu de dés mobile du Feuch Institute : packs thématiques, défis, trophées, statistiques, sons et vibrations. Chaque lancer fabrique une petite expérience à jouer seul ou à plusieurs.
              </p>
              <div className="mt-5 flex flex-wrap gap-2 text-xs text-amber-100/70">
                <span className="rounded-full border border-amber-800/50 px-3 py-1">Mobile-first</span>
                <span className="rounded-full border border-amber-800/50 px-3 py-1">Multilingue</span>
                <span className="rounded-full border border-amber-800/50 px-3 py-1">Trophées & statistiques</span>
              </div>
              <div className="mt-7 flex flex-wrap gap-3">
                <a href={GAME_URL} target="_blank" rel="noreferrer noopener" className="rounded-md bg-[#b54832] px-5 py-3 text-sm font-semibold text-white shadow hover:bg-[#ca563d]">
                  Lancer les dés
                </a>
                <button type="button" onClick={() => setOpen(false)} className="rounded-md border border-[#6a563a] px-5 py-3 text-sm">
                  Refermer la fiche
                </button>
              </div>
            </div>
          </article>
        </div>
      ) : null}
    </>
  );
}
