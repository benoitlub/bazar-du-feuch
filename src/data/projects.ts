export type ProjectStatus = "available" | "development" | "experimental" | "support";
export type ProjectCategory = "books" | "apps" | "games" | "blacklace";

export interface Project {
  id: string;
  title: string;
  category: ProjectCategory;
  status: ProjectStatus;
  description: string;
  url: string;
  emoji: string;
}

export const categoryLabels: Record<ProjectCategory, string> = {
  books: "Livres",
  apps: "Applications",
  games: "Jeux & expériences",
  blacklace: "Univers Blacklace",
};

export const statusLabels: Record<ProjectStatus, string> = {
  available: "Disponible",
  development: "En développement",
  experimental: "Expérimental",
  support: "À soutenir",
};

export const projects: Project[] = [
  // Livres
  {
    id: "neverland-ltd",
    title: "Neverland Ltd",
    category: "books",
    status: "available",
    description:
      "Une fable romanesque autour de l'enfance, du commerce des rêves et des adultes qui ont mal lu le mode d'emploi. Déjà publié en autoédition.",
    url: "#contact",
    emoji: "📕",
  },
  {
    id: "feulette-tachetee",
    title: "La Feulette Tachetée",
    category: "books",
    status: "available",
    description:
      "Fable satirique sur l'influence, les foules, les récits contaminés et les petites feuilles qui refusent de rester sages dans l'herbier.",
    url: "#contact",
    emoji: "🌿",
  },
  {
    id: "kif-et-molla",
    title: "Kif et Molla",
    category: "books",
    status: "development",
    description:
      "Série jeunesse absurde et tendre, avec planètes bizarres, grandes personnes inquiétantes et logique d'enfant qui mord gentiment les mollets.",
    url: "#contact",
    emoji: "🪐",
  },
  {
    id: "gerard-et-gerard",
    title: "Gérard et Gérard",
    category: "books",
    status: "development",
    description:
      "Une aventure loufoque avec facteur, guilde, café du Transit et tentacule de hamster à peine assumé. En préparation pour publication.",
    url: "#contact",
    emoji: "📮",
  },

  // Applications
  {
    id: "creature-sync",
    title: "Creature-Sync",
    category: "apps",
    status: "experimental",
    description:
      "Prototype de traduction humoristique du vivant : écoute, détecte les sons d'animaux et transforme les chants d'oiseaux en petites révélations sarcastiques.",
    url: "https://benoitlub.github.io/Creature-sync/",
    emoji: "🐦",
  },
  {
    id: "clochette-lite",
    title: "Clochette Lite",
    category: "apps",
    status: "development",
    description:
      "Compagnon Android miniature : bulle, voix, micro, personnages et humeur de fée pas toujours compatible avec la dignité humaine.",
    url: "#contact",
    emoji: "🧚",
  },
  {
    id: "spectrl",
    title: "SpecTRL",
    category: "apps",
    status: "experimental",
    description:
      "Expérience audio-visuelle façon radar paranormal : sons, journal d'observation, interface SLS et ambiance de labo qui grésille dans les coins.",
    url: "#contact",
    emoji: "📡",
  },

  // Jeux et expériences interactives
  {
    id: "prohibited-online",
    title: "Pro.Hibited Online",
    category: "games",
    status: "development",
    description:
      "Adaptation web du jeu de cartes Pro.Hibited : tables, pioche, adversaires IA en préparation et multijoueur prévu quand les boulons cesseront de fumer.",
    url: "#contact",
    emoji: "🃏",
  },
  {
    id: "blacklace-dice",
    title: "Blacklace Dice",
    category: "games",
    status: "experimental",
    description:
      "Dé anti-procrastination absurde : un petit outil pour trancher, relancer, hésiter avec méthode et accuser le destin quand il se trompe.",
    url: "https://benoitlub.github.io/blacklace-dice/",
    emoji: "🎲",
  },
  {
    id: "blacklace-echo",
    title: "Blacklace Echo",
    category: "games",
    status: "development",
    description:
      "Carte vivante et narrative de Blacklace Island : Rotas, personnages, lieux, effets, transitions et promenade encore en construction.",
    url: "#contact",
    emoji: "🖤",
  },

  // Univers Blacklace
  {
    id: "blacklace-universe",
    title: "Blacklace Island",
    category: "blacklace",
    status: "support",
    description:
      "Univers narratif transversal : Port Porsa Rotas, Feuch Institute, BNN24, Natasha, Fée Belette, SATOR et autres anomalies administratives.",
    url: "#contact",
    emoji: "🏝️",
  },
  {
    id: "feuch-institute",
    title: "Feuch Institute",
    category: "blacklace",
    status: "experimental",
    description:
      "Laboratoire fictif très sérieux, spécialisé dans les oiseaux, les signaux, les erreurs de protocole et les explications scientifiques qui sentent le café froid.",
    url: "#contact",
    emoji: "⚗️",
  },
];
