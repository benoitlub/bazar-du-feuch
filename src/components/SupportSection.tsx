import { Button } from "@/components/ui/button";
import { Coffee, BookOpen, FlaskConical, Gamepad2, Heart } from "lucide-react";

const kofiUrl = "https://ko-fi.com/feuchinstitut";

export const SupportSection = () => (
  <section id="soutenir" className="container mx-auto px-4 py-12 md:py-16">
    <div className="paper-card mx-auto grid max-w-5xl gap-8 overflow-hidden p-8 md:grid-cols-[1.15fr_0.85fr] md:p-12">
      <div>
        <span className="label-stamp text-[0.7rem] text-primary">Soutenir les expériences</span>
        <h2 className="mt-2 font-serif-display text-4xl text-ink md:text-5xl">
          Nourrir le Feuch Institute
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
            <a href="#projets">
              <Heart /> Voir les projets
            </a>
          </Button>
        </div>
      </div>

      <div className="rounded-2xl border border-border/70 bg-parchment/70 p-5 shadow-inner">
        <h3 className="font-serif-display text-2xl text-ink">Comment aider ?</h3>
        <ul className="mt-5 space-y-4 text-sm leading-relaxed text-muted-foreground">
          <li className="flex gap-3">
            <BookOpen className="mt-0.5 shrink-0 text-primary" size={20} />
            <span>Lire un livre, laisser une note ou partager une découverte.</span>
          </li>
          <li className="flex gap-3">
            <FlaskConical className="mt-0.5 shrink-0 text-primary" size={20} />
            <span>Tester Creature-Sync, SpecTRL, Clochette Lite ou une expérience Blacklace.</span>
          </li>
          <li className="flex gap-3">
            <Gamepad2 className="mt-0.5 shrink-0 text-primary" size={20} />
            <span>Jouer à un prototype et signaler les bugs les plus dodus.</span>
          </li>
          <li className="flex gap-3">
            <Coffee className="mt-0.5 shrink-0 text-primary" size={20} />
            <span>Participer aux recherches via Ko-fi : café, graines et optimisme réglementaire.</span>
          </li>
        </ul>
      </div>
    </div>
  </section>
);
