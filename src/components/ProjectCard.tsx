import { Button } from "@/components/ui/button";
import type { Project } from "@/data/projects";
import { StatusBadge } from "./StatusBadge";

const actionLabel: Record<Project["status"], string> = {
  available: "Voir / demander le lien",
  development: "Suivre le chantier",
  experimental: "Tester le prototype",
  support: "Soutenir l'univers",
};

export const ProjectCard = ({ project }: { project: Project }) => {
  const isAnchor = project.url.startsWith("#");

  return (
    <article className="paper-card group flex flex-col overflow-hidden transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-[0_18px_40px_-14px_hsl(25_40%_20%_/_0.45)]">
      <div className="relative h-44 overflow-hidden border-b border-border bg-parchment-deep">
        <div
          className="absolute inset-0 opacity-70"
          style={{
            backgroundImage:
              "radial-gradient(circle at 30% 30%, hsl(var(--primary-glow) / 0.25), transparent 60%), radial-gradient(circle at 70% 70%, hsl(var(--accent) / 0.25), transparent 60%)",
          }}
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="animate-float text-6xl drop-shadow-md" aria-hidden>
            {project.emoji}
          </span>
        </div>
        <div className="absolute left-3 top-3">
          <StatusBadge status={project.status} />
        </div>
      </div>

      <div className="flex flex-1 flex-col gap-4 p-5">
        <header>
          <h3 className="font-serif-display text-2xl font-semibold leading-tight text-ink">
            {project.title}
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
            {project.description}
          </p>
        </header>

        <div className="mt-auto rounded-xl border border-border/70 bg-parchment/60 p-3 text-sm leading-relaxed text-muted-foreground">
          Pas de faux compteur, pas de thermomètre magique : chaque projet indique simplement son état réel.
        </div>

        <Button asChild variant="apothecary" className="w-full">
          <a
            href={project.url}
            target={isAnchor ? undefined : "_blank"}
            rel={isAnchor ? undefined : "noreferrer noopener"}
          >
            {actionLabel[project.status]}
          </a>
        </Button>
      </div>
    </article>
  );
};
