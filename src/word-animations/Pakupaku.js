import React from "react";
import styled from "styled-components";
import WordAnimationBackground from "./WordAnimationBackground";
import WordAnimationContainer from "./WordAnimationContainer";

const PakupakuText = styled.p`
  font-size: 80px;
  @media (max-width: 768px) {
    font-size: 40px;
  }
`;

const Container = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const Mouth = styled.div`
  float: left;
`;

const One = styled.div`
  border: 30px solid #f1c410;
  border-radius: 50%;
  position: relative;
  top: -30px;
  border-bottom: 30px solid transparent;
  border-left: 30px solid transparent;
  transform: rotate(-45deg);
  animation: moveone 0.66s infinite;

  @keyframes moveone {
    0%,
    100% {
      transform: rotate(-45deg);
    }
    50% {
      transform: rotate(-90deg);
    }
  }
`;

const Two = styled.div`
  transform: rotate(45deg);
  border: 30px solid #f1c410;
  border-radius: 50%;
  top: -90px;
  position: relative;
  border-top: 30px solid transparent;
  border-left: 30px solid transparent;
  animation: movetwo 0.66s infinite;

  @keyframes movetwo {
    0%,
    100% {
      transform: rotate(45deg);
    }
    50% {
      transform: rotate(90deg);
    }
  }
`;

const Food = styled.div`
  float: left;

  div {
    position: absolute;
    height: 20px;
    width: 20px;
    top: -10px;
    left: 200px;
    border-radius: 50%;
    background: #f1c410;
    animation: movefood 2s linear infinite;
  }

  @keyframes movefood {
    0% {
      left: 200px;
    }
    100% {
      left: 0px;
    }
  }

  div:nth-child(1) {
    animation-delay: 0s;
  }
  div:nth-child(2) {
    animation-delay: 0.66s;
  }
  div:nth-child(3) {
    animation-delay: 1.33s;
  }
  div:nth-child(4) {
    animation-delay: 2s;
  }
`;

function Pakupaku() {
  return (
    <WordAnimationBackground backgroundColour="#2f2f2f" navBarColour="white">
      <Container>
        <Mouth>
          <One></One>
          <Two></Two>
        </Mouth>
        <Food>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </Food>
      </Container>
    </WordAnimationBackground>
  );
}

export default Pakupaku;
