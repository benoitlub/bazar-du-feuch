import archiveClip from "@/assets/laboratoire/clips/pince-archive-01.png";
import paperClip from "@/assets/laboratoire/clips/trombone-01.png";
import blackClips from "@/assets/laboratoire/clips/trombones-noirs-01.png";
import crumpledPaper from "@/assets/laboratoire/coffee/papier-froisse-01.png";
import coffeeThree from "@/assets/laboratoire/coffee/tache-cafe-03.png";
import coffeeFive from "@/assets/laboratoire/coffee/tache-cafe-05.png";
import coffeeTen from "@/assets/laboratoire/coffee/tache-cafe-10.png";
import woodStamp from "@/assets/laboratoire/coffee/tampon-bois-01.png";
import archiveString from "@/assets/laboratoire/archives/ficelle-archive-01.png";
import archiveStamp from "@/assets/laboratoire/archives/tampon-administratif-08.png";
import noteOne from "@/assets/laboratoire/notes/note-manuscrite-01.png";
import noteTwo from "@/assets/laboratoire/notes/note-manuscrite-02.png";
import noteThree from "@/assets/laboratoire/notes/note-manuscrite-03.png";
import photoFolder from "@/assets/laboratoire/papers/dossier-photos-vieilli-01.png";
import oldPaper from "@/assets/laboratoire/papers/grand-feuillet-01.png";
import gridNotebook from "@/assets/laboratoire/papers/carnet-quadrille-plume-01.png";
import paperStrip from "@/assets/laboratoire/papers/bandelette-vieillie-01.png";
import postIt from "@/assets/laboratoire/papers/post-it-vieilli-01.png";
import smallLabel from "@/assets/laboratoire/papers/etiquette-vieillie-06.png";
import pinRed from "@/assets/laboratoire/pins/punaise-01.png";
import pinGreen from "@/assets/laboratoire/pins/punaise-02.png";
import pinBlue from "@/assets/laboratoire/pins/punaise-03.png";
import pinAmber from "@/assets/laboratoire/pins/punaise-04.png";
import pinWhite from "@/assets/laboratoire/pins/punaise-05.png";
import blankBnnTicket from "@/assets/laboratoire/tickets/ticket-bnn24-vierge-01.png";

export type DeskDecor = {
  id: string;
  label: string;
  image: string;
  x: number;
  y: number;
  width: number;
  rotation: number;
  opacity?: number;
  zIndex?: number;
  motion?: "paper" | "glint";
};

export const deskDecor: DeskDecor[] = [
  { id: "paper-under-books", label: "Feuillet sous les livres", image: oldPaper, x: 42, y: 52, width: 690, rotation: -2, opacity: 0.42, zIndex: 1 },
  { id: "notebook-under-apps", label: "Carnet à plume", image: gridNotebook, x: 414, y: 338, width: 540, rotation: 2, opacity: 0.36, zIndex: 17 },
  { id: "photo-folder", label: "Dossier photographique", image: photoFolder, x: 1180, y: 28, width: 410, rotation: 3, opacity: 0.46, zIndex: 27 },
  { id: "paper-strip", label: "Bandelette annotée", image: paperStrip, x: 900, y: 334, width: 220, rotation: -8, opacity: 0.9, zIndex: 17, motion: "paper" },
  { id: "post-it", label: "Post-it griffonné", image: postIt, x: 1072, y: 744, width: 132, rotation: 7, opacity: 1, zIndex: 30, motion: "paper" },
  { id: "small-label", label: "Étiquette d'expérience", image: smallLabel, x: 704, y: 746, width: 142, rotation: -11, opacity: 0.94, zIndex: 21 },
  { id: "crumpled-paper", label: "Papier froissé", image: crumpledPaper, x: 1650, y: 1008, width: 152, rotation: 8, opacity: 0.92, zIndex: 30, motion: "paper" },
  { id: "note-one", label: "Note d'observation", image: noteOne, x: 222, y: 344, width: 166, rotation: 8, opacity: 0.94, zIndex: 17, motion: "paper" },
  { id: "note-two", label: "Note Creature-Sync", image: noteTwo, x: 672, y: 672, width: 172, rotation: -7, opacity: 0.94, zIndex: 22 },
  { id: "note-three", label: "Note de terrain Rotas", image: noteThree, x: 1510, y: 250, width: 176, rotation: 9, opacity: 0.9, zIndex: 31, motion: "paper" },
  { id: "blank-bnn-ticket", label: "Ticket presse BNN24", image: blankBnnTicket, x: 1480, y: 888, width: 224, rotation: -9, opacity: 1, zIndex: 33 },
  { id: "coffee-left", label: "Auréole de café", image: coffeeThree, x: 16, y: 448, width: 215, rotation: 0, opacity: 0.56, zIndex: 1 },
  { id: "coffee-center", label: "Trace de verre Frunch", image: coffeeFive, x: 730, y: 1006, width: 190, rotation: 20, opacity: 0.52, zIndex: 37 },
  { id: "coffee-right", label: "Trace de café Feuch", image: coffeeTen, x: 1652, y: 352, width: 188, rotation: 0, opacity: 0.5, zIndex: 27 },
  { id: "wood-stamp", label: "Tampon en bois", image: woodStamp, x: 914, y: 1080, width: 118, rotation: -16, opacity: 1, zIndex: 44 },
  { id: "archive-stamp", label: "Tampon administratif", image: archiveStamp, x: 1172, y: 1150, width: 116, rotation: 13, opacity: 0.9, zIndex: 44 },
  { id: "archive-string", label: "Ficelle d'archive", image: archiveString, x: 1574, y: 126, width: 170, rotation: 18, opacity: 1, zIndex: 27 },
  { id: "archive-clip", label: "Pince du dossier Feuch", image: archiveClip, x: 1220, y: 72, width: 92, rotation: -12, zIndex: 44 },
  { id: "clip-one", label: "Trombone des applications", image: paperClip, x: 790, y: 344, width: 72, rotation: 18, zIndex: 44 },
  { id: "clip-two", label: "Trombone des archives", image: paperClip, x: 1014, y: 840, width: 64, rotation: -22, zIndex: 44 },
  { id: "black-clips", label: "Trombones noirs BNN24", image: blackClips, x: 1432, y: 920, width: 122, rotation: 12, zIndex: 44 },
  { id: "pin-red", label: "Punaise rouge Rotas", image: pinRed, x: 1132, y: 350, width: 42, rotation: 0, zIndex: 44 },
  { id: "pin-green", label: "Punaise verte Rotas", image: pinGreen, x: 1250, y: 306, width: 40, rotation: 14, zIndex: 44 },
  { id: "pin-blue", label: "Punaise bleue Rotas", image: pinBlue, x: 1080, y: 506, width: 40, rotation: -8, zIndex: 44 },
  { id: "pin-amber", label: "Punaise du carnet", image: pinAmber, x: 356, y: 420, width: 39, rotation: 11, zIndex: 44, motion: "glint" },
  { id: "pin-white", label: "Punaise des archives", image: pinWhite, x: 1602, y: 340, width: 39, rotation: -7, zIndex: 44, motion: "glint" },
];
