import archiveClip from "@/assets/laboratoire/clips/pince-archive-01.png";
import paperClip from "@/assets/laboratoire/clips/trombone-01.png";
import blackClips from "@/assets/laboratoire/clips/trombones-noirs-01.png";
import coffeeThree from "@/assets/laboratoire/coffee/tache-cafe-03.png";
import coffeeFive from "@/assets/laboratoire/coffee/tache-cafe-05.png";
import coffeeTen from "@/assets/laboratoire/coffee/tache-cafe-10.png";
import woodStamp from "@/assets/laboratoire/coffee/tampon-bois-01.png";
import oldPaper from "@/assets/laboratoire/papers/grand-feuillet-01.png";
import gridNotebook from "@/assets/laboratoire/papers/carnet-quadrille-plume-01.png";
import paperStrip from "@/assets/laboratoire/papers/bandelette-vieillie-01.png";
import postIt from "@/assets/laboratoire/papers/post-it-vieilli-01.png";
import pinRed from "@/assets/laboratoire/pins/punaise-01.png";
import pinGreen from "@/assets/laboratoire/pins/punaise-02.png";
import pinBlue from "@/assets/laboratoire/pins/punaise-03.png";

export type DeskDecor = {
  id: string;
  image: string;
  x: number;
  y: number;
  width: number;
  rotation: number;
  opacity?: number;
  zIndex?: number;
};

export const deskDecor: DeskDecor[] = [
  { id: "paper-under-books", image: oldPaper, x: 60, y: 60, width: 630, rotation: -2, opacity: 0.34, zIndex: 0 },
  { id: "notebook-under-apps", image: gridNotebook, x: 430, y: 356, width: 500, rotation: 2, opacity: 0.24, zIndex: 0 },
  { id: "paper-strip", image: paperStrip, x: 908, y: 324, width: 190, rotation: -8, opacity: 0.75, zIndex: 2 },
  { id: "post-it", image: postIt, x: 1120, y: 830, width: 94, rotation: 7, opacity: 0.9, zIndex: 2 },
  { id: "coffee-left", image: coffeeThree, x: 30, y: 430, width: 180, rotation: 0, opacity: 0.42, zIndex: 0 },
  { id: "coffee-center", image: coffeeFive, x: 840, y: 682, width: 154, rotation: 20, opacity: 0.38, zIndex: 0 },
  { id: "coffee-right", image: coffeeTen, x: 1660, y: 350, width: 150, rotation: 0, opacity: 0.35, zIndex: 0 },
  { id: "wood-stamp", image: woodStamp, x: 905, y: 1085, width: 92, rotation: -16, opacity: 0.95, zIndex: 3 },
  { id: "archive-clip", image: archiveClip, x: 1240, y: 92, width: 74, rotation: -12, zIndex: 6 },
  { id: "clip-one", image: paperClip, x: 790, y: 340, width: 55, rotation: 18, zIndex: 4 },
  { id: "clip-two", image: paperClip, x: 1015, y: 835, width: 47, rotation: -22, zIndex: 4 },
  { id: "black-clips", image: blackClips, x: 1450, y: 930, width: 95, rotation: 12, zIndex: 4 },
  { id: "pin-red", image: pinRed, x: 1130, y: 350, width: 31, rotation: 0, zIndex: 8 },
  { id: "pin-green", image: pinGreen, x: 1250, y: 305, width: 28, rotation: 14, zIndex: 8 },
  { id: "pin-blue", image: pinBlue, x: 1080, y: 505, width: 28, rotation: -8, zIndex: 8 },
];
