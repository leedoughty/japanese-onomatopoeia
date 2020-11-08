import { useState, useEffect } from "react";
import japaneseOnomatopoeia from "./japaneseOnomatopoeia.json";
import * as WordAnimations from "./word-animations";
import "./App.css";

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
              <h1>{word.id}</h1>
              <p>{word.word}</p>
              <p>{word.meaning}</p>
              <p>{word.sentences[0].sentence}</p>
              <p>{word.sentences[0].sentenceMeaning}</p>
              <WordAnimation />
            </>
          );
        }
      })}
    </div>
  );
}

export default WordPage;
