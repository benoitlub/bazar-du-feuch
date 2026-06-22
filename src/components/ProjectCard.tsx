import { Button } from "@/components/ui/button";
import type { Project } from "@/data/projects";
import { StatusBadge } from "./StatusBadge";

const supportLabel: Record<Project["status"], string> = {
  crowdfunding: "Soutenir le projet",
  wishlist: "Ajouter à mes souhaits",
  tipjar: "Laisser une pièce",
};

const formatEuro = (n: number) =>
  new Intl.NumberFormat("fr-FR", { style: "currency", currency: "EUR", maximumFractionDigits: 0 }).format(n);

export const ProjectCard = ({ project }: { project: Project }) => {
  const pct = Math.min(100, Math.round((project.collected / project.target) * 100));

  return (
    <article className="paper-card group flex flex-col overflow-hidden transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-[0_18px_40px_-14px_hsl(25_40%_20%_/_0.45)]">
      {/* Image placeholder — vintage label */}
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

        <div className="mt-auto space-y-3">
          {/* Progress flask */}
          <div className="relative h-3 overflow-hidden rounded-full border border-border bg-parchment-deep">
            <div
              className="h-full rounded-full transition-all"
              style={{
                width: `${pct}%`,
                backgroundImage: "var(--gradient-flask)",
              }}
            />
          </div>
          <div className="flex items-baseline justify-between text-sm">
            <span className="font-semibold text-primary">{formatEuro(project.collected)}</span>
            <span className="text-muted-foreground">
              sur {formatEuro(project.target)} · {pct}%
            </span>
          </div>

          <Button asChild variant="apothecary" className="w-full">
            <a href={project.url} target="_blank" rel="noreferrer noopener">
              {supportLabel[project.status]}
            </a>
          </Button>
        </div>
      </div>
    </article>
  );
};