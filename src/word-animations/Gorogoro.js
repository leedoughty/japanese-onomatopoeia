import React from "react";
import styled, { keyframes } from "styled-components";

const GorogoroContainer = styled.div`
  margin: 10px 0 10px 0;
  background-color: #2f2f2f;
  width: 90vw;
  height: 50vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const GorogoroMovement = keyframes`
  0% { transform: translate(1px, 1px) rotate(0deg); }
  10% { transform: translate(-1px, -1px) rotate(-3deg); }
  20% { transform: translate(-2px, 0px) rotate(3deg); }
  30% { transform: translate(0px, 2px) rotate(0deg); }
  40% { transform: translate(1px, -1px) rotate(3deg); }
  50% { transform: translate(-1px, 2px) rotate(-3deg); }
  60% { transform: translate(-2px, 1px) rotate(0deg); }
  70% { transform: translate(1px, 1px) rotate(-3deg); }
  80% { transform: translate(-1px, -1px) rotate(3deg); }
  90% { transform: translate(2px, 1px) rotate(0deg); }
  100% { transform: translate(1px, -1px) rotate(-3deg); }
`;

const GorogoroAnimation = styled.h1`
  color: #fdfdfd;
  font-size: 60px;
  animation: ${GorogoroMovement} 1s linear infinite;
`;

function Gorogoro() {
  return (
    <GorogoroContainer>
      <GorogoroAnimation>ゴ</GorogoroAnimation>
      <GorogoroAnimation>ロ</GorogoroAnimation>
      <GorogoroAnimation>ゴ</GorogoroAnimation>
      <GorogoroAnimation>ロ</GorogoroAnimation>
    </GorogoroContainer>
  );
}

export default Gorogoro;
