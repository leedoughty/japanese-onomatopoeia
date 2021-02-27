import React from "react";
import styled from "styled-components";
import GunyagunyaText from "./images/squishy.svg";
import WordAnimationBackground from "./WordAnimationBackground";

const GunyagunyaContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const GunyagunyaImage = styled.img`
  width: 400px;
  height: auto;
`;

function Gunyagunya() {
  return (
    <WordAnimationBackground backgroundColour="#f1c410" navBarColour="white">
      <GunyagunyaContainer>
        <GunyagunyaImage src={GunyagunyaText} alt="Squishy" />
      </GunyagunyaContainer>
    </WordAnimationBackground>
  );
}

export default Gunyagunya;
