import { statusLabels, type ProjectStatus } from "@/data/projects";
import { cn } from "@/lib/utils";

const styles: Record<ProjectStatus, string> = {
  available: "bg-primary text-primary-foreground border-primary/40",
  development: "bg-accent text-accent-foreground border-accent/40",
  experimental: "bg-gold text-gold-foreground border-gold/50",
  support: "bg-ink text-parchment border-ink/40",
};

const icons: Record<ProjectStatus, string> = {
  available: "✓",
  development: "⚙",
  experimental: "⚗",
  support: "◈",
};

const titles: Record<ProjectStatus, string> = {
  available: "Archive validée",
  development: "Chantier actif",
  experimental: "Protocole en cours",
  support: "Financement ouvert",
};

export const StatusBadge = ({ status }: { status: ProjectStatus }) => (
  <span
    title={titles[status]}
    className={cn(
      "label-stamp inline-flex items-center gap-1 rounded-sm border px-2.5 py-0.5 text-[0.58rem] shadow-sm",
      styles[status],
    )}
  >
    <span aria-hidden className="font-bold leading-none">{icons[status]}</span>
    {statusLabels[status]}
  </span>
);
