import heroImg from "@/assets/hero-lab.jpg";
import { Button } from "@/components/ui/button";

export const Hero = () => (
  <section className="relative overflow-hidden border-b border-border">
    <div className="container relative mx-auto grid items-center gap-10 px-4 py-16 md:grid-cols-2 md:py-24">
      <div className="relative z-10">
        <span className="label-stamp inline-block rounded-full border border-primary/30 px-3 py-1 text-[0.65rem] text-primary">
          Cabinet de curiosités · Édition 1
        </span>
        <h1 className="mt-5 font-serif-display text-5xl leading-[0.95] text-ink md:text-7xl">
          Bienvenue dans
          <span className="block italic text-primary">le bazar</span>
          du Professeur Feuch.
        </h1>
        <p className="mt-6 max-w-lg text-lg leading-relaxed text-muted-foreground">
          Livres curieux, applications bricolées, jeux étranges et fragments
          de l'univers <em>Blacklace</em>. Toutes les créations de{" "}
          <strong className="text-ink">Benoît Lubert</strong> — à soutenir, à
          souhaiter, ou à arroser d'une pièce.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Button asChild variant="apothecary" size="lg">
            <a href="#projets">Explorer les créations</a>
          </Button>
          <Button asChild variant="parchment" size="lg">
            <a href="#contact">Écrire au laboratoire</a>
          </Button>
        </div>
      </div>

      <div className="relative">
        <div className="absolute -left-6 -top-6 hidden h-24 w-24 rounded-full bg-primary-glow/30 blur-2xl md:block" />
        <div className="absolute -bottom-8 -right-4 hidden h-32 w-32 rounded-full bg-accent/30 blur-3xl md:block" />
        <div className="paper-card relative overflow-hidden">
          <img
            src={heroImg}
            alt="Atelier du Professeur Feuch — fioles, livres et instruments de cuivre"
            width={1600}
            height={1024}
            className="aspect-[16/10] w-full object-cover"
          />
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_55%,hsl(25_40%_14%/0.35))]" />
        </div>
        <span className="absolute -right-3 top-6 hidden rotate-12 rounded-full bg-gold px-3 py-1 text-[0.65rem] label-stamp text-gold-foreground shadow-md md:inline-block">
          Édition limitée
        </span>
      </div>
    </div>

    {/* Bubbles */}
    <div aria-hidden className="pointer-events-none absolute inset-0">
      <div className="absolute left-10 top-24 h-3 w-3 animate-bubble rounded-full bg-primary-glow/60" />
      <div className="absolute left-1/3 top-10 h-2 w-2 animate-bubble rounded-full bg-accent/60" style={{ animationDelay: "1s" }} />
      <div className="absolute right-1/4 bottom-16 h-4 w-4 animate-bubble rounded-full bg-gold/60" style={{ animationDelay: "2s" }} />
    </div>
  </section>
);