import React, { useEffect, useRef } from "react";
import styled, { keyframes } from "styled-components";
import { TweenMax, Power3 } from "gsap";

const UrouroContainer = styled.div`
  margin: 10px 0 10px 0;
  background-color: #2f2f2f;
  width: 90vw;
  height: 50vh;
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
    <UrouroContainer>
      <UrouroText ref={(el) => (firstUro = el)}>うろ</UrouroText>
      <UrouroText ref={(el) => (secondUro = el)}>うろ</UrouroText>
    </UrouroContainer>
  );
}

export default Urouro;
