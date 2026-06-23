import { projects } from "@/data/projects";
import feuchArchiveFolder from "@/assets/laboratoire/archives/dossier-feuch-institute-02.png";
import badgeFeuchInstitute from "@/assets/laboratoire/badges/badge-feuch-institute-01.png";
import blacklacePostcard from "@/assets/laboratoire/blacklace/carte-postale-blacklace-01.png";
import feeBeletteClassified from "@/assets/laboratoire/blacklace/fee-belette-classee-01.png";
import fournaisePlan from "@/assets/laboratoire/blacklace/plan-fournase-feuch-01.png";
import bnn24Poster from "@/assets/laboratoire/bnn24/affiche-bnn24-pliee-01.png";
import coffeeTrace from "@/assets/laboratoire/coffee/tache-cafe-07.png";
import frunchCoaster from "@/assets/laboratoire/frunch/dessous-verre-frunch-01.png";
import introNote from "@/assets/laboratoire/notes/note-manuscrite-04.png";
import personalNote from "@/assets/laboratoire/notes/note-personnelle-01.png";
import contactNote from "@/assets/laboratoire/notes/note-manuscrite-05.png";
import slobodaneNotebook from "@/assets/laboratoire/notes/carnet-slobodane-01.png";
import appArchive from "@/assets/laboratoire/papers/carnet-quadrille-plume-01.png";
import bookArchive from "@/assets/laboratoire/papers/feuille-vieillie-01.png";
import gameArchive from "@/assets/laboratoire/papers/mini-carte-usee-01.png";
import prohibitedCardOne from "@/assets/laboratoire/papers/etiquette-vieillie-01.png";
import prohibitedCardTwo from "@/assets/laboratoire/papers/etiquette-vieillie-03.png";
import prohibitedCardThree from "@/assets/laboratoire/papers/etiquette-vieillie-05.png";
import natashaPolaroid from "@/assets/laboratoire/polaroids/polaroid-natasha-01.png";
import rotasMap from "@/assets/laboratoire/rotas/carte-port-porsa-rotas-01.png";
import satorCard from "@/assets/laboratoire/sator/carre-sator-01.png";
import bnn24Ticket from "@/assets/laboratoire/tickets/ticket-bnn24-01.png";

export type ItemKind = "book" | "app" | "game" | "note" | "badge" | "card" | "decor" | "support" | "polaroid" | "map" | "ticket" | "poster" | "folder" | "coaster" | "playingCard";

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
  image: string;
  body?: string;
  url?: string;
  actionLabel?: string;
  eyebrow?: string;
  caption?: string;
};

const byId = Object.fromEntries(projects.map((project) => [project.id, project]));
const projectFallbacks: Partial<Record<ItemKind, string>> = {
  book: bookArchive,
  app: appArchive,
  game: gameArchive,
  support: badgeFeuchInstitute,
};

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
      image: projectFallbacks[kind] ?? bookArchive,
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
    image: project.image ?? projectFallbacks[kind] ?? bookArchive,
    url: project.url,
    actionLabel: project.actionLabel,
    eyebrow: project.category,
    caption: project.status,
  };
};

export const deskItems: DeskItem[] = [
  {
    id: "note-intro",
    kind: "note",
    label: "Bienvenue au Feuch Institute",
    description: "Carton d'accueil du laboratoire : on observe, on fabrique, on code, on écrit et parfois ça fonctionne.",
    body: "BIENVENUE AU FEUCH INSTITUTE\n\nIci, on observe, on note, on fabrique, on code, on écrit et parfois ça fonctionne.\n\nRègle n°1 : si le bureau bouge, ce n'est pas un bug, c'est une humeur.",
    x: 382,
    y: 42,
    width: 330,
    rotation: -2,
    image: introNote,
    emoji: "🐦",
    caption: "note d'accueil",
  },
  {
    id: "coffee-mug",
    kind: "coaster",
    label: "Trace de café du Feuch Institute",
    description: "Le laboratoire manque régulièrement de café. Cette trace persistante en constitue la preuve scientifiquement recevable.",
    body: "FEUCH INSTITUTE\n\nTaux de café : critique.\nDernière recharge : inconnue.\nEffet secondaire : prototypes plus bavards.",
    x: 1248,
    y: 34,
    width: 138,
    rotation: 4,
    image: coffeeTrace,
    emoji: "☕",
    caption: "café officiel",
  },
  {
    id: "sator-card",
    kind: "card",
    label: "Carré SATOR",
    description: "Plaque gravée retrouvée dans un tiroir. Rotas, Opera, Tenet, Arepo, Sator : le genre de pense-bête qui ouvre une porte sans prévenir.",
    body: "SATOR\nAREPO\nTENET\nOPERA\nROTAS\n\nAnnotation : à ne pas poser près d'une interface en production.",
    x: 42,
    y: 840,
    width: 210,
    rotation: -2,
    image: satorCard,
    emoji: "◈",
    caption: "artefact",
  },
  {
    id: "rotas-map",
    kind: "map",
    label: "Carte de Port Porsa Rotas",
    description: "Carte de terrain de Blacklace Island. Pins rouges, marées suspectes et créatures qui refusent encore les conditions générales.",
    body: "PORTE PORSA ROTAS\nBLACKLACE ISLAND\n\n• Rotas Sound\n• Port Porsa\n• Fournaise de Feuch\n• Récifs du Silence\n\nNote : attention marées + créatures.",
    x: 302,
    y: 828,
    width: 310,
    rotation: -1,
    image: rotasMap,
    emoji: "🗺️",
    caption: "carte de terrain",
  },
  {
    id: "feuch-folder",
    kind: "folder",
    label: "Dossier Feuch Institute",
    description: "Dossier n°17-42-BL : recherches, observations, onglets cornés et tampons administratifs qui donnent l'air sérieux au bazar.",
    body: "FEUCH INSTITUTE\nDOSSIER N°17-42-BL\n\nRECHERCHES & OBSERVATIONS\nBLACKLACE ISLAND\n\nOnglets : carnets, phénomènes, protocoles, bêtises.",
    x: 1030,
    y: 612,
    width: 260,
    rotation: 2,
    image: feuchArchiveFolder,
    emoji: "📁",
    caption: "dossier classé",
  },
  {
    id: "bnn24-ticket",
    kind: "ticket",
    label: "Ticket BNN24",
    description: "Accès salle de presse. Conférence S. Lubert, 14h00. La vérité n'a pas peur de la nuit, mais elle préfère être tamponnée.",
    body: "BNN24 PRESS\nACCÈS SALLE DE PRESSE\nN° 002451\n\nConférence S. Lubert — 14h00\nCode presse : ROTAS-24-FEUCH",
    x: 1282,
    y: 790,
    width: 210,
    rotation: 7,
    image: bnn24Ticket,
    emoji: "🎟️",
    caption: "badge presse",
  },
  {
    id: "natasha-archive",
    kind: "polaroid",
    label: "Natasha — BNN24",
    description: "Polaroid de Natasha à Port Porsa. Elle sait quelque chose. Ou elle lit juste le prompteur avec beaucoup trop de calme.",
    body: "NATASHA — PORT PORSA\n12/06\n\nObservation : calme suspect.\nMicro : BNN24.\nArrière-plan : probablement instable.",
    x: 950,
    y: 820,
    width: 150,
    rotation: 3,
    image: natashaPolaroid,
    emoji: "🎙️",
    caption: "photo presse",
  },
  {
    id: "bnn-poster",
    kind: "poster",
    label: "Affiche BNN24 pliée",
    description: "Affiche violette retrouvée derrière une étagère. Slogan officiel : la vérité n'a pas peur de la nuit.",
    body: "BNN24\nLA VÉRITÉ N'A PAS PEUR DE LA NUIT\n\nSignal : variable.\nAntenne : capricieuse.\nPrésentatrice : imperturbable.",
    x: 1124,
    y: 824,
    width: 150,
    rotation: -5,
    image: bnn24Poster,
    emoji: "📡",
    caption: "affiche pliée",
  },
  {
    id: "blacklace-postcard",
    kind: "card",
    label: "Carte postale Blacklace Island",
    description: "À ceux du labo : le temps est instable, mais les oiseaux chantent toujours. Signé S.",
    body: "BLACKLACE ISLAND\nPORT PORSA ROTAS\n\nÀ ceux du labo,\nLe temps est instable, mais les oiseaux chantent toujours.\n\n— S.",
    x: 1280,
    y: 1008,
    width: 238,
    rotation: -2,
    image: blacklacePostcard,
    emoji: "✉️",
    caption: "carte postale",
  },
  {
    id: "fournaise-plan",
    kind: "map",
    label: "Plan de la Fournaise de Feuch",
    description: "Plan général de la Fournaise. Chambre de combustion, conduits d'aération, plateforme principale et annotations qui sentent le danger poli.",
    body: "LA FOURNAISE DE FEUCH\nPLAN GÉNÉRAL\n\n• chambre de combustion\n• réacteur principal\n• conduits d'aération\n• plateforme principale\n\nAnnotation : température max ? changer 3B + sécurité !",
    x: 642,
    y: 1000,
    width: 300,
    rotation: 1,
    image: fournaisePlan,
    emoji: "🏭",
    caption: "blueprint froissé",
  },
  {
    id: "fee-belette-file",
    kind: "polaroid",
    label: "Photo de la Fée Belette classifiée",
    description: "Ne pas nourrir après minuit. Non, ce n'est pas une blague. Enfin si, mais le laboratoire préfère ne pas vérifier.",
    body: "FÉE BELETTE\nCONFIDENTIEL\n\nNe pas nourrir après minuit.\nNe pas contredire avant café.\nNe pas laisser près d'un bouton rouge.",
    x: 954,
    y: 1038,
    width: 138,
    rotation: 4,
    image: feeBeletteClassified,
    emoji: "🦦",
    caption: "confidentiel",
  },
  {
    id: "slobodane-carnet",
    kind: "folder",
    label: "Carnet d'observations de Slobodane",
    description: "Carnet de terrain avec oiseaux, signaux SpecTRL et traces d'encre nerveuse. Les créatures réagissent aux ondes émises par la Fournaise.",
    body: "CARNET D'OBSERVATIONS\nSLOBODANE\n\nOiseaux observés : 147\nIdées notées : 612\nExpériences ratées : 89\nCafés absorbés : beaucoup trop\n\nÀ vérifier avec SpecTRL.",
    x: 674,
    y: 798,
    width: 220,
    rotation: 2,
    image: slobodaneNotebook,
    emoji: "📓",
    caption: "carnet terrain",
  },
  {
    id: "frunch-coaster",
    kind: "coaster",
    label: "Dessous de verre Frunch",
    description: "Un vrai goût pour les gens qui ne manquent pas de goût. Depuis 1997, approximativement, selon l'étiquette tachée.",
    body: "FRUNCH!\n\nUn vrai goût pour les gens qui ne manquent pas de goût.\nDepuis 1997.\n\nAvertissement : ne remplace pas un café.",
    x: 1380,
    y: 1034,
    width: 132,
    rotation: 8,
    image: frunchCoaster,
    emoji: "🥃",
    caption: "dessous de verre",
  },
  {
    id: "prohibited-cards-1",
    kind: "playingCard",
    label: "Trahison",
    description: "Carte Pro.Hibited retrouvée sur le bureau. Probablement jouée contre toi pendant que tu regardais ailleurs.",
    body: "♥ TRAHISON\n\nEffet : quelqu'un avait dit qu'il t'aiderait.\nRésultat : il lit la règle à l'envers.",
    x: 1048,
    y: 460,
    width: 108,
    rotation: -12,
    image: prohibitedCardOne,
    emoji: "♥",
    caption: "Pro.Hibited",
  },
  {
    id: "prohibited-cards-2",
    kind: "playingCard",
    label: "Coup bas",
    description: "La carte que personne ne veut recevoir mais que tout le monde garde au chaud, au cas où.",
    body: "♠ COUP BAS\n\nEffet : annule une certitude.\nBonus : ajoute un soupir dramatique.",
    x: 1140,
    y: 454,
    width: 108,
    rotation: 5,
    image: prohibitedCardTwo,
    emoji: "♠",
    caption: "Pro.Hibited",
  },
  {
    id: "prohibited-cards-3",
    kind: "playingCard",
    label: "Renversement",
    description: "Un joker, une couronne et une promesse de chaos ludique. Le plaisir est interdit, donc forcément intéressant.",
    body: "JOKER — RENVERSEMENT\n\nEffet : inverse l'ambiance.\nSi personne ne comprend, tout le monde pioche.",
    x: 1230,
    y: 466,
    width: 108,
    rotation: 13,
    image: prohibitedCardThree,
    emoji: "🃏",
    caption: "Pro.Hibited",
  },

  projectItem("terra", "book", 62, 156, 118, -4),
  projectItem("gerard-et-gerard", "book", 196, 134, 120, 2),
  projectItem("neverland-ltd-1", "book", 332, 150, 112, -2),
  projectItem("neverland-ltd-2", "book", 460, 128, 120, 3),
  projectItem("feulette-tachetee", "book", 596, 150, 116, -3),
  projectItem("kif-et-molla", "book", 730, 130, 122, 2),
  projectItem("crotte-man", "book", 70, 374, 118, -5),

  projectItem("spectrl", "app", 250, 392, 178, -2),
  projectItem("creature-sync", "app", 456, 376, 186, 2),
  projectItem("clochette-lite", "app", 674, 398, 176, -3),

  projectItem("prohibited-online", "game", 70, 610, 184, 2),
  projectItem("blacklace-dice", "game", 284, 594, 182, -2),
  projectItem("blacklace-echo", "game", 498, 612, 186, 2),

  projectItem("support-feuch-institute", "support", 1248, 592, 230, -2),
  projectItem("feuch-institute", "support", 1234, 230, 214, 2),

  {
    id: "personal-note",
    kind: "note",
    label: "Note personnelle",
    description: "Le Bazar évolue sans prévenir. Revenez souvent. Les oiseaux ont été consultés mais n'ont pas signé.",
    body: "NOTE PERSONNELLE\n\nLe Bazar évolue sans prévenir.\nRevenez souvent.\n\n— Feuch Institute Observation Division",
    x: 1268,
    y: 372,
    width: 212,
    rotation: 5,
    image: personalNote,
    emoji: "🐦",
    caption: "observation division",
  },
  {
    id: "contact-labo",
    kind: "note",
    label: "Contact du laboratoire",
    description: "Adresse officielle du laboratoire, rangée sous la tasse mais avant les anomalies dimensionnelles.",
    body: "CONTACT DU LABORATOIRE\n\nÉcrivez au Feuch Institute pour collaborations, questions, signaux étranges ou simplement dire bonjour.\n\nlubertvlc@gmail.com",
    x: 72,
    y: 1012,
    width: 260,
    rotation: -1,
    image: contactNote,
    emoji: "✉️",
    caption: "courrier",
  },
];
