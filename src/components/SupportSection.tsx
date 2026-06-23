import { Button } from "@/components/ui/button";
import { Coffee, BookOpen, FlaskConical, Gamepad2 } from "lucide-react";

const kofiUrl = "https://ko-fi.com/feuchinstitut";

export const SupportSection = () => (
  <section id="soutenir" className="container mx-auto px-4 py-12 md:py-16">
    <div className="mx-auto mb-2 flex max-w-5xl justify-center">
      <span className="feuch-stamp text-primary/60" style={{ transform: "rotate(-1.5deg)" }}>
        Note de laboratoire · confidentiel
      </span>
    </div>

    <div className="pinned-note tape-strip mx-auto grid max-w-5xl gap-8 overflow-hidden p-8 md:grid-cols-[1.15fr_0.85fr] md:p-12">
      <div>
        <span className="label-stamp text-[0.68rem] text-primary">Soutenir les expériences</span>
        <h2 className="mt-2 font-serif-display text-4xl text-ink md:text-5xl">
          Nourrir le Feuch Institut
        </h2>
        <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
          Le laboratoire observe les oiseaux, écrit des livres étranges et construit des expériences improbables.
          Si vous appréciez cet univers, vous pouvez offrir un café au laboratoire.
        </p>
        <p className="mt-4 leading-relaxed text-muted-foreground">
          Les contributions servent à financer les hébergements, les outils d'IA, les prototypes, les prochaines publications et les boulons qui refusent obstinément de rester en place.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <Button asChild variant="apothecary" size="lg">
            <a href={kofiUrl} target="_blank" rel="noreferrer noopener">
              <Coffee /> Offrir un café
            </a>
          </Button>
          <Button asChild variant="parchment" size="lg">
            <a href="#projets">Explorer les projets</a>
          </Button>
        </div>

        <p className="feuch-annotation mt-6 text-ink/45">
          * Les boulons refusent de rester en place depuis l'incident du Vendredi.
          <br />Le Feuch Institut décline toute responsabilité.
        </p>
      </div>

      <div
        className="rounded-sm border border-border/80 bg-parchment/80 p-5 shadow-inner"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg, transparent, transparent 27px, hsl(30 28% 65% / 0.1) 27px, hsl(30 28% 65% / 0.1) 28px)",
        }}
      >
        <div className="flex items-center justify-between">
          <h3 className="font-serif-display text-2xl text-ink">Comment aider ?</h3>
          <span className="feuch-stamp text-accent/50" style={{ transform: "rotate(3deg)", fontSize: "0.48rem" }}>
            protocole actif
          </span>
        </div>

        <ul className="mt-5 space-y-4 text-sm leading-relaxed text-muted-foreground">
          <li className="flex gap-3">
            <BookOpen className="mt-0.5 shrink-0 text-primary" size={18} />
            <span>Lire un livre, laisser une note ou partager une découverte.</span>
          </li>
          <li className="flex gap-3">
            <FlaskConical className="mt-0.5 shrink-0 text-accent" size={18} />
            <span>
              Tester{" "}
              <a href="https://benoitlub.github.io/Creature-sync/" target="_blank" rel="noreferrer noopener" className="underline decoration-dotted hover:text-accent">
                Creature-Sync
              </a>
              ,{" "}
              <a href="https://benoitlub.github.io/SpecTRL/" target="_blank" rel="noreferrer noopener" className="underline decoration-dotted hover:text-accent">
                SpecTRL
              </a>{" "}
              ou une expérience Blacklace.
            </span>
          </li>
          <li className="flex gap-3">
            <Gamepad2 className="mt-0.5 shrink-0 text-gold" size={18} />
            <span>Jouer à un prototype et signaler les bugs les plus dodus.</span>
          </li>
          <li className="flex gap-3">
            <Coffee className="mt-0.5 shrink-0 text-primary" size={18} />
            <span>Participer aux recherches via Ko-fi : café, graines et optimisme réglementaire.</span>
          </li>
        </ul>

        <div className="mt-5 border-t border-border/50 pt-3">
          <p className="feuch-annotation text-ink/40">
            Réf. FI-2023 · Observations en cours · Ne pas perdre la clé du labo
          </p>
        </div>
      </div>
    </div>
  </section>
);
