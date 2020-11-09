import React from "react";

function Sentence({ sentence, sentenceMeaning }) {
  return (
    <section>
      <p className="japanese-sentence">{sentence}</p>
      <p className="english-sentence">{sentenceMeaning}</p>
    </section>
  );
}

export default Sentence;
