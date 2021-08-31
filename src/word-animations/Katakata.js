import React from "react";
import styled from "styled-components";
import WordAnimationBackground from "./WordAnimationBackground";
import WordAnimationContainer from "./WordAnimationContainer";

const KatakataText = styled.p`
  font-size: 80px;
  @media (max-width: 768px) {
    font-size: 40px;
  }
`;

function Katakata() {
  return (
    <WordAnimationBackground navBarColour="black">
      <WordAnimationContainer>
        <KatakataText>カタカタ</KatakataText>
      </WordAnimationContainer>
    </WordAnimationBackground>
  );
}

export default Katakata;
