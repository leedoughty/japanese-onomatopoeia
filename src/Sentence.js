import React from "react";
import styled from "styled-components";

const SentenceContainer = styled.section`
  width: 90vw;
  margin: auto;
  padding-bottom: 30px;
`;

function Sentence({ sentence, sentenceMeaning }) {
  return (
    <SentenceContainer>
      <p className="japanese-sentence">{sentence}</p>
      <p className="english-sentence">{sentenceMeaning}</p>
    </SentenceContainer>
  );
}

export default Sentence;
