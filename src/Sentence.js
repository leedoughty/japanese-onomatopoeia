import React from "react";

function Sentence({ sentence, sentenceMeaning }) {
  return (
    <section>
      <p>{sentence}</p>
      <p>{sentenceMeaning}</p>
    </section>
  );
}

export default Sentence;
