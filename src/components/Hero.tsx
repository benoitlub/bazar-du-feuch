import heroImg from "@/assets/hero-lab.jpg";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { FlaskConical } from "lucide-react";

export const Hero = () => (
  <section className="relative overflow-hidden border-b border-border">
    <div aria-hidden className="pointer-events-none absolute inset-0">
      <div className="absolute -left-12 top-0 h-64 w-64 rounded-full bg-primary/10 blur-3xl" />
      <div className="absolute right-0 top-0 h-56 w-56 rounded-full bg-accent/10 blur-3xl" />
      <div className="absolute bottom-0 left-1/3 h-48 w-48 rounded-full bg-gold/10 blur-3xl" />
    </div>

    <div className="container relative mx-auto grid items-center gap-10 px-4 py-16 md:grid-cols-2 md:py-24">
      <div className="relative z-10">
        <span className="label-stamp inline-flex items-center gap-2 rounded-sm border border-primary/40 bg-primary/5 px-3 py-1 text-[0.62rem] text-primary shadow-sm">
          <span aria-hidden className="text-xs">⚗</span>
          Feuch Institut · Cabinet de curiosités numériques
        </span>

        <h1 className="mt-5 font-serif-display text-5xl leading-[0.95] text-ink md:text-7xl">
          Le Bazar
          <span className="block italic text-primary">du Feuch</span>
        </h1>

        <p className="mt-6 max-w-lg text-lg leading-relaxed text-muted-foreground">
          Livres, jeux, applications, prototypes et fragments de l'univers{" "}
          <em>Blacklace</em>. Ici, on ne vend pas du rêve automatique : on
          montre des créations existantes, parfois terminées, parfois encore
          couvertes de boulons, de plumes et de bugs.
        </p>

        <div aria-hidden className="mt-4 flex items-center gap-1 opacity-30">
          {[3, 6, 9, 12, 8, 5, 10, 14, 7, 4, 11, 6, 9, 3, 7].map((h, i) => (
            <span
              key={i}
              className="inline-block w-0.5 rounded-full bg-accent"
              style={{ height: `${h}px`, opacity: 0.5 + (i % 3) * 0.2 }}
            />
          ))}
          <span className="feuch-annotation ml-2 text-accent">signal actif</span>
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

        <p className="feuch-annotation mt-6 text-ink/40">
          * Prototypes, expériences et boulons indisciplinés inclus.
        </p>
      </div>

      <div className="relative">
        <div className="absolute -left-8 -top-8 hidden h-28 w-28 rounded-full bg-accent/25 blur-2xl md:block" />
        <div className="absolute -bottom-10 -right-6 hidden h-36 w-36 rounded-full bg-gold/25 blur-3xl md:block" />
        <div className="absolute -right-4 top-1/2 hidden h-20 w-20 -translate-y-1/2 rounded-full bg-primary/15 blur-2xl md:block" />

        <div className="paper-card relative overflow-hidden">
          <img
            src={heroImg}
            alt="Atelier du Feuch Institut — fioles, livres et instruments de cuivre"
            width={1600}
            height={1024}
            className="aspect-[16/10] w-full object-cover"
          />
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_45%,hsl(25_40%_14%/0.45))]" />
          <div className="pointer-events-none absolute -left-4 -top-4 h-32 w-32 rounded-full bg-accent/20 blur-2xl" />
          <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-ink/20 to-transparent" />
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage:
                "repeating-linear-gradient(0deg, transparent, transparent 3px, hsl(178 42% 36%) 3px, hsl(178 42% 36%) 4px)",
            }}
          />
        </div>

        <span className="absolute -right-3 top-6 hidden rotate-12 rounded-sm bg-gold px-3 py-1 text-[0.62rem] label-stamp text-gold-foreground shadow-md md:inline-block">
          Prototypes vivants
        </span>

        <p className="feuch-annotation mt-2 hidden text-center text-ink/40 md:block">
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
