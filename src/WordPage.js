import { useState, useEffect } from "react";
import japaneseOnomatopoeia from "./japaneseOnomatopoeia.json";
import WordAnimationComponents from "./word-animations/WordAnimationMap";
import Word from "./Word";
import Sentence from "./Sentence";

function WordPage({ match }) {
  useEffect(() => {
    loadData();
  }, []);

  const [item, setItem] = useState([]);

  const loadData = () => {
    const item = JSON.parse(JSON.stringify(japaneseOnomatopoeia));
    setItem(item);
  };

  const WordAnimation = WordAnimationComponents[match.params.id];

  return (
    <section className="word-page">
      {item
        .filter((item) => item.id === match.params.id)
        .map((word) => {
          return (
            <section className="word-container" key={word.id}>
              <WordAnimation />
              <Word
                key={word.id}
                id={word.id}
                word={word.word}
                meaning={word.meaning}
              />
              <h2 className="sentences-heading">Sentences</h2>
              {word.sentences.map((sentence) => {
                return (
                  <Sentence
                    key={sentence.sentence}
                    sentence={sentence.sentence}
                    sentenceMeaning={sentence.sentenceMeaning}
                  />
                );
              })}
            </section>
          );
        })}
    </section>
  );
}

export default WordPage;
