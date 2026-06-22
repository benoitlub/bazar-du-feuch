import { statusLabels, type ProjectStatus } from "@/data/projects";
import { cn } from "@/lib/utils";

const styles: Record<ProjectStatus, string> = {
  crowdfunding: "bg-primary text-primary-foreground",
  wishlist: "bg-accent text-accent-foreground",
  tipjar: "bg-gold text-gold-foreground",
};

const icons: Record<ProjectStatus, string> = {
  crowdfunding: "⚗️",
  wishlist: "✨",
  tipjar: "🫙",
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