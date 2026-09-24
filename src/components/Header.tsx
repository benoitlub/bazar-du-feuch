import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import { Menu, X, Info, FlaskConical, Gamepad2, Coffee } from "lucide-react";
import { cn } from "@/lib/utils";

const links = [
  { to: "/", label: "Le Bazar", end: true },
  { to: "/laboratoire", label: "Laboratoire" },
  { to: "/a-propos", label: "À propos" },
  { to: "/#contact", label: "Contact" },
];

export const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-ink/40 bg-[hsl(25_28%_14%/0.88)] text-parchment backdrop-blur-md">
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        <Link to="/" className="group flex items-center gap-3">
          <span className="grid h-10 w-10 place-items-center rounded-full bg-[image:var(--gradient-flask)] text-lg text-primary-foreground shadow-inner">
            ⚗
          </span>
          <div className="leading-tight">
            <div className="font-display text-xl text-parchment">Le Bazar</div>
            <div className="label-stamp text-[0.6rem] text-parchment/60">
              du Professeur Feuch
            </div>
          </div>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.end}
              className={({ isActive }) =>
                cn(
                  "label-stamp text-[0.7rem] transition-colors",
                  isActive ? "text-gold" : "text-parchment/75 hover:text-gold",
                )
              }
            >
              {l.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-1.5"><a href="https://benoitlub.github.io/feuchlab/" title="Feuch Lab" aria-label="Feuch Lab" className="grid h-9 w-9 place-items-center rounded-xl border border-parchment/25 text-parchment/90"><FlaskConical size={18}/></a><a href="https://feuch-game.benoitlubert.workers.dev/" title="Feuch Game" aria-label="Feuch Game" className="grid h-9 w-9 place-items-center rounded-xl border border-parchment/25 text-parchment/90"><Gamepad2 size={18}/></a><Link to="/a-propos" title="Informations" aria-label="À propos du Bazar" className="grid h-9 w-9 place-items-center rounded-xl border border-parchment/25 text-parchment/90"><Info size={18}/></Link><a href="https://ko-fi.com/feuchinstitut" target="_blank" rel="noopener noreferrer" title="Soutenir sur Ko-fi" aria-label="Soutenir sur Ko-fi" className="grid h-9 w-9 place-items-center rounded-xl border border-parchment/25 text-parchment/90"><Coffee size={18}/></a><button
          className="rounded-md p-2 text-parchment md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Fermer le menu" : "Ouvrir le menu"} aria-expanded={open}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button></div>
      </div>

      {open && (
        <nav className="border-t border-ink/40 bg-[hsl(25_28%_12%/0.95)] px-4 py-3 md:hidden">
          <ul className="flex flex-col gap-3">
            {links.map((l) => (
              <li key={l.to}>
                <NavLink
                  to={l.to}
                  end={l.end}
                  onClick={() => setOpen(false)}
                  className="label-stamp block py-1 text-xs text-parchment/85"
                >
                  {l.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
};
