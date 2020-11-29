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
      {item.map((word) => {
        if (word.id === match.params.id) {
          return (
            <>
              <Word id={word.id} word={word.word} meaning={word.meaning} />
              <WordAnimation />
              <h2 className="sentences-heading">Sentences</h2>
              <Sentence
                sentence={word.sentences[0].sentence}
                sentenceMeaning={word.sentences[0].sentenceMeaning}
              />
            </>
          );
        }
      })}
    </section>
  );
}

export default WordPage;
