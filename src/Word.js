import React from "react";

function Word({ id, word, meaning }) {
  return (
    <section>
      <span>{id}</span>
      <span>{word}</span>
      <br />
      <span>{meaning}</span>
    </section>
  );
}

export default Word;
