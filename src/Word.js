import React from "react";
import styled from "styled-components";

const WordContainer = styled.section`
  width: 90vw;
  margin: auto;
  padding: 20px 0 20px 0;
`;

function Word({ id, word, meaning }) {
  return (
    <WordContainer>
      <span className="japanese-word">{word}</span>
      <span className="romaji-word">{id}</span>
      <br />
      <span className="english-word">{meaning}</span>
    </WordContainer>
  );
}

export default Word;
