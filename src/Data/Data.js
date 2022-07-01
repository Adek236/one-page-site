import { LoremIpsum } from "lorem-ipsum";

import smallDragonImg from "../Styles/images/dragon-xsmall.jpg"
import bigDragonImg from "../Styles/images/dragon-big.jpg"


const lorem = new LoremIpsum({
  sentencesPerParagraph: {
    max: 8,
    min: 4
  },
  wordsPerSentence: {
    max: 16,
    min: 4
  }
});

// lorem.generateWords(1);
// lorem.generateSentences(5);;
// lorem.generateParagraphs(7);

export const MainNewsData = [
    {
      title: lorem.generateWords(3),
      description: lorem.generateSentences(4),
      imgSmall: smallDragonImg,
      imgBig: bigDragonImg,
      alt: lorem.generateSentences(1)
    }
]