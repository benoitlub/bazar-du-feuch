import type { DeskItem } from "./deskItems";

const labels: Record<DeskItem["kind"], string> = {
  book: "Livre du laboratoire",
  app: "Application & outil",
  game: "Jeu & prototype",
  note: "Note manuscrite",
  badge: "Badge / sceau",
  card: "Archive papier",
  decor: "Objet de paillasse",
  support: "Soutenir le labo",
  polaroid: "Photo / polaroid",
  map: "Carte & plan",
  ticket: "Ticket presse",
  poster: "Affiche pliée",
  folder: "Dossier classé",
  coaster: "Objet circulaire",
  playingCard: "Carte Pro.Hibited",
};

function VisualPreview({ item }: { item: DeskItem }) {
  return <img src={item.image} alt={item.label} className="h-full w-full object-contain drop-shadow-[0_16px_26px_rgba(0,0,0,0.55)]" />;
}

export function ItemModal({ item, onClose }: { item: DeskItem; onClose: () => void }) {
  const external = item.url ? !item.url.startsWith("#") : false;

  return (
    <div className="fixed inset-0 z-[100] grid place-items-center bg-black/75 p-4 backdrop-blur-sm" onClick={onClose}>
      <article className="relative max-h-[92vh] w-full max-w-4xl overflow-auto rounded-2xl border border-[#6a4a25] bg-[#120904] p-4 text-[#ead9b5] shadow-2xl" onClick={(event) => event.stopPropagation()}>
        <div className="absolute right-6 top-6 rotate-6 rounded border-2 border-red-900/60 px-3 py-1 font-mono text-xs uppercase tracking-widest text-red-300/70">Feuch</div>

        <div className="grid gap-5 md:grid-cols-[320px_1fr]">
          <div className="rounded-xl border border-[#5c4328] bg-[#21140a] p-3 shadow-inner">
            <div className="h-72 rounded-lg border border-black/30 bg-[#0b0502] p-3">
              <VisualPreview item={item} />
            </div>
            <div className="mt-3 flex items-center justify-between gap-2 font-mono text-[10px] uppercase tracking-[0.2em] text-amber-200/50">
              <span>{item.caption ?? labels[item.kind]}</span>
              <span>{item.kind}</span>
            </div>
          </div>

          <div className="rounded-xl bg-[#ead9b5] p-5 text-[#211207] shadow-[inset_0_0_45px_rgba(70,35,10,0.25)]">
            <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-[#7b3b1e]">{labels[item.kind]}</p>
            <h2 className="mt-2 font-serif-display text-5xl leading-none text-[#281405]">{item.label}</h2>
            <p className="mt-4 text-base leading-relaxed text-[#3a2110]">{item.description}</p>

            {item.body ? (
              <pre className="mt-5 whitespace-pre-wrap rounded-xl border border-[#a88655] bg-[#f6ecd2] p-4 font-mono text-sm leading-relaxed text-[#2b180c] shadow-inner">{item.body}</pre>
            ) : null}

            <div className="mt-6 flex flex-wrap gap-3">
              {item.url ? <a href={item.url} target={external ? "_blank" : undefined} className="rounded-md bg-[#1f1309] px-4 py-2 text-sm font-semibold text-[#f3e3bf] shadow">{item.actionLabel ?? "Ouvrir le dossier"}</a> : null}
              <button type="button" onClick={onClose} className="rounded-md border border-[#6a4a25] px-4 py-2 text-sm text-[#281405]">
                Refermer la fiche
              </button>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}
