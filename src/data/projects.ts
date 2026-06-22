export type ProjectStatus = "crowdfunding" | "wishlist" | "tipjar";
export type ProjectCategory = "books" | "apps" | "games" | "blacklace";

export interface Project {
  id: string;
  title: string;
  category: ProjectCategory;
  status: ProjectStatus;
  description: string;
  target: number;
  collected: number;
  url: string;
  emoji: string;
}

export const categoryLabels: Record<ProjectCategory, string> = {
  books: "Livres",
  apps: "Applications",
  games: "Jeux",
  blacklace: "Univers Blacklace",
};

export const statusLabels: Record<ProjectStatus, string> = {
  crowdfunding: "Financement",
  wishlist: "Liste de souhaits",
  tipjar: "Pot à pourboire",
};

export const projects: Project[] = [
  // Livres
  {
    id: "neverland-ltd",
    title: "Neverland Ltd",
    category: "books",
    status: "crowdfunding",
    description:
      "Roman fantastique où Peter Pan dirige une multinationale de l'enfance perdue. Conte cynique et tendre.",
    target: 4500,
    collected: 2870,
    url: "https://example.com/neverland",
    emoji: "📕",
  },
  {
    id: "feulette-tachetee",
    title: "La Feulette Tachetée",
    category: "books",
    status: "wishlist",
    description:
      "Recueil de nouvelles botaniques et inquiétantes, illustré à la plume. Pour les amateurs d'herbiers étranges.",
    target: 3200,
    collected: 410,
    url: "https://example.com/feulette",
    emoji: "🌿",
  },
  {
    id: "kif-et-molla",
    title: "Kif et Molla",
    category: "books",
    status: "tipjar",
    description:
      "Carnet de voyage imaginaire de deux explorateurs maladroits. Auto-édité, en vente libre, soutien bienvenu.",
    target: 800,
    collected: 530,
    url: "https://example.com/kif",
    emoji: "🗺️",
  },
  // Applications
  {
    id: "creature-sync",
    title: "Creature-Sync",
    category: "apps",
    status: "crowdfunding",
    description:
      "Application de synchronisation pour maîtres du jeu : gérez vos bestiaires entre tablette, papier et grimoire.",
    target: 6000,
    collected: 4150,
    url: "https://example.com/creature-sync",
    emoji: "🦎",
  },
  {
    id: "clochette-lite",
    title: "Clochette Lite",
    category: "apps",
    status: "tipjar",
    description:
      "Minuteur poétique aux sonneries de carillons. Gratuit, sans publicité. Glissez une pièce dans le pot.",
    target: 500,
    collected: 312,
    url: "https://example.com/clochette",
    emoji: "🔔",
  },
  {
    id: "spectrl",
    title: "SpecTRL",
    category: "apps",
    status: "wishlist",
    description:
      "Spectromètre ludique pour identifier les couleurs et matières. En cours de prototypage.",
    target: 7800,
    collected: 1240,
    url: "https://example.com/spectrl",
    emoji: "🔬",
  },
  // Jeux
  {
    id: "prohibited-online",
    title: "Pro.Hibited Online",
    category: "games",
    status: "crowdfunding",
    description:
      "Jeu multijoueur d'enquête dans une Amérique alternative des années 1920. Contrebandiers, journalistes, juges corrompus.",
    target: 12000,
    collected: 7830,
    url: "https://example.com/prohibited",
    emoji: "🥃",
  },
  {
    id: "blacklace-dice",
    title: "Blacklace Dice",
    category: "games",
    status: "wishlist",
    description:
      "Jeu de dés narratif dans l'univers Blacklace. Rituels, dentelles et secrets de famille.",
    target: 3500,
    collected: 980,
    url: "https://example.com/blacklace-dice",
    emoji: "🎲",
  },
  {
    id: "blacklace-echo",
    title: "Blacklace Echo",
    category: "games",
    status: "crowdfunding",
    description:
      "Aventure textuelle immersive. Explorez le manoir Blacklace, ses échos et ses fantômes obstinés.",
    target: 5400,
    collected: 3120,
    url: "https://example.com/blacklace-echo",
    emoji: "🕯️",
  },
  // Univers Blacklace
  {
    id: "blacklace-universe",
    title: "L'Univers Blacklace",
    category: "blacklace",
    status: "tipjar",
    description:
      "Le worldbuilding, la bible, les cartes et les fragments d'histoire. Un projet vivant à soutenir librement.",
    target: 2000,
    collected: 1280,
    url: "https://example.com/blacklace",
    emoji: "🖤",
  },
];