import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { TweenMax } from "gsap";
import WordAnimationBackground from "./WordAnimationBackground";

const UrouroContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

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
      <UrouroContainer>
        <UrouroText ref={(el) => (firstUro = el)}>うろ</UrouroText>
        <UrouroText ref={(el) => (secondUro = el)}>うろ</UrouroText>
      </UrouroContainer>
    </WordAnimationBackground>
  );
}

export default Urouro;
