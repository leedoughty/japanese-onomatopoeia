import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { TweenMax } from "gsap";
import WordAnimationBackground from "./WordAnimationBackground";
import WordAnimationContainer from "./WordAnimationContainer";

const UrouroText = styled.p`
  font-size: 80px;
  color: #fdfdfd;
  @media (max-width: 768px) {
    font-size: 40px;
  }
`;

function Urouro() {
  let firstUro = useRef(null);
  let secondUro = useRef(null);

  function generateRandomLocation() {
    return Math.floor(Math.random() * 201) - 100;
  }

  useEffect(() => {
    TweenMax.fromTo(
      firstUro,
      1,
      { x: 0, y: 0 },
      { x: generateRandomLocation(), y: generateRandomLocation() }
    );
    TweenMax.fromTo(
      secondUro,
      1,
      { x: 0, y: 0 },
      { x: generateRandomLocation(), y: generateRandomLocation() }
    );
  }, []);

  return (
    <WordAnimationBackground backgroundColour="#2f2f2f" navBarColour="white">
      <WordAnimationContainer>
        <UrouroText ref={(el) => (firstUro = el)}>うろ</UrouroText>
        <UrouroText ref={(el) => (secondUro = el)}>うろ</UrouroText>
      </WordAnimationContainer>
    </WordAnimationBackground>
  );
}

export default Urouro;
