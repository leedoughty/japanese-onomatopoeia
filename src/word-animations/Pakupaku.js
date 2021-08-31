import React from "react";
import styled from "styled-components";
import WordAnimationBackground from "./WordAnimationBackground";
import WordAnimationContainer from "./WordAnimationContainer";

const PakupakuText = styled.p`
  font-size: 80px;
  @media (max-width: 768px) {
    font-size: 40px;
  }
`;

function Pakupaku() {
  return (
    <WordAnimationBackground navBarColour="black">
      <WordAnimationContainer>
        <PakupakuText>ぱくぱく</PakupakuText>
      </WordAnimationContainer>
    </WordAnimationBackground>
  );
}

export default Pakupaku;
