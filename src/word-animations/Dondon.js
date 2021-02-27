import React from "react";
import styled from "styled-components";
import WordAnimationBackground from "./WordAnimationBackground";

const DondonContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const DondonText = styled.p`
  font-size: 80px;
  @media (max-width: 768px) {
    font-size: 40px;
  }
`;

function Dondon() {
  return (
    <WordAnimationBackground navBarColour="black">
      <DondonContainer>
        <DondonText>ドンドン</DondonText>
        <DondonText>ドンドン</DondonText>
        <DondonText>ドンドン</DondonText>
        <DondonText>ドンドン</DondonText>
      </DondonContainer>
    </WordAnimationBackground>
  );
}

export default Dondon;
