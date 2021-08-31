import React from "react";
import styled from "styled-components";
import WordAnimationBackground from "./WordAnimationBackground";
import WordAnimationContainer from "./WordAnimationContainer";

const DandanText = styled.p`
  font-size: 80px;
  @media (max-width: 768px) {
    font-size: 40px;
  }
`;

function Dandan() {
  return (
    <WordAnimationBackground navBarColour="black">
      <WordAnimationContainer>
        <DandanText>だんだん</DandanText>
      </WordAnimationContainer>
    </WordAnimationBackground>
  );
}

export default Dandan;
