import { useEffect, useRef } from "react";
import { ArrowDown, ArrowLeft, ArrowRight, ArrowUp } from "lucide-react";

type Direction = "up" | "down" | "left" | "right";

const STEP = 88;

function readDeskTransform() {
  const desk = document.querySelector<HTMLElement>(".lab-desk");
  if (!desk) return null;

  const transform = desk.style.transform;
  const translate = transform.match(/translate3d\((-?[0-9.]+)px,\s*(-?[0-9.]+)px,\s*0\)/);
  const scale = transform.match(/scale\(([0-9.]+)\)/);

  return {
    desk,
    x: translate ? Number(translate[1]) : 0,
    y: translate ? Number(translate[2]) : 0,
    zoom: scale ? Number(scale[1]) : 0.5,
  };
}

function moveDesk(direction: Direction, amount = STEP) {
  const current = readDeskTransform();
  if (!current) return;

  const x = current.x + (direction === "right" ? -amount : direction === "left" ? amount : 0);
  const y = current.y + (direction === "down" ? -amount : direction === "up" ? amount : 0);
  current.desk.style.transform = `translate3d(${x}px, ${y}px, 0) scale(${current.zoom})`;
}

export function EdgePanControls() {
  const timer = useRef<number | null>(null);
  const frame = useRef<number | null>(null);
  const active = useRef<Direction | null>(null);

  const stop = () => {
    active.current = null;
    if (timer.current !== null) window.clearTimeout(timer.current);
    if (frame.current !== null) window.cancelAnimationFrame(frame.current);
    timer.current = null;
    frame.current = null;
  };

  const repeat = () => {
    if (!active.current) return;
    moveDesk(active.current, 24);
    frame.current = window.requestAnimationFrame(repeat);
  };

  const start = (direction: Direction) => {
    stop();
    active.current = direction;
    moveDesk(direction);
    timer.current = window.setTimeout(() => {
      frame.current = window.requestAnimationFrame(repeat);
    }, 220);
  };

  useEffect(() => stop, []);

  const base = "fixed z-[70] grid place-items-center border border-amber-700/45 bg-[#120802]/80 text-amber-100/80 shadow-lg backdrop-blur transition hover:bg-[#271005]/90 hover:text-amber-100 active:scale-95";

  return (
    <>
      <button type="button" aria-label="Glisser le bureau vers le haut" title="Glisser le bureau vers le haut" onPointerDown={() => start("up")} onPointerUp={stop} onPointerCancel={stop} onPointerLeave={stop} className={`${base} left-1/2 top-[92px] h-11 w-20 -translate-x-1/2 rounded-b-xl`}>
        <ArrowUp className="h-5 w-5" />
      </button>
      <button type="button" aria-label="Glisser le bureau vers le bas" title="Glisser le bureau vers le bas" onPointerDown={() => start("down")} onPointerUp={stop} onPointerCancel={stop} onPointerLeave={stop} className={`${base} bottom-5 left-1/2 h-11 w-20 -translate-x-1/2 rounded-t-xl`}>
        <ArrowDown className="h-5 w-5" />
      </button>
      <button type="button" aria-label="Glisser le bureau vers la gauche" title="Glisser le bureau vers la gauche" onPointerDown={() => start("left")} onPointerUp={stop} onPointerCancel={stop} onPointerLeave={stop} className={`${base} left-3 top-1/2 h-20 w-11 -translate-y-1/2 rounded-r-xl`}>
        <ArrowLeft className="h-5 w-5" />
      </button>
      <button type="button" aria-label="Glisser le bureau vers la droite" title="Glisser le bureau vers la droite" onPointerDown={() => start("right")} onPointerUp={stop} onPointerCancel={stop} onPointerLeave={stop} className={`${base} right-3 top-1/2 h-20 w-11 -translate-y-1/2 rounded-l-xl`}>
        <ArrowRight className="h-5 w-5" />
      </button>
    </>
  );
}
