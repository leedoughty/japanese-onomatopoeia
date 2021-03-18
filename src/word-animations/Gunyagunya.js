import React from "react";
import styled from "styled-components";
import GunyagunyaText from "./images/squishy.svg";
import WordAnimationBackground from "./WordAnimationBackground";
import WordAnimationContainer from "./WordAnimationContainer";

const GunyagunyaImage = styled.img`
  width: 400px;
  height: auto;
`;

function Gunyagunya() {
  return (
    <WordAnimationBackground backgroundColour="#f1c410" navBarColour="white">
      <WordAnimationContainer>
        <GunyagunyaImage src={GunyagunyaText} alt="Squishy" />
      </WordAnimationContainer>
    </WordAnimationBackground>
  );
}

export default Gunyagunya;
