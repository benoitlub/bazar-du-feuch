import type { ReactNode } from "react";
import { Button } from "@/components/ui/button";
import type { Project, ProjectCategory } from "@/data/projects";
import { StatusBadge } from "./StatusBadge";
import { cn } from "@/lib/utils";

const fallbackActionLabel: Record<Project["status"], string> = {
  available: "Ouvrir le lien",
  development: "Suivre le chantier",
  experimental: "Tester le prototype",
  support: "Soutenir l'univers",
};

const categoryClass: Record<ProjectCategory, string> = {
  books: "card-books",
  apps: "card-apps",
  games: "card-games",
  blacklace: "card-blacklace",
};

const categoryHeaderGradient: Record<ProjectCategory, string> = {
  books:
    "radial-gradient(circle at 30% 30%, hsl(350 55% 45% / 0.18), transparent 55%), radial-gradient(circle at 70% 70%, hsl(25 60% 55% / 0.15), transparent 55%)",
  apps:
    "radial-gradient(circle at 25% 30%, hsl(178 42% 36% / 0.22), transparent 55%), radial-gradient(circle at 75% 70%, hsl(178 60% 55% / 0.12), transparent 50%)",
  games:
    "radial-gradient(circle at 35% 35%, hsl(38 78% 50% / 0.22), transparent 55%), radial-gradient(circle at 65% 65%, hsl(350 55% 40% / 0.12), transparent 50%)",
  blacklace:
    "radial-gradient(circle at 30% 30%, hsl(25 35% 20% / 0.18), transparent 55%), radial-gradient(circle at 70% 70%, hsl(178 42% 36% / 0.18), transparent 55%)",
};

const categoryDecor: Record<ProjectCategory, ReactNode> = {
  books: (
    <span aria-hidden className="feuch-annotation absolute bottom-2 right-2 text-[0.55rem] text-primary/50">
      fiche archive
    </span>
  ),
  apps: (
    <span aria-hidden className="feuch-annotation absolute bottom-2 right-2 text-[0.55rem] text-accent/60">
      terminal ·&nbsp;
      <span className="font-mono">sig_ok</span>
    </span>
  ),
  games: (
    <span aria-hidden className="absolute bottom-2 right-2 text-[0.6rem] text-gold/60">
      🎲
    </span>
  ),
  blacklace: (
    <span aria-hidden className="feuch-annotation absolute bottom-2 right-2 text-[0.55rem] text-ink/40">
      anomalie·BL
    </span>
  ),
};

export const ProjectCard = ({ project }: { project: Project }) => {
  const isAnchor = project.url.startsWith("#");

  return (
    <article
      className={cn(
        "paper-card group flex flex-col overflow-hidden transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-[0_18px_40px_-14px_hsl(25_40%_20%_/_0.45)]",
        categoryClass[project.category],
      )}
    >
      <div className="relative min-h-36 overflow-hidden border-b border-border bg-parchment-deep">
        <div className="absolute inset-0" style={{ backgroundImage: categoryHeaderGradient[project.category] }} />

        <div className="absolute inset-0 flex items-center justify-center p-3">
          {project.image ? (
            <img
              src={project.image}
              alt={`Couverture ou capture de ${project.title}`}
              className="h-full max-h-36 w-auto rounded object-contain shadow-lg sm:max-h-40"
              loading="lazy"
            />
          ) : (
            <span className="animate-float text-5xl drop-shadow-md" aria-hidden>
              {project.emoji}
            </span>
          )}
        </div>

        {project.category === "apps" && (
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 opacity-[0.05]"
            style={{
              backgroundImage:
                "repeating-linear-gradient(0deg, transparent, transparent 5px, hsl(178 42% 36%) 5px, hsl(178 42% 36%) 6px)",
            }}
          />
        )}

        <div className="absolute left-2.5 top-2.5">
          <StatusBadge status={project.status} />
        </div>

        {categoryDecor[project.category]}
      </div>

      <div className="flex flex-1 flex-col gap-3 p-4 sm:p-5">
        <header>
          <h3 className="font-serif-display text-xl font-semibold leading-tight text-ink sm:text-2xl">
            {project.title}
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
            {project.description}
          </p>
        </header>

        <Button asChild variant="apothecary" className="mt-auto w-full">
          <a
            href={project.url}
            target={isAnchor ? undefined : "_blank"}
            rel={isAnchor ? undefined : "noreferrer noopener"}
          >
            {project.actionLabel ?? fallbackActionLabel[project.status]}
          </a>
        </Button>
      </div>
    </article>
  );
};
