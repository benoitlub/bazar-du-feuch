import { projectImages } from "./projectImages";

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
  image?: string;
  actionLabel?: string;
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

const kofiUrl = "https://ko-fi.com/feuchinstitut";

export const projects: Project[] = [
  {
    id: "terra",
    title: "TERRA",
    category: "books",
    status: "available",
    description:
      "Dans un futur lointain, la Terre est devenue une archive. Grâce à une ancienne console transmise par sa grand-mère, Séïne explore le passé de l'humanité et découvre que certains regards traversent les siècles. Une fable cosmique sur la mémoire, la transmission et l'obstination du vivant.",
    url: "https://www.amazon.fr/dp/B0H49Z1K3H/",
    emoji: "🌍",
    image: projectImages.clochette,
    actionLabel: "Lire sur Amazon",
  },
  {
    id: "gerard-et-gerard",
    title: "Gérard et Gérard",
    category: "books",
    status: "available",
    description:
      "Quelques centaines de millions de cycles après avoir oublié une vieille simulation scientifique, deux vieux amis découvrent l'humanité. Entre deux verres de Frunch, ils tentent de comprendre ces créatures étranges qui continuent obstinément à espérer.",
    url: "https://www.amazon.fr/dp/B0H68811RL/",
    emoji: "🥃",
    image: projectImages.gerard,
    actionLabel: "Lire sur Amazon",
  },
  {
    id: "neverland-ltd-1",
    title: "Neverland Ltd — Volume 1",
    category: "books",
    status: "available",
    description:
      "Dans un Londres en mutation, Peter et Wendy affrontent un système qui ne se combat pas de front. Un thriller contemporain inspiré de Peter Pan, où le véritable champ de bataille est psychologique.",
    url: "https://www.amazon.fr/dp/B0GWHDTG6N/",
    emoji: "🏙️",
    actionLabel: "Lire sur Amazon",
  },
  {
    id: "neverland-ltd-2",
    title: "Neverland Ltd — Volume 2",
    category: "books",
    status: "available",
    description:
      "Après l'incendie de Londres, Peter, Wendy et Darya poursuivent leur combat entre Lyon et Londres. Enquêtes, écologie, intelligence artificielle sarcastique et satire sociale plongent les enfants perdus dans des eaux plus profondes.",
    url: "https://www.amazon.fr/dp/B0H4RP6T4V/",
    emoji: "🌊",
    image: projectImages.neverland2,
    actionLabel: "Lire sur Amazon",
  },
  {
    id: "feulette-tachetee",
    title: "La Feulette tachetée",
    category: "books",
    status: "available",
    description:
      "Une créature magique capable d'apaiser les émotions tente de sauver une propriétaire endettée et un influenceur en quête de contenu viral. Une satire douce de l'économie de l'attention et des créatures qui en ont assez de sauver les humains d'eux-mêmes.",
    url: "https://www.amazon.fr/dp/B0GYSSLZX4/",
    emoji: "🍂",
    image: projectImages.feulette,
    actionLabel: "Lire sur Amazon",
  },
  {
    id: "kif-et-molla",
    title: "Les enquêtes approximatives de Kif & Molla",
    category: "books",
    status: "available",
    description:
      "Deux détectives interdimensionnels aussi sincères qu'incompétents débarquent sur Terre et transforment les petits tracas du quotidien en affaires d'État. Heureusement pour nous, leurs catastrophes finissent souvent par devenir des miracles.",
    url: "https://www.amazon.fr/dp/B0H69ZMTK9/",
    emoji: "🕵️",
    image: projectImages.kifMolla,
    actionLabel: "Lire sur Amazon",
  },
  {
    id: "crotte-man",
    title: "La crotte de nez magique",
    category: "books",
    status: "available",
    description:
      "Une aventure jeunesse absurde autour d'un pouvoir inattendu, pour les petits héros et les grandes catastrophes nasales.",
    url: "https://www.amazon.fr/dp/B0G4F4639R/",
    emoji: "🦸",
    actionLabel: "Lire sur Amazon",
  },

  {
    id: "creature-sync",
    title: "Creature-Sync",
    category: "apps",
    status: "experimental",
    description:
      "Prototype de traduction humoristique du vivant : écoute, détecte les sons d'animaux et transforme les chants d'oiseaux en petites révélations sarcastiques.",
    url: "https://benoitlub.github.io/Creature-sync/",
    emoji: "🐦",
    actionLabel: "Tester l'application",
  },
  {
    id: "clochette-lite",
    title: "Clochette Lite",
    category: "apps",
    status: "development",
    description:
      "Compagnon Android miniature en préparation : bulle, voix, micro, personnages et humeur de fée pas toujours compatible avec la dignité humaine.",
    url: "#soutenir",
    emoji: "🧚",
    image: projectImages.terra,
    actionLabel: "Version Android en préparation",
  },
  {
    id: "spectrl",
    title: "SpecTRL",
    category: "apps",
    status: "experimental",
    description:
      "Expérience audio-visuelle façon radar paranormal : sons, journal d'observation, interface SLS et ambiance de labo qui grésille dans les coins.",
    url: "https://benoitlub.github.io/SpecTRL/",
    emoji: "👁️",
    actionLabel: "Tester l'application",
  },

  {
    id: "prohibited-online",
    title: "Pro.Hibited Online",
    category: "games",
    status: "development",
    description:
      "Adaptation web du jeu de cartes Pro.Hibited : tables, pioche, adversaires IA en préparation et multijoueur prévu quand les boulons cesseront de fumer.",
    url: "https://benoitlub.github.io/prohibited-online/",
    emoji: "🃏",
    actionLabel: "Tester le prototype",
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
    actionLabel: "Lancer le dé",
  },
  {
    id: "blacklace-echo",
    title: "Blacklace Echo",
    category: "games",
    status: "development",
    description:
      "Carte vivante et narrative de Blacklace Island : Rotas, personnages, lieux, effets, transitions et promenade encore en construction.",
    url: "https://benoitlub.github.io/blacklace-echo/",
    emoji: "🖤",
    actionLabel: "Explorer",
  },

  {
    id: "support-feuch-institute",
    title: "Soutenir le Feuch Institut",
    category: "blacklace",
    status: "support",
    description:
      "Les contributions aident à financer les hébergements, les outils d'IA, les prototypes, les prochaines publications et les graines de survie du laboratoire.",
    url: kofiUrl,
    emoji: "☕",
    actionLabel: "Offrir un café",
  },
  {
    id: "blacklace-universe",
    title: "Blacklace Island",
    category: "blacklace",
    status: "support",
    description:
      "Univers narratif transversal : Port Porsa Rotas, Feuch Institut, BNN24, Natasha, Fée Belette, SATOR et autres anomalies administratives.",
    url: "https://benoitlub.github.io/blacklace-echo/",
    emoji: "🏝️",
    actionLabel: "Explorer l'univers",
  },
  {
    id: "feuch-institute",
    title: "Feuch Institut",
    category: "blacklace",
    status: "experimental",
    description:
      "Laboratoire fictif très sérieux, spécialisé dans les oiseaux, les signaux, les erreurs de protocole et les explications scientifiques qui sentent le café froid.",
    url: "#contact",
    emoji: "⚗️",
    actionLabel: "Écrire au laboratoire",
  },
];
