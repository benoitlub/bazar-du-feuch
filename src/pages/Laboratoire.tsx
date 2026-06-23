import { Link } from "react-router-dom";
import { useMemo, useRef, useState } from "react";
import { projects } from "@/data/projects";

type BoardItem = {
  id: string;
  title: string;
  kind: string;
  x: number;
  y: number;
  w: number;
  h: number;
  rotate?: number;
  image?: string;
  text?: string;
  href?: string;
  action?: string;
};

const boardW = 2600;
const boardH = 1700;

const makeItems = (): BoardItem[] => {
  const byId = Object.fromEntries(projects.map((p) => [p.id, p]));
  const bookIds = [
    "terra",
    "gerard-et-gerard",
    "neverland-ltd-1",
    "neverland-ltd-2",
    "feulette-tachetee",
    "kif-et-molla",
    "crotte-man",
  ];
  const appIds = ["spectrl", "creature-sync", "clochette-lite"];
  const gameIds = ["prohibited-online", "blacklace-dice", "blacklace-echo"];

  return [
    {
      id: "intro",
      title: "Le Bazar du Feuch",
      kind: "header",
      x: 80,
      y: 70,
      w: 600,
      h: 190,
      text: "Laboratoire d'histoires, d'experiences et de creatures plus ou moins homologuees.",
    },
    {
      id: "note-top",
      title: "Bienvenue au Feuch Institute",
      kind: "note",
      x: 760,
      y: 55,
      w: 520,
      h: 170,
      rotate: -2,
      text: "Ici, on observe, on note, on fabrique, on code, on ecrit et parfois ca fonctionne.",
    },
    {
      id: "mug",
      title: "Le laboratoire manque de cafe",
      kind: "mug",
      x: 1430,
      y: 50,
      w: 330,
      h: 180,
      rotate: 4,
      text: "FEUCH INSTITUTE",
    },
    {
      id: "soutenir-top",
      title: "Soutenir le Feuch Institute",
      kind: "support",
      x: 1840,
      y: 80,
      w: 420,
      h: 180,
      href: "https://ko-fi.com/feuchinstitut",
      action: "Offrir un cafe",
      text: "Aidez le laboratoire a garder les experiences en vie.",
    },
    ...bookIds.map((id, i) => {
      const p = byId[id];
      return {
        id: p.id,
        title: p.title,
        kind: "book",
        x: 90 + i * 340,
        y: id === "crotte-man" ? 750 : 330,
        w: 260,
        h: id === "crotte-man" ? 410 : 360,
        rotate: [-2, 1, -1, 1, 3, -2, -3][i],
        image: p.image,
        text: p.description,
        href: p.url,
        action: "Lire sur Amazon",
      };
    }),
    ...appIds.map((id, i) => {
      const p = byId[id];
      return {
        id: p.id,
        title: p.title,
        kind: "app",
        x: 560 + i * 350,
        y: 820,
        w: 310,
        h: 330,
        rotate: [-1, 1, -2][i],
        image: p.image,
        text: p.description,
        href: p.url,
        action: p.actionLabel ?? "Voir le projet",
      };
    }),
    ...gameIds.map((id, i) => {
      const p = byId[id];
      return {
        id: p.id,
        title: p.title,
        kind: "game",
        x: 110 + i * 370,
        y: 1250,
        w: 320,
        h: 330,
        rotate: [2, -2, 1][i],
        image: p.image,
        text: p.description,
        href: p.url,
        action: p.actionLabel ?? "Voir le projet",
      };
    }),
    {
      id: "sator",
      title: "Carre SATOR",
      kind: "artifact",
      x: 80,
      y: 1590,
      w: 300,
      h: 250,
      text: "SATOR AREPO TENET OPERA ROTAS",
    },
    {
      id: "rotas-map",
      title: "Port Porsa Rotas",
      kind: "map",
      x: 470,
      y: 1540,
      w: 460,
      h: 300,
      rotate: -1,
      text: "Carte de terrain. Attention marees et creatures.",
    },
    {
      id: "bnn24",
      title: "BNN24",
      kind: "ticket",
      x: 1580,
      y: 1480,
      w: 360,
      h: 220,
      rotate: 2,
      text: "Acces salle de presse. La verite n'a pas peur de la nuit.",
    },
    {
      id: "support-card",
      title: "Soutenir le Feuch Institute",
      kind: "support",
      x: 1990,
      y: 1320,
      w: 420,
      h: 360,
      href: "https://ko-fi.com/feuchinstitut",
      action: "Offrir un cafe",
      text: "Les livres, applications et experiences improbables du laboratoire sont finances grace aux visiteurs et aux mecenes du Feuch Institute.",
    },
    {
      id: "contact",
      title: "Contact du laboratoire",
      kind: "note",
      x: 1180,
      y: 1540,
      w: 330,
      h: 250,
      text: "lubertvlc@gmail.com",
    },
  ];
};

const LabCard = ({ item, onOpen }: { item: BoardItem; onOpen: (item: BoardItem) => void }) => {
  const style = {
    left: item.x,
    top: item.y,
    width: item.w,
    height: item.h,
    transform: `rotate(${item.rotate ?? 0}deg)`,
  } as const;

  return (
    <button
      type="button"
      style={style}
      onClick={() => onOpen(item)}
      className={`absolute rounded-xl border text-left shadow-[0_18px_40px_rgba(0,0,0,0.5)] transition hover:z-30 hover:-translate-y-1 hover:scale-[1.02] ${
        item.kind === "book"
          ? "border-amber-800/70 bg-[#1a120c]"
          : item.kind === "app"
            ? "border-emerald-800/70 bg-[#07120c]"
            : item.kind === "game"
              ? "border-red-900/70 bg-[#120909]"
              : item.kind === "support"
                ? "border-amber-700 bg-[#d9c6a0] text-[#21150c]"
                : "border-[#5a4934] bg-[#c8b48a] text-[#26180e]"
      }`}
    >
      <div className="flex h-full flex-col overflow-hidden rounded-xl p-4">
        {item.kind === "header" ? (
          <>
            <div className="font-serif-display text-5xl leading-none text-[#efe0bd]">{item.title}</div>
            <p className="mt-4 text-sm text-[#c9b58d]">{item.text}</p>
          </>
        ) : item.kind === "mug" ? (
          <div className="grid h-full place-items-center rounded-full border-4 border-[#4b3523] bg-[#b99b70] text-center font-serif-display text-3xl text-[#21150c]">
            ☕<span className="block text-lg">{item.text}</span>
          </div>
        ) : (
          <>
            {item.image ? (
              <img src={item.image} alt="" className="mx-auto h-40 max-w-full rounded-md object-contain shadow-lg" />
            ) : null}
            <h3 className="mt-3 font-serif-display text-2xl leading-tight">{item.title}</h3>
            <p className="mt-2 line-clamp-4 text-sm opacity-80">{item.text}</p>
            {item.action ? (
              <span className="mt-auto inline-flex rounded-md border border-current/40 px-3 py-2 text-sm">{item.action}</span>
            ) : null}
          </>
        )}
      </div>
    </button>
  );
};

const Laboratoire = () => {
  const items = useMemo(makeItems, []);
  const [active, setActive] = useState<BoardItem | null>(null);
  const [scale, setScale] = useState(0.58);
  const [pos, setPos] = useState({ x: -120, y: -70 });
  const drag = useRef<{ x: number; y: number; px: number; py: number } | null>(null);

  return (
    <main className="h-screen overflow-hidden bg-[#080604] text-[#ead9b5]">
      <div className="fixed left-4 top-4 z-50 flex flex-col gap-2">
        <Link to="/" className="rounded-full border border-[#6a563a] bg-[#120d08]/90 px-4 py-2 text-sm shadow-lg">
          ← Retour au Bazar
        </Link>
        <button onClick={() => setPos({ x: -120, y: -70 })} className="rounded-full border border-[#6a563a] bg-[#120d08]/90 px-4 py-2 text-sm shadow-lg">
          Recentrer le bureau
        </button>
        <button onClick={() => setScale((v) => Math.min(0.9, v + 0.08))} className="rounded-full border border-[#6a563a] bg-[#120d08]/90 px-4 py-2 text-sm shadow-lg">
          Zoom +
        </button>
        <button onClick={() => setScale((v) => Math.max(0.35, v - 0.08))} className="rounded-full border border-[#6a563a] bg-[#120d08]/90 px-4 py-2 text-sm shadow-lg">
          Zoom -
        </button>
      </div>

      <div
        className="h-full w-full cursor-grab active:cursor-grabbing"
        onPointerDown={(e) => {
          drag.current = { x: e.clientX, y: e.clientY, px: pos.x, py: pos.y };
          (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
        }}
        onPointerMove={(e) => {
          if (!drag.current) return;
          setPos({ x: drag.current.px + e.clientX - drag.current.x, y: drag.current.py + e.clientY - drag.current.y });
        }}
        onPointerUp={() => {
          drag.current = null;
        }}
      >
        <section
          style={{ width: boardW, height: boardH, transform: `translate(${pos.x}px, ${pos.y}px) scale(${scale})` }}
          className="relative origin-top-left bg-[#15100a] bg-[radial-gradient(circle_at_20%_20%,rgba(125,91,50,0.25),transparent_28%),radial-gradient(circle_at_80%_30%,rgba(34,87,57,0.18),transparent_25%),linear-gradient(135deg,rgba(255,255,255,0.03),transparent_45%)]"
        >
          <div className="absolute inset-0 border border-[#453322] shadow-[inset_0_0_120px_rgba(0,0,0,0.85)]" />
          {Array.from({ length: 60 }).map((_, i) => (
            <span
              key={i}
              className="absolute h-2 w-2 rounded-full bg-[#3a2a1a]/60"
              style={{ left: (i * 131) % boardW, top: (i * 97) % boardH }}
            />
          ))}
          {items.map((item) => (
            <LabCard key={item.id} item={item} onOpen={setActive} />
          ))}
        </section>
      </div>

      {active ? (
        <div className="fixed inset-0 z-50 grid place-items-center bg-black/60 p-4" onClick={() => setActive(null)}>
          <article onClick={(e) => e.stopPropagation()} className="max-w-xl rounded-2xl border border-[#6a563a] bg-[#17100a] p-6 text-[#ead9b5] shadow-2xl">
            {active.image ? <img src={active.image} alt="" className="mx-auto mb-4 max-h-64 rounded-lg object-contain" /> : null}
            <h2 className="font-serif-display text-4xl">{active.title}</h2>
            <p className="mt-4 text-[#c7b48f]">{active.text}</p>
            <div className="mt-6 flex flex-wrap gap-3">
              {active.href ? (
                <a href={active.href} target={active.href.startsWith("#") ? undefined : "_blank"} rel="noreferrer noopener" className="rounded-md bg-[#b54832] px-4 py-2 text-white">
                  {active.action ?? "Ouvrir"}
                </a>
              ) : null}
              <button onClick={() => setActive(null)} className="rounded-md border border-[#6a563a] px-4 py-2">
                Refermer
              </button>
            </div>
          </article>
        </div>
      ) : null}
    </main>
  );
};

export default Laboratoire;
