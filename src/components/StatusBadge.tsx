import { statusLabels, type ProjectStatus } from "@/data/projects";
import { cn } from "@/lib/utils";

const styles: Record<ProjectStatus, string> = {
  available: "bg-primary text-primary-foreground",
  development: "bg-accent text-accent-foreground",
  experimental: "bg-gold text-gold-foreground",
  support: "bg-ink text-parchment",
};

const icons: Record<ProjectStatus, string> = {
  available: "📚",
  development: "🔧",
  experimental: "🧪",
  support: "🌱",
};

export const StatusBadge = ({ status }: { status: ProjectStatus }) => (
  <span
    className={cn(
      "label-stamp inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[0.65rem] shadow-sm",
      styles[status],
    )}
  >
    <span aria-hidden>{icons[status]}</span>
    {statusLabels[status]}
  </span>
);
