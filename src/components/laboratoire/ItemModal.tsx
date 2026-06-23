import type { DeskItem } from "./deskItems";

export function ItemModal({ item, onClose }: { item: DeskItem; onClose: () => void }) {
  return (
    <div className="fixed inset-0 z-[100] grid place-items-center bg-black/70 p-4" onClick={onClose}>
      <article className="w-full max-w-xl rounded-2xl border border-amber-800 bg-[#160c05] p-5 text-[#ead9b5]" onClick={(event) => event.stopPropagation()}>
        <div className="mb-3 flex items-start justify-between gap-4">
          <div>
            <p className="font-mono text-xs uppercase tracking-widest text-amber-300/60">{item.kind}</p>
            <h2 className="mt-1 font-serif-display text-4xl leading-none text-[#f2dfb8]">{item.label}</h2>
          </div>
          <button type="button" onClick={onClose} className="rounded-full border border-amber-700 px-3 py-1 text-sm">
            Fermer
          </button>
        </div>

        {item.image ? <img src={item.image} alt="" className="mx-auto mb-4 max-h-72 rounded-lg object-contain" /> : null}
        {!item.image && item.emoji ? <div className="mb-4 grid h-32 place-items-center rounded-xl border border-amber-900 bg-black/20 text-6xl">{item.emoji}</div> : null}
        {item.body ? <pre className="mb-4 whitespace-pre-wrap rounded-xl bg-[#ead9b5] p-4 font-mono text-sm leading-relaxed text-[#221309]">{item.body}</pre> : null}

        <p className="text-base leading-relaxed text-[#cdbb94]">{item.description}</p>

        <div className="mt-6 flex flex-wrap gap-3">
          {item.url ? <a href={item.url} className="rounded-md bg-[#b54832] px-4 py-2 text-sm font-semibold text-white">{item.actionLabel ?? "Ouvrir"}</a> : null}
          <button type="button" onClick={onClose} className="rounded-md border border-[#6a563a] px-4 py-2 text-sm text-[#ead9b5]">
            Refermer le dossier
          </button>
        </div>
      </article>
    </div>
  );
}
