import { useState, useEffect } from "react";
import japaneseOnomatopoeia from "./japaneseOnomatopoeia.json";
import * as WordAnimations from "./word-animations";
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

  const WordAnimationComponents = {
    dokidoki: WordAnimations.Dokidoki,
    fuwafuwa: WordAnimations.Fuwafuwa,
    gurarigurari: WordAnimations.Gurarigurari,
    kurukuru: WordAnimations.Kurukuru,
  };

  const WordAnimation = WordAnimationComponents[match.params.id];

  return (
    <div>
      {item.map((word) => {
        if (word.id === match.params.id) {
          return (
            <>
              <Word id={word.id} word={word.word} meaning={word.meaning} />
              <WordAnimation />
              <Sentence
                sentence={word.sentences[0].sentence}
                sentenceMeaning={word.sentences[0].sentenceMeaning}
              />
            </>
          );
        }
      })}
    </div>
  );
}

export default WordPage;
