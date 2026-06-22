import { useMemo, useState } from "react";
import { categoryLabels, projects, type ProjectCategory } from "@/data/projects";
import { ProjectCard } from "./ProjectCard";
import { cn } from "@/lib/utils";

type Filter = "all" | ProjectCategory;

const filters: { id: Filter; label: string }[] = [
  { id: "all", label: "Tout le bazar" },
  { id: "books", label: categoryLabels.books },
  { id: "apps", label: categoryLabels.apps },
  { id: "games", label: categoryLabels.games },
  { id: "blacklace", label: categoryLabels.blacklace },
];

export const ProjectsSection = () => {
  const [filter, setFilter] = useState<Filter>("all");

  const visible = useMemo(
    () => (filter === "all" ? projects : projects.filter((p) => p.category === filter)),
    [filter],
  );

  return (
    <section id="projets" className="container mx-auto px-4 py-16 md:py-24">
      <header className="mx-auto max-w-2xl text-center">
        <span className="label-stamp text-[0.7rem] text-primary">Les créations</span>
        <h2 className="mt-2 font-serif-display text-4xl text-ink md:text-5xl">
          Étagères du laboratoire
        </h2>
        <p className="mt-4 text-muted-foreground">
          Chaque flacon contient une idée. Choisissez votre étagère préférée.
        </p>
      </header>

      <div className="mx-auto mt-8 flex flex-wrap justify-center gap-2">
        {filters.map((f) => (
          <button
            key={f.id}
            onClick={() => setFilter(f.id)}
            className={cn(
              "label-stamp rounded-full border px-4 py-2 text-[0.7rem] transition-all",
              filter === f.id
                ? "border-primary bg-primary text-primary-foreground shadow-md"
                : "border-border bg-card text-ink/70 hover:border-primary/50 hover:text-primary",
            )}
          >
            {f.label}
          </button>
        ))}
      </div>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {visible.map((p) => (
          <ProjectCard key={p.id} project={p} />
        ))}
      </div>
    </section>
  );
};