import React, { useState, useEffect } from "react";
import styled from "styled-components";
import WordAnimationBackground from "./WordAnimationBackground";
import WordAnimationContainer from "./WordAnimationContainer";

const DondonText = styled.p`
  font-size: 80px;
  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

function Dondon() {
  const [text, setText] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      setText((text) => {
        return text + "ドン";
      });
    }, 800);
    return () => clearInterval(interval);
  }, []);

  return (
    <WordAnimationBackground navBarColour="black">
      <WordAnimationContainer aria-hidden="true">
        <DondonText>{text}</DondonText>
      </WordAnimationContainer>
    </WordAnimationBackground>
  );
}

export default Dondon;
