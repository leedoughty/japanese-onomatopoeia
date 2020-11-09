import React from "react";

function Word({ id, word, meaning }) {
  return (
    <section>
      <span className="japanese-word">{word}</span>
      <span className="romaji-word">{id}</span>
      <br />
      <span className="english-word">{meaning}</span>
    </section>
  );
}

export default Word;
