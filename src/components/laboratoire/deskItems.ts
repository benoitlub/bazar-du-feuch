import { projects } from "@/data/projects";
import clochetteLiteCard from "@/assets/laboratoire/apps/clochette-lite-card.jpg";
import creatureSyncCard from "@/assets/laboratoire/apps/creature-sync-card.jpg";
import spectrlCard from "@/assets/laboratoire/apps/spectrl-card.jpg";
import feuchArchiveFolder from "@/assets/laboratoire/archives/dossier-feuch-institute-02.png";
import badgeFeuchInstitute from "@/assets/laboratoire/badges/badge-feuch-institute-01.png";
import blacklacePostcard from "@/assets/laboratoire/blacklace/carte-postale-blacklace-01.png";
import moscomiulBreak from "@/assets/laboratoire/blacklace/coupure-moscomiul-break-01.png";
import feeBeletteClassified from "@/assets/laboratoire/blacklace/fee-belette-classee-01.png";
import fournaisePlan from "@/assets/laboratoire/blacklace/plan-fournase-feuch-01.png";
import bnn24Poster from "@/assets/laboratoire/bnn24/affiche-bnn24-pliee-01.png";
import frunchCoaster from "@/assets/laboratoire/frunch/dessous-verre-frunch-01.png";
import blacklaceDiceCard from "@/assets/laboratoire/games/blacklace-dice-card.jpg";
import prohibitedCard from "@/assets/laboratoire/games/prohibited-card.jpg";
import prohibitedOnlineCard from "@/assets/laboratoire/games/prohibited-online-card.jpg";
import blacklaceIslandLogo from "@/assets/laboratoire/logos/blacklace-island-logo.jpg";
import prohibitedNetworkLogo from "@/assets/laboratoire/logos/prohibited-network-logo.jpg";
import specimenDomeLogo from "@/assets/laboratoire/logos/specimen-dome-logo.jpg";
import introNote from "@/assets/laboratoire/notes/note-manuscrite-04.png";
import personalNote from "@/assets/laboratoire/notes/note-personnelle-01.png";
import contactNote from "@/assets/laboratoire/notes/note-manuscrite-05.png";
import slobodaneNotebook from "@/assets/laboratoire/notes/carnet-slobodane-01.png";
import natashaPortrait from "@/assets/laboratoire/portraits/natasha.jpg";
import rotasMap from "@/assets/laboratoire/rotas/carte-port-porsa-rotas-01.png";
import satorCard from "@/assets/laboratoire/sator/carre-sator-01.png";
import bnn24Ticket from "@/assets/laboratoire/tickets/ticket-bnn24-01.png";
import bazarDuFeuch from "@/assets/laboratoire/universe/bazar-du-feuch.jpg";
import blacklaceEchoCard from "@/assets/laboratoire/universe/blacklace-echo-card.jpg";
import crotteCover from "@/assets/laboratoire/books/crotte-de-nez-magique-cover.jpg";
import neverlandOneCover from "@/assets/laboratoire/books/neverland-v1-cover.jpg";
import terraCover from "@/assets/laboratoire/terra-cover.png";
import gerardCover from "@/assets/laboratoire/gerard-cover.webp";
import neverlandTwoCover from "@/assets/laboratoire/neverland-v2-cover.jpg";
import feuletteCover from "@/assets/laboratoire/feulette-cover.webp";
import kifMollaCover from "@/assets/laboratoire/kif-molla-cover.webp";

export type ItemKind =
  | "book"
  | "app"
  | "game"
  | "note"
  | "card"
  | "decor"
  | "support"
  | "polaroid"
  | "map"
  | "ticket"
  | "poster"
  | "folder"
  | "coaster";

export type ObjectFrame = "bare" | "terminal" | "tablet" | "phone" | "radio" | "crt";
export type EntityType = "Personnage" | "Lieu" | "Média" | "Livre" | "Application" | "Univers" | "Asset";

export type DeskItem = {
  id: string;
  kind: ItemKind;
  label: string;
  description: string;
  x: number;
  y: number;
  width: number;
  rotation: number;
  image: string;
  frame?: ObjectFrame;
  body?: string;
  url?: string;
  actionLabel?: string;
  caption?: string;
  media?: "youtube";
  signalEffect?: boolean;
  relations?: Partial<Record<EntityType, string[]>>;
};

const byId = Object.fromEntries(projects.map((project) => [project.id, project]));

const projectAssets: Record<string, string> = {
  terra: terraCover,
  "gerard-et-gerard": gerardCover,
  "neverland-ltd-1": neverlandOneCover,
  "neverland-ltd-2": neverlandTwoCover,
  "feulette-tachetee": feuletteCover,
  "kif-et-molla": kifMollaCover,
  "crotte-man": crotteCover,
  spectrl: spectrlCard,
  "creature-sync": creatureSyncCard,
  "clochette-lite": clochetteLiteCard,
  "prohibited-online": prohibitedOnlineCard,
  "blacklace-dice": blacklaceDiceCard,
  "blacklace-echo": blacklaceEchoCard,
  "support-feuch-institute": badgeFeuchInstitute,
  "feuch-institute": bazarDuFeuch,
};

function projectItem(
  id: string,
  kind: ItemKind,
  x: number,
  y: number,
  width: number,
  rotation: number,
  frame: ObjectFrame = "bare",
): DeskItem {
  const project = byId[id];
  const image = projectAssets[id];

  if (!project || !image) {
    throw new Error(`Asset officiel manquant pour l'objet ${id}`);
  }

  return {
    id,
    kind,
    label: project.title,
    description: project.description,
    x,
    y,
    width,
    rotation,
    frame,
    image,
    url: project.url,
    actionLabel: project.actionLabel,
    caption: project.status,
    relations: {
      Asset: [image],
      ...(kind === "book" ? { Livre: [project.title] } : {}),
      ...(kind === "app" ? { Application: [project.title] } : {}),
      Univers: ["Feuch Institute"],
    },
  };
}

export const deskItems: DeskItem[] = [
  projectItem("terra", "book", 78, 150, 168, -8),
  projectItem("gerard-et-gerard", "book", 202, 116, 164, 3),
  projectItem("neverland-ltd-1", "book", 338, 151, 154, -4),
  projectItem("neverland-ltd-2", "book", 462, 124, 158, 2),
  projectItem("feulette-tachetee", "book", 585, 154, 158, 6),
  projectItem("kif-et-molla", "book", 704, 126, 166, 10),
  projectItem("crotte-man", "book", 88, 330, 150, -7),

  {
    id: "note-intro",
    kind: "note",
    label: "Bienvenue au Feuch Institute",
    description: "On observe, on note, on fabrique, on code, on écrit et parfois ça fonctionne.",
    body: "BIENVENUE AU FEUCH INSTITUTE\n\nIci, on observe, on note, on fabrique, on code, on écrit et parfois ça fonctionne.",
    x: 648,
    y: 28,
    width: 304,
    rotation: -3,
    image: introNote,
    caption: "note d'accueil",
  },

  projectItem("spectrl", "app", 300, 460, 238, -4, "terminal"),
  projectItem("creature-sync", "app", 535, 430, 248, 3, "tablet"),
  projectItem("clochette-lite", "app", 774, 478, 182, -5, "phone"),
  projectItem("blacklace-echo", "game", 945, 430, 250, 2, "radio"),

  projectItem("prohibited-online", "game", 164, 795, 238, -4),
  projectItem("blacklace-dice", "game", 385, 832, 218, 4),
  {
    id: "prohibited-box",
    kind: "game",
    label: "Pro.Hibited",
    description: "Boîte de présentation du jeu de cartes Pro.Hibited, laissée ouverte près des prototypes.",
    x: 42,
    y: 810,
    width: 170,
    rotation: 6,
    image: prohibitedCard,
    url: "https://prohibited.gumroad.com",
    actionLabel: "Découvrir Pro.Hibited",
    caption: "boîte de jeu",
    relations: { Univers: ["Pro.Hibited"], Asset: [prohibitedCard] },
  },
  {
    id: "prohibited-network-logo",
    kind: "decor",
    label: "Pro.Hibited Network",
    description: "Sceau officiel du réseau Pro.Hibited.",
    x: 84,
    y: 694,
    width: 146,
    rotation: -9,
    image: prohibitedNetworkLogo,
    url: "https://benoitlub.github.io/prohibited-online/",
    actionLabel: "Ouvrir le réseau",
    caption: "identité officielle",
  },
  {
    id: "blacklace-island-logo",
    kind: "decor",
    label: "Blacklace Island",
    description: "Insigne officiel de Blacklace Island.",
    x: 585,
    y: 820,
    width: 150,
    rotation: -5,
    image: blacklaceIslandLogo,
    url: "https://benoitlub.github.io/blacklace-echo/",
    actionLabel: "Explorer Blacklace",
    caption: "insigne officiel",
  },
  {
    id: "specimen-dome",
    kind: "decor",
    label: "Spécimen sous cloche",
    description: "Culture bioluminescente conservée au laboratoire.",
    x: 752,
    y: 800,
    width: 170,
    rotation: 4,
    image: specimenDomeLogo,
    caption: "spécimen expérimental",
  },

  {
    id: "feuch-folder",
    kind: "folder",
    label: "Dossier Feuch Institute",
    description: "Dossier n°17-42-BL : recherches, observations et protocoles Blacklace.",
    x: 1260,
    y: 112,
    width: 290,
    rotation: 4,
    image: feuchArchiveFolder,
    caption: "dossier classé",
    relations: { Univers: ["Feuch Institute", "Blacklace Island"] },
  },
  {
    id: "rotas-map",
    kind: "map",
    label: "Carte de Port Porsa Rotas",
    description: "Carte de terrain de Blacklace Island annotée par les équipes du laboratoire.",
    x: 1060,
    y: 280,
    width: 350,
    rotation: -5,
    image: rotasMap,
    caption: "carte de terrain",
    relations: { Lieu: ["Port Porsa Rotas"], Univers: ["Blacklace Island"] },
  },
  {
    id: "slobodane-carnet",
    kind: "folder",
    label: "Carnet d'observations",
    description: "Carnet de terrain consacré aux oiseaux, signaux et anomalies de la Fournaise.",
    x: 1410,
    y: 360,
    width: 225,
    rotation: 5,
    image: slobodaneNotebook,
    caption: "carnet terrain",
  },
  {
    id: "natasha-archive",
    kind: "polaroid",
    label: "Natasha, correspondante BNN24",
    description: "Journaliste BNN24 à Port Porsa Rotas. Enquêtes, interviews et phénomènes étranges.",
    body: "DOSSIER PERSONNAGE — NATASHA\n\nFonction : journaliste BNN24\nAffectation : Port Porsa Rotas\nSpécialités : enquêtes, interviews, phénomènes étranges.",
    x: 1190,
    y: 610,
    width: 184,
    rotation: -6,
    image: natashaPortrait,
    frame: "tablet",
    url: "https://youtube.com/playlist?list=PLtFv3lwLTGM49J7nEiCFZKanTfBez11-t&si=OymSfpzoIMtYmkeh",
    actionLabel: "Écouter Natasha Podcast",
    media: "youtube",
    caption: "journaliste · podcast",
    relations: {
      Personnage: ["Natasha"],
      Lieu: ["Port Porsa Rotas"],
      Média: ["BNN24", "Natasha Podcast"],
      Univers: ["Blacklace Island"],
    },
  },
  {
    id: "bnn-poster",
    kind: "poster",
    label: "BNN24, archives vidéo",
    description: "Reportages, éditions spéciales et signaux captés depuis Blacklace Island.",
    x: 1360,
    y: 590,
    width: 215,
    rotation: 4,
    image: bnn24Poster,
    frame: "crt",
    url: "https://youtube.com/playlist?list=PLtFv3lwLTGM7ojziBvTomDBVlTNz7BzZs&si=9p3VWPq16HgxYpdD",
    actionLabel: "Voir les archives BNN24",
    media: "youtube",
    signalEffect: true,
    caption: "archives audiovisuelles",
    relations: { Média: ["BNN24"], Personnage: ["Natasha"], Univers: ["Blacklace Island"] },
  },
  {
    id: "moscomiul-break",
    kind: "poster",
    label: "Moscomiul Break",
    description: "Images instables et ruptures de transmission documentées autour de Moscomiul.",
    x: 1515,
    y: 725,
    width: 215,
    rotation: -7,
    image: moscomiulBreak,
    frame: "tablet",
    url: "https://youtube.com/playlist?list=PLtFv3lwLTGM65DZeKI5u1vDScwJn4_yyB&si=ASUDWpvF4LJsUuiP",
    actionLabel: "Voir Moscomiul Break",
    media: "youtube",
    signalEffect: true,
    caption: "archives audiovisuelles",
    relations: { Média: ["Moscomiul Break"], Lieu: ["Moscomiul"], Univers: ["Blacklace Island"] },
  },
  {
    id: "bnn24-ticket",
    kind: "ticket",
    label: "Ticket BNN24",
    description: "Accès salle de presse pour une conférence de terrain.",
    x: 1320,
    y: 820,
    width: 215,
    rotation: 8,
    image: bnn24Ticket,
    caption: "badge presse",
  },
  {
    id: "fournaise-plan",
    kind: "map",
    label: "Plan de la Fournaise de Feuch",
    description: "Plan général de la Fournaise et de ses conduits d'aération.",
    x: 1000,
    y: 930,
    width: 330,
    rotation: 2,
    image: fournaisePlan,
    caption: "plan froissé",
    relations: { Lieu: ["Fournaise de Feuch"], Univers: ["Blacklace Island"] },
  },
  {
    id: "fee-belette-file",
    kind: "polaroid",
    label: "Fée Belette classifiée",
    description: "Archive classifiée. Ne pas nourrir après minuit.",
    x: 1315,
    y: 1000,
    width: 150,
    rotation: 6,
    image: feeBeletteClassified,
    caption: "confidentiel",
  },
  {
    id: "blacklace-postcard",
    kind: "card",
    label: "Carte postale Blacklace Island",
    description: "Le temps est instable, mais les oiseaux chantent toujours.",
    x: 1490,
    y: 1015,
    width: 245,
    rotation: -4,
    image: blacklacePostcard,
    caption: "carte postale",
  },
  {
    id: "sator-card",
    kind: "card",
    label: "Carré SATOR",
    description: "Plaque gravée retrouvée dans un tiroir du laboratoire.",
    x: 535,
    y: 1040,
    width: 225,
    rotation: -7,
    image: satorCard,
    caption: "artefact",
  },
  {
    id: "frunch-coaster",
    kind: "coaster",
    label: "Dessous de verre Frunch",
    description: "Un vrai goût pour les gens qui ne manquent pas de goût.",
    x: 790,
    y: 1050,
    width: 145,
    rotation: 10,
    image: frunchCoaster,
    caption: "archive Frunch",
  },
  projectItem("support-feuch-institute", "support", 70, 1045, 235, -3),
  projectItem("feuch-institute", "support", 1570, 80, 210, 5),
  {
    id: "personal-note",
    kind: "note",
    label: "Note personnelle",
    description: "Le Bazar évolue sans prévenir. Revenez souvent.",
    x: 970,
    y: 90,
    width: 215,
    rotation: -4,
    image: personalNote,
    caption: "observation division",
  },
  {
    id: "contact-labo",
    kind: "note",
    label: "Contact du laboratoire",
    description: "Adresse officielle du laboratoire.",
    body: "CONTACT DU LABORATOIRE\n\nCollaborations, questions et signaux étranges :\n\nlubertvlc@gmail.com",
    x: 300,
    y: 1095,
    width: 265,
    rotation: 3,
    image: contactNote,
    caption: "courrier",
  },
];
