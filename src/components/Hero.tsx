import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { FlaskConical } from "lucide-react";

export const Hero = () => (
  <section className="relative overflow-hidden border-b border-amber-100/20 text-[#f5ead0]">
    <div aria-hidden className="pointer-events-none absolute inset-0">
      <div className="absolute -left-12 top-0 h-64 w-64 rounded-full bg-primary/20 blur-3xl" />
      <div className="absolute right-0 top-0 h-56 w-56 rounded-full bg-accent/20 blur-3xl" />
      <div className="absolute bottom-0 left-1/3 h-48 w-48 rounded-full bg-gold/15 blur-3xl" />
    </div>

    <div className="container relative mx-auto grid items-center gap-10 px-4 py-16 md:grid-cols-2 md:py-24">
      <div className="relative z-10">
        <span className="label-stamp inline-flex items-center gap-2 rounded-sm border border-[#c85a55]/70 bg-[#2a1712]/80 px-3 py-1 text-[0.62rem] text-[#ffb9a8] shadow-sm">
          <span aria-hidden className="text-xs">⚗</span>
          Feuch Institut · Cabinet de curiosités numériques
        </span>

        <h1 className="mt-5 font-serif-display text-5xl leading-[0.95] text-[#fff3d8] drop-shadow-[0_2px_10px_rgba(0,0,0,0.7)] md:text-7xl">
          Le Bazar
          <span className="block italic text-[#ff6f7d]">du Feuch</span>
        </h1>

        <p className="mt-6 max-w-lg text-lg leading-relaxed text-[#ead9b5] drop-shadow-[0_1px_6px_rgba(0,0,0,0.8)]">
          Livres, jeux, applications, prototypes et fragments de l'univers{" "}
          <em className="text-[#fff0c7]">Blacklace</em>. Ici, on ne vend pas du rêve automatique : on
          montre des créations existantes, parfois terminées, parfois encore
          couvertes de boulons, de plumes et de bugs.
        </p>

        <div aria-hidden className="mt-4 flex items-center gap-1 opacity-70">
          {[3, 6, 9, 12, 8, 5, 10, 14, 7, 4, 11, 6, 9, 3, 7].map((h, i) => (
            <span
              key={i}
              className="inline-block w-0.5 rounded-full bg-[#69d6c9]"
              style={{ height: `${h}px`, opacity: 0.5 + (i % 3) * 0.2 }}
            />
          ))}
          <span className="feuch-annotation ml-2 text-[#8de5d9]">signal actif</span>
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
          <Button asChild variant="apothecary" size="lg">
            <a href="#projets">Explorer le bazar</a>
          </Button>
          <Button asChild variant="copper" size="lg">
            <Link to="/laboratoire">
              <FlaskConical /> Entrer dans le laboratoire
            </Link>
          </Button>
          <Button asChild variant="parchment" size="lg">
            <a href="#soutenir">Soutenir le laboratoire</a>
          </Button>
        </div>

        <p className="feuch-annotation mt-6 text-[#dbc79c]">
          * Prototypes, expériences et boulons indisciplinés inclus.
        </p>
      </div>

      <div className="relative">
        <div className="absolute -left-8 -top-8 hidden h-28 w-28 rounded-full bg-accent/25 blur-2xl md:block" />
        <div className="absolute -bottom-10 -right-6 hidden h-36 w-36 rounded-full bg-gold/25 blur-3xl md:block" />
        <div className="absolute -right-4 top-1/2 hidden h-20 w-20 -translate-y-1/2 rounded-full bg-primary/15 blur-2xl md:block" />

        <div className="paper-card relative aspect-[16/10] overflow-hidden border-[#9b7650]/70 bg-[#120c08]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_30%,rgba(245,184,86,0.18),transparent_28%),radial-gradient(circle_at_80%_70%,rgba(132,50,84,0.28),transparent_35%),linear-gradient(135deg,#24150d,#090605_65%,#1a0d0b)]" />
          <div className="absolute left-[8%] top-[13%] h-[62%] w-[30%] rotate-[-7deg] rounded-md border border-[#d9bf8c]/50 bg-[#e6d2a8] p-4 text-[#24160d] shadow-2xl">
            <div className="label-stamp text-[0.55rem] text-[#8b302f]">Feuch Institute</div>
            <div className="mt-4 font-serif-display text-3xl leading-none">Carnet<br />de terrain</div>
            <p className="mt-4 text-xs leading-snug">Notes, cartes, oiseaux douteux et traces de café froid.</p>
          </div>
          <div className="absolute left-[38%] top-[22%] h-[52%] w-[23%] rotate-[3deg] rounded-lg border border-[#3f7f70]/60 bg-[#07120c] p-4 text-[#b9f4dd] shadow-2xl">
            <div className="label-stamp text-[0.52rem] text-[#69d6c9]">SpecTRL</div>
            <div className="mt-4 h-20 rounded-full border border-[#69d6c9]/40 bg-[radial-gradient(circle,rgba(105,214,201,0.6),transparent_12%),repeating-radial-gradient(circle,transparent_0_14px,rgba(105,214,201,0.28)_15px_16px)]" />
            <p className="mt-3 text-xs">Signal faible. Vérité approximative.</p>
          </div>
          <div className="absolute right-[10%] top-[15%] h-[56%] w-[26%] rotate-[8deg] rounded-md border border-[#b83b32]/60 bg-[#160808] p-4 text-[#ffd8c8] shadow-2xl">
            <div className="label-stamp text-[0.55rem] text-[#ff6f7d]">Pro.Hibited</div>
            <div className="mt-4 grid h-20 place-items-center rounded border border-[#c9aa77]/35 bg-[#ead9b5] text-5xl text-[#190c08]">A♠</div>
            <p className="mt-3 text-xs">Le jeu est interdit. Le plaisir, non.</p>
          </div>
          <div className="absolute bottom-[7%] left-[20%] h-10 w-28 rotate-[4deg] rounded-full border border-[#7b5a3a] bg-[#2a170e] text-center text-xs leading-10 text-[#f4dfb5] shadow-xl">FRUNCH</div>
          <div className="absolute bottom-[8%] right-[25%] h-8 w-32 rotate-[-5deg] rounded-sm border border-[#8b302f]/70 text-center label-stamp text-[0.5rem] leading-8 text-[#ff9b8b]">Archives douteuses</div>
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_45%,rgba(0,0,0,0.65))]" />
          <div className="pointer-events-none absolute inset-0 opacity-[0.07]" style={{ backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 3px, hsl(178 42% 60%) 3px, hsl(178 42% 60%) 4px)" }} />
        </div>

        <span className="absolute -right-3 top-6 hidden rotate-12 rounded-sm bg-gold px-3 py-1 text-[0.62rem] label-stamp text-gold-foreground shadow-md md:inline-block">
          Prototypes vivants
        </span>

        <p className="feuch-annotation mt-2 hidden text-center text-[#dbc79c] md:block">
          Observation n°42 · Labo Feuch Institut
        </p>
      </div>
    </div>

    <div aria-hidden className="pointer-events-none absolute inset-0">
      <div className="absolute left-10 top-24 h-3 w-3 animate-bubble rounded-full bg-primary-glow/50" />
      <div className="absolute left-1/3 top-10 h-2 w-2 animate-bubble rounded-full bg-accent/50" style={{ animationDelay: "1s" }} />
      <div className="absolute right-1/4 bottom-16 h-4 w-4 animate-bubble rounded-full bg-gold/50" style={{ animationDelay: "2s" }} />
      <div className="absolute right-8 top-8 hidden md:block">
        <div className="signal-pulse h-2 w-2 rounded-full bg-accent/60" />
      </div>
    </div>
  </section>
);
