/**
 * FeuchDecor — éléments décoratifs discrets du Feuch Institut.
 * Superposition fixe, pointer-events-none, z-index bas.
 * Tous les éléments sont aria-hidden.
 */
export const FeuchDecor = () => (
  <div
    aria-hidden
    className="pointer-events-none fixed inset-0 overflow-hidden"
    style={{ zIndex: 0 }}
  >
    <div className="feuch-stamp absolute right-12 top-28 text-primary/40" style={{ transform: "rotate(12deg)", fontSize: "0.55rem" }}>
      Protocole
    </div>

    <div className="feuch-stamp absolute left-8 top-[40%] text-accent/35" style={{ transform: "rotate(-8deg)", fontSize: "0.5rem" }}>
      Archive
    </div>

    <div className="feuch-stamp absolute bottom-[30%] right-10 text-gold/40" style={{ transform: "rotate(5deg)", fontSize: "0.5rem" }}>
      Signal
    </div>

    <div className="feuch-stamp absolute bottom-24 left-1/2 -translate-x-1/2 text-ink/20" style={{ transform: "translateX(-50%) rotate(-2deg)", fontSize: "0.55rem" }}>
      Feuch Institut · Est. 2023
    </div>

    <div className="feuch-annotation absolute left-4 top-[58%] max-w-[90px] text-ink/35" style={{ transform: "rotate(-90deg) translateX(50%)", transformOrigin: "left center" }}>
      ← Ne pas toucher au troisième bouton
    </div>

    <svg className="absolute bottom-16 left-6 opacity-[0.07]" width="80" height="28" viewBox="0 0 80 28" fill="none">
      <path d="M0 14 Q10 2 20 14 Q30 26 40 14 Q50 2 60 14 Q70 26 80 14" stroke="hsl(178 42% 36%)" strokeWidth="1.5" fill="none" />
      <path d="M0 14 Q10 6 20 14 Q30 22 40 14 Q50 6 60 14 Q70 22 80 14" stroke="hsl(178 42% 36%)" strokeWidth="0.75" fill="none" opacity="0.5" />
    </svg>

    <svg className="absolute right-6 top-[35%] opacity-[0.055]" width="90" height="90" viewBox="0 0 90 90">
      <circle cx="45" cy="45" r="40" stroke="hsl(178 42% 36%)" strokeWidth="0.75" fill="none" />
      <circle cx="45" cy="45" r="28" stroke="hsl(178 42% 36%)" strokeWidth="0.5" fill="none" />
      <circle cx="45" cy="45" r="16" stroke="hsl(178 42% 36%)" strokeWidth="0.5" fill="none" />
      <circle cx="45" cy="45" r="5" stroke="hsl(178 42% 36%)" strokeWidth="0.5" fill="none" />
      <line x1="45" y1="5" x2="45" y2="85" stroke="hsl(178 42% 36%)" strokeWidth="0.4" />
      <line x1="5" y1="45" x2="85" y2="45" stroke="hsl(178 42% 36%)" strokeWidth="0.4" />
      <line x1="16.5" y1="16.5" x2="73.5" y2="73.5" stroke="hsl(178 42% 36%)" strokeWidth="0.3" />
      <line x1="73.5" y1="16.5" x2="16.5" y2="73.5" stroke="hsl(178 42% 36%)" strokeWidth="0.3" />
    </svg>

    <svg className="absolute left-10 bottom-[38%] opacity-[0.07]" width="28" height="28" viewBox="0 0 28 28">
      <rect x="2" y="2" width="24" height="24" rx="4" stroke="hsl(38 78% 45%)" strokeWidth="1.2" fill="none" />
      <circle cx="9" cy="9" r="2" fill="hsl(38 78% 45%)" />
      <circle cx="19" cy="9" r="2" fill="hsl(38 78% 45%)" />
      <circle cx="9" cy="19" r="2" fill="hsl(38 78% 45%)" />
      <circle cx="19" cy="19" r="2" fill="hsl(38 78% 45%)" />
      <circle cx="14" cy="14" r="2" fill="hsl(38 78% 45%)" />
    </svg>

    <svg className="absolute left-5 top-[22%] opacity-[0.07]" width="20" height="50" viewBox="0 0 20 50" style={{ transform: "rotate(12deg)" }}>
      <path d="M10 48 C10 48 2 36 1 22 C0 10 8 2 10 2 C12 2 20 10 19 22 C18 36 10 48 10 48Z" stroke="hsl(350 55% 32%)" strokeWidth="0.8" fill="none" />
      <path d="M10 2 L10 48" stroke="hsl(350 55% 32%)" strokeWidth="0.8" />
      <path d="M10 12 C6 14 2 18 1 22" stroke="hsl(350 55% 32%)" strokeWidth="0.4" />
      <path d="M10 20 C6 22 2 26 1 30" stroke="hsl(350 55% 32%)" strokeWidth="0.4" />
      <path d="M10 12 C14 14 18 18 19 22" stroke="hsl(350 55% 32%)" strokeWidth="0.4" />
      <path d="M10 20 C14 22 18 26 19 30" stroke="hsl(350 55% 32%)" strokeWidth="0.4" />
    </svg>

    <svg className="absolute right-8 bottom-[18%] opacity-[0.065]" width="50" height="30" viewBox="0 0 50 30">
      <path d="M0 15 Q12 0 25 15 Q37 30 50 15" stroke="hsl(178 42% 36%)" strokeWidth="1" fill="none" />
      <path d="M5 15 Q17 5 25 15 Q33 25 45 15" stroke="hsl(178 42% 36%)" strokeWidth="0.5" fill="none" opacity="0.6" />
      <circle cx="25" cy="15" r="2" fill="hsl(178 42% 36%)" />
    </svg>

    <svg className="absolute left-[45%] top-[15%] opacity-[0.05]" width="40" height="40" viewBox="0 0 40 40">
      <ellipse cx="20" cy="20" rx="18" ry="10" stroke="hsl(25 35% 14%)" strokeWidth="0.7" fill="none" style={{ transform: "rotate(-15deg)", transformOrigin: "20px 20px" }} />
      <ellipse cx="20" cy="20" rx="14" ry="7" stroke="hsl(25 35% 14%)" strokeWidth="0.5" fill="none" style={{ transform: "rotate(8deg)", transformOrigin: "20px 20px" }} />
    </svg>
  </div>
);
