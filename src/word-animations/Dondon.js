import React from "react";
import styled from "styled-components";
import WordAnimationBackground from "./WordAnimationBackground";
import WordAnimationContainer from "./WordAnimationContainer";

const DondonText = styled.p`
  font-size: 80px;
  @media (max-width: 768px) {
    font-size: 40px;
  }
`;

function Dondon() {
  return (
    <WordAnimationBackground navBarColour="black">
      <WordAnimationContainer>
        <DondonText>ドンドン</DondonText>
        <DondonText>ドンドン</DondonText>
        <DondonText>ドンドン</DondonText>
        <DondonText>ドンドン</DondonText>
      </WordAnimationContainer>
    </WordAnimationBackground>
  );
}

export default Dondon;
