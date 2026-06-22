import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import portrait from "@/assets/professor.jpg";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const About = () => (
  <div className="min-h-screen">
    <Header />
    <main className="container mx-auto px-4 py-16 md:py-24">
      <div className="grid items-start gap-12 md:grid-cols-[1fr_1.4fr]">
        <div className="paper-card overflow-hidden">
          <img
            src={portrait}
            alt="Portrait illustré du Professeur Feuch"
            width={800}
            height={800}
            loading="lazy"
            className="aspect-square w-full object-cover"
          />
        </div>

        <div>
          <span className="label-stamp text-[0.7rem] text-primary">À propos</span>
          <h1 className="mt-2 font-serif-display text-5xl text-ink md:text-6xl">
            Qui est le Professeur Feuch&nbsp;?
          </h1>
          <div className="ink-divider my-6" />

          <div className="space-y-5 text-lg leading-relaxed text-ink/85">
            <p>
              Derrière le pseudonyme se cache{" "}
              <strong className="text-primary">Benoît Lubert</strong>,
              bricoleur d'histoires, d'applications et de jeux. Depuis son
              petit cabinet, il assemble des objets curieux qui tiennent
              parfois du livre, parfois du logiciel, parfois des deux.
            </p>
            <p>
              Le <em>Bazar du Professeur Feuch</em> rassemble ces créations en
              un seul endroit. Certaines cherchent un financement participatif,
              d'autres restent en liste de souhaits, et d'autres encore vivent
              déjà très bien — un pourboire suffit à les remercier.
            </p>
            <p>
              Au cœur du laboratoire, l'univers{" "}
              <strong>Blacklace</strong> grandit : un monde de dentelles
              sombres, de rituels familiaux et de manoirs qui se souviennent.
            </p>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {[
              { n: "10+", l: "Projets en cours" },
              { n: "3", l: "Étagères" },
              { n: "1", l: "Univers Blacklace" },
            ].map((s) => (
              <div key={s.l} className="paper-card p-4 text-center">
                <div className="font-display text-3xl text-primary">{s.n}</div>
                <div className="label-stamp mt-1 text-[0.6rem] text-muted-foreground">
                  {s.l}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap gap-3">
            <Button asChild variant="apothecary" size="lg">
              <Link to="/#projets">Voir les créations</Link>
            </Button>
            <Button asChild variant="parchment" size="lg">
              <Link to="/#contact">Me contacter</Link>
            </Button>
          </div>
        </div>
      </div>
    </main>
    <Footer />
  </div>
);

export default About;