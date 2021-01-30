import React, { useEffect, useRef } from "react";
import styled, { keyframes } from "styled-components";
import { TweenMax, Power3 } from "gsap";

const UrouroContainer = styled.div`
  margin: 10px 0 10px 0;
  background-color: #2f2f2f;
  width: 90vw;
  height: 70vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const UrouroText = styled.p`
  font-size: 80px;
  color: #fdfdfd;
`;

function Urouro() {
  let firstUro = useRef(null);
  let secondUro = useRef(null);

  useEffect(() => {
    TweenMax.from(firstUro, 0.8, { opacity: 0, x: 40, ease: Power3.easeOut });
    TweenMax.from(secondUro, 0.8, { opacity: 0, x: 40, ease: Power3.easeOut });
  }, []);

  return (
    <UrouroContainer>
      <UrouroText ref={(el) => (firstUro = el)}>うろ</UrouroText>
      <UrouroText ref={(el) => (secondUro = el)}>うろ</UrouroText>
    </UrouroContainer>
  );
}

export default Urouro;
