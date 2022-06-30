import { LoremIpsum } from "lorem-ipsum";

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
      title: lorem.generateWords(5),
      description: lorem.generateSentences(2),
      img: "https://res.cloudinary.com/yaif/image/upload/v1654782198/wizard-dark-dungeon-illustration_yvbdai.jpg",
      alt: lorem.generateSentences(1)
    }
]