import React from "react";
import styled, { keyframes } from "styled-components";
import WordAnimationBackground from "./WordAnimationBackground";
import WordAnimationContainer from "./WordAnimationContainer";

const WakuwakuAnimation = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(1);
  }
`;

const WakuwakuText = styled.h1`
  font-size: 60px;
  color: ${(props) => props.colour};
  animation: ${WakuwakuAnimation} 0.4s ease infinite;
  padding: 20px;
  @media (max-width: 768px) {
    font-size: 40px;
    padding: 15px;
  }
`;

function Wakuwaku() {
  return (
    <WordAnimationBackground navBarColour="rgb(230, 65, 46)">
      <WordAnimationContainer>
        <WakuwakuText colour="rgb(230, 65, 46)">わ</WakuwakuText>
        <WakuwakuText colour="rgb(240, 189, 0)">く</WakuwakuText>
        <WakuwakuText colour="rgb(29, 200, 97)">わ</WakuwakuText>
        <WakuwakuText colour="rgb(37, 140, 216)">く</WakuwakuText>
      </WordAnimationContainer>
    </WordAnimationBackground>
  );
}

export default Wakuwaku;
