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
  // Livres publiés
  {
    id: "terra",
    title: "TERRA",
    category: "books",
    status: "available",
    description:
      "Dans un futur lointain, la Terre est devenue une archive. Grâce à une ancienne console transmise par sa grand-mère, Séïne explore le passé de l'humanité et découvre que certains regards traversent les siècles. Une fable cosmique sur la mémoire, la transmission et l'obstination du vivant.",
    url: "#contact",
    emoji: "🌍",
  },
  {
    id: "gerard-et-gerard",
    title: "Gérard et Gérard",
    category: "books",
    status: "available",
    description:
      "Quelques centaines de millions de cycles après avoir oublié une vieille simulation scientifique, deux vieux amis découvrent l'humanité. Entre deux verres de Frunch, ils tentent de comprendre ces créatures étranges qui continuent obstinément à espérer.",
    url: "#contact",
    emoji: "🥃",
  },
  {
    id: "crotte-man",
    title: "La crotte de nez magique",
    category: "books",
    status: "available",
    description:
      "Une aventure jeunesse absurde autour d'un pouvoir inattendu, pour les petits héros et les grandes catastrophes nasales.",
    url: "#contact",
    emoji: "🦸",
  },
  {
    id: "neverland-ltd-1",
    title: "Neverland Ltd — Volume 1",
    category: "books",
    status: "available",
    description:
      "Dans un Londres en mutation, Peter et Wendy affrontent un système qui ne se combat pas de front. Un thriller contemporain inspiré de Peter Pan, où le véritable champ de bataille est psychologique.",
    url: "#contact",
    emoji: "🏙️",
  },
  {
    id: "neverland-ltd-2",
    title: "Neverland Ltd — Volume 2",
    category: "books",
    status: "available",
    description:
      "Après l'incendie de Londres, Peter, Wendy et Darya poursuivent leur combat entre Lyon et Londres. Enquêtes, écologie, intelligence artificielle sarcastique et satire sociale plongent les enfants perdus dans des eaux plus profondes.",
    url: "#contact",
    emoji: "🌊",
  },
  {
    id: "feulette-tachetee",
    title: "La Feulette Tachetée",
    category: "books",
    status: "available",
    description:
      "Une créature magique capable d'apaiser les émotions tente de sauver une propriétaire endettée et un influenceur en quête de contenu viral. Une satire douce de l'économie de l'attention et des créatures qui en ont assez de sauver les humains d'eux-mêmes.",
    url: "#contact",
    emoji: "🍂",
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
