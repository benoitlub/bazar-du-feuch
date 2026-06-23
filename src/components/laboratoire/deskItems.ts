import { projects } from "@/data/projects";

export type ItemKind = "book" | "app" | "game" | "note" | "badge" | "card" | "decor" | "support" | "polaroid";

export type DeskItem = {
  id: string;
  kind: ItemKind;
  label: string;
  description: string;
  x: number;
  y: number;
  width: number;
  rotation: number;
  emoji?: string;
  image?: string;
  body?: string;
  url?: string;
  actionLabel?: string;
};

const byId = Object.fromEntries(projects.map((project) => [project.id, project]));

const projectItem = (
  id: string,
  kind: ItemKind,
  x: number,
  y: number,
  width: number,
  rotation: number,
): DeskItem => {
  const project = byId[id];

  if (!project) {
    return {
      id,
      kind,
      label: id,
      description: "Prototype introuvable dans les archives du Feuch Institute. Le stagiaire spectral est suspect.",
      x,
      y,
      width,
      rotation,
      emoji: "❓",
    };
  }

  return {
    id: project.id,
    kind,
    label: project.title,
    description: project.description,
    x,
    y,
    width,
    rotation,
    emoji: project.emoji,
    image: project.image,
    url: project.url,
    actionLabel: project.actionLabel,
  };
};

export const deskItems: DeskItem[] = [
  {
    id: "note-intro",
    kind: "note",
    label: "Bienvenue au Feuch Institute",
    description: "Ici, on observe, on code, on imprime des grimoires et on accuse les oiseaux quand le build fume.",
    body: "FEUCH INSTITUTE\n\nBureau non homologué.\nDéplacer les objets, ouvrir les dossiers, surveiller les taches de café.\n\nSi ça grésille : c'est que le bazar vit encore.",
    x: 62,
    y: 58,
    width: 245,
    rotation: -2,
    emoji: "⚗️",
  },
  {
    id: "sator-card",
    kind: "card",
    label: "SATOR\nAREPO\nTENET\nOPERA\nROTAS",
    description: "Carré SATOR retrouvé sous une pile de tickets BNN24. À manier avec des gants narratifs.",
    body: "SATOR\nAREPO\nTENET\nOPERA\nROTAS",
    x: 1154,
    y: 74,
    width: 205,
    rotation: 3,
    emoji: "◈",
  },
  {
    id: "rotas-polaroid",
    kind: "polaroid",
    label: "Port Porsa Rotas",
    description: "Photo de terrain. On devine les rues, les échoppes et deux témoins qui refusent d'être vectorisés.",
    x: 1366,
    y: 94,
    width: 136,
    rotation: -5,
    emoji: "🏝️",
  },

  projectItem("terra", "book", 62, 142, 110, -4),
  projectItem("gerard-et-gerard", "book", 188, 120, 112, 2),
  projectItem("neverland-ltd-1", "book", 318, 145, 104, -2),
  projectItem("neverland-ltd-2", "book", 438, 116, 112, 3),
  projectItem("feulette-tachetee", "book", 568, 140, 104, -3),
  projectItem("kif-et-molla", "book", 690, 118, 112, 2),
  projectItem("crotte-man", "book", 812, 150, 104, -5),

  projectItem("spectrl", "app", 78, 310, 178, -2),
  projectItem("creature-sync", "app", 280, 295, 186, 2),
  projectItem("clochette-lite", "app", 492, 316, 176, -3),
  projectItem("blacklace-universe", "app", 698, 302, 190, 1),

  projectItem("prohibited-online", "game", 72, 526, 184, 2),
  projectItem("blacklace-dice", "game", 282, 510, 182, -2),
  projectItem("blacklace-echo", "game", 490, 528, 186, 2),

  projectItem("support-feuch-institute", "support", 72, 742, 214, -2),
  projectItem("feuch-institute", "support", 318, 734, 214, 2),

  {
    id: "bnn24-ticket",
    kind: "badge",
    label: "BNN24",
    description: "Badge presse. Donne accès à des révélations qui sentent le café, le carton mouillé et la vérité avec trois filtres VHS.",
    x: 950,
    y: 246,
    width: 112,
    rotation: -8,
    emoji: "📡",
  },
  {
    id: "marty-bon",
    kind: "note",
    label: "Bon de livraison Marty",
    description: "Marty a livré trois câbles, deux bugs et une excuse parfaitement plausible.",
    body: "LIVRAISON MARTY\n\n- 3 câbles suspects\n- 1 fiole non identifiée\n- 7 idées impossibles\n\nSignature : personne, donc c'est validé.",
    x: 948,
    y: 390,
    width: 210,
    rotation: 4,
    emoji: "📦",
  },
  {
    id: "natasha-archive",
    kind: "polaroid",
    label: "Natasha / plateau BNN",
    description: "Polaroid de Natasha en pleine annonce officielle. L'équipe jure que rien n'a explosé hors champ.",
    x: 1238,
    y: 318,
    width: 142,
    rotation: 5,
    emoji: "🎙️",
  },
  {
    id: "feuch-fiole",
    kind: "decor",
    label: "Fiole de Feuch",
    description: "Objet décoratif instable. Les fiches techniques recommandent de ne pas le nourrir après minuit.",
    x: 1408,
    y: 430,
    width: 96,
    rotation: -8,
    emoji: "🧪",
  },
  {
    id: "blacklace-dossier",
    kind: "card",
    label: "DOSSIER BLACKLACE",
    description: "Rotas, Club Ludmila, Feuch Institute, Studio Moscomiul Break. Tout est relié, même les miettes.",
    body: "DOSSIER BLACKLACE\n\nROTAS → Ludmila\nBNN24 → Natasha\nSATOR → reboot\nFEUCH → ne pas éternuer\n\nStatut : ouvert.",
    x: 1004,
    y: 650,
    width: 250,
    rotation: -2,
    emoji: "🖤",
  },
  {
    id: "contact-labo",
    kind: "note",
    label: "Contact",
    description: "Adresse officielle du laboratoire, rangée sous la tasse mais avant les anomalies dimensionnelles.",
    body: "CONTACT LABO\n\nlubertvlc@gmail.com\n\nRéponse possible entre deux builds, trois manuscrits et un pigeon sarcastique.",
    x: 1308,
    y: 672,
    width: 220,
    rotation: 3,
    emoji: "✉️",
  },
];
