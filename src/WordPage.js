import { useState, useEffect } from "react";
import japaneseOnomatopoeia from "./japaneseOnomatopoeia.json";
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
            </>
          );
        }
      })}
    </div>
  );
}

export default WordPage;
