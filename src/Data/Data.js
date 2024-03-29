import { LoremIpsum } from "lorem-ipsum";

import smallDragonImg from "../Styles/images/dragon-xsmall.jpg"
import mediumDragonImg from "../Styles/images/dragon-medium.jpg"
import bigDragonImg from "../Styles/images/dragon-big.jpg"

import ancientImgSmall from "../Assets/images/ancient/ancientSmall.jpg"
import ancientImgMedium from "../Assets/images/ancient/ancientMedium.jpg"
import ancientImgLarge from "../Assets/images/ancient/ancientLarge.jpg"

import canyonImgSmall from "../Assets/images/canyon/canyonSmall.jpg"
import canyonImgMedium from "../Assets/images/canyon/canyonMedium.jpg"
import canyonImgLarge from "../Assets/images/canyon/canyonLarge.jpg"

import castleImgSmall from "../Assets/images/castle/castleSmall.jpg"
import castleImgMedium from "../Assets/images/castle/castleMedium.jpg"
import castleImgLarge from "../Assets/images/castle/castleLarge.jpg"

import cityImgSmall from "../Assets/images/city/citySmall.jpg"
import cityImgMedium from "../Assets/images/city/cityMedium.jpg"
import cityImgLarge from "../Assets/images/city/cityLarge.jpg"

import doomsdayImgSmall from "../Assets/images/doomsday/doomsdaySmall.jpg"
import doomsdayImgMedium from "../Assets/images/doomsday/doomsdayMedium.jpg"
import doomsdayImgLarge from "../Assets/images/doomsday/doomsdayLarge.jpg"

import dungeonImgSmall from "../Assets/images/dungeon/dungeonSmall.jpg"
import dungeonImgMedium from "../Assets/images/dungeon/dungeonMedium.jpg"
import dungeonImgLarge from "../Assets/images/dungeon/dungeonLarge.jpg"

import explosionImgSmall from "../Assets/images/explosion/explosionSmall.jpg"
import explosionImgMedium from "../Assets/images/explosion/explosionMedium.jpg"
import explosionImgLarge from "../Assets/images/explosion/explosionLarge.jpg"

import faceImgSmall from "../Assets/images/face/faceSmall.jpg"
import faceImgMedium from "../Assets/images/face/faceMedium.jpg"
import faceImgLarge from "../Assets/images/face/faceLarge.jpg"

import giantImgSmall from "../Assets/images/giant/giantSmall.jpg"
import giantImgMedium from "../Assets/images/giant/giantMedium.jpg"
import giantImgLarge from "../Assets/images/giant/giantLarge.jpg"

import holyImgSmall from "../Assets/images/holy/holySmall.jpg"
import holyImgMedium from "../Assets/images/holy/holyMedium.jpg"
import holyImgLarge from "../Assets/images/holy/holyLarge.jpg"

import knightImgSmall from "../Assets/images/knight/knightSmall.jpg"
import knightImgMedium from "../Assets/images/knight/knightMedium.jpg"
import knightImgLarge from "../Assets/images/knight/knightLarge.jpg"

import purgatoryImgSmall from "../Assets/images/purgatory/purgatorySmall.jpg"
import purgatoryImgMedium from "../Assets/images/purgatory/purgatoryMedium.jpg"
import purgatoryImgLarge from "../Assets/images/purgatory/purgatoryLarge.jpg"


const lorem = new LoremIpsum({
  sentencesPerParagraph: {
    max: 8,
    min: 4,
  },
  wordsPerSentence: {
    max: 16,
    min: 4,
  },
});

// lorem.generateWords(1);
// lorem.generateSentences(5);;
// lorem.generateParagraphs(7);

export const MainNewsData = [
    {
      id: 0,
      title: "Fearless king",
      description: lorem.generateSentences(4),
      btnTitle1: "Join now",
      btnTitle2: "Learn more",
      imgSmall: smallDragonImg,
      imgMedium: mediumDragonImg,
      imgLarge: bigDragonImg,
      alt: lorem.generateSentences(1)
    }
];

export const NewsData = [
  {
    id: 0,
    date: "21-02-2022",
    title: "Dargo featured story: The gaint lost in canyon.",
    imgSmall: giantImgSmall,
    imgMedium: giantImgMedium,
    imgLarge: giantImgLarge,
    alt: lorem.generateSentences(1),
  },
  {
    id: 1,
    date: "21-02-2022",
    title: "Lighting Mountain Preview: Kingdom of harpies.",
    imgSmall: holyImgSmall,
    imgMedium: holyImgMedium,
    imgLarge: holyImgLarge,
    alt: lorem.generateSentences(1),
  },
  {
    id: 2,
    date: "21-02-2022",
    title: "Darkano: The ancient dragon.",
    imgSmall: knightImgSmall,
    imgMedium: knightImgMedium,
    imgLarge: knightImgLarge,
    alt: lorem.generateSentences(1),
  },
  {
    id: 3,
    date: "21-02-2022",
    title: "Winter is comming.",
    imgSmall: purgatoryImgSmall,
    imgMedium: purgatoryImgMedium,
    imgLarge: purgatoryImgLarge,
    alt: lorem.generateSentences(1),
  },
];

export const GuidesData = [
  {
    id: 0,
    prevTitle: "What style do you prefer?",
    title: "Choose your champion",
    imgSmall: doomsdayImgSmall,
    imgMedium: doomsdayImgMedium,
    imgLarge: doomsdayImgLarge,
    alt: lorem.generateSentences(1),
  },
  {
    id: 1,
    prevTitle: "Are you new?",
    title: "Begin to explore our world",
    imgSmall: dungeonImgSmall,
    imgMedium: dungeonImgMedium,
    imgLarge: dungeonImgLarge,
    alt: lorem.generateSentences(1),
  },
  {
    id: 2,
    prevTitle: "Community",
    title: "Join the guild",
    imgSmall: explosionImgSmall,
    imgMedium: explosionImgMedium,
    imgLarge: explosionImgLarge,
    alt: lorem.generateSentences(1),
  },
  {
    id: 3,
    prevTitle: "Adventure",
    title: "The most beautiful places",
    imgSmall: faceImgSmall,
    imgMedium: faceImgMedium,
    imgLarge: faceImgLarge,
    alt: lorem.generateSentences(1),
  },
];

export const OffersData = [
  {
    id: 0,
    prevTitle: "Latest update",
    title: "Darkano: The ancient dragon",
    desc: lorem.generateSentences(3),
    btnTitle1: "Buy now",
    btnTitle2: "Learn more",
    imgSmall: ancientImgSmall,
    imgMedium: ancientImgMedium,
    imgLarge: ancientImgLarge,
    alt: lorem.generateSentences(1),
  },
  {
    id: 1,
    prevTitle: "Earn 50% bonus power",
    title: "Power crystal for your champion!",
    desc: lorem.generateSentences(3),
    btnTitle1: "Take it!",
    btnTitle2: "Learn more",
    imgSmall: canyonImgSmall,
    imgMedium: canyonImgMedium,
    imgLarge: canyonImgLarge,
    alt: lorem.generateSentences(1),
  },
  {
    id: 2,
    prevTitle: "The lighting mountain",
    title: "Free beta testing is coming up!",
    desc: lorem.generateSentences(3),
    btnTitle1: "Sign Up",
    btnTitle2: "Learn More",
    imgSmall: castleImgSmall,
    imgMedium: castleImgMedium,
    imgLarge: castleImgLarge,
    alt: lorem.generateSentences(1),
  },
  {
    id: 3,
    prevTitle: "Skycity",
    title: "New pvp arena",
    desc: lorem.generateSentences(3),
    btnTitle1: "Join now",
    btnTitle2: "Learn more",
    imgSmall: cityImgSmall,
    imgMedium: cityImgMedium,
    imgLarge: cityImgLarge,
    alt: lorem.generateSentences(1),
  },
];
