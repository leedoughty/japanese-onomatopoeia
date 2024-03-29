import React from "react";
import styled from "styled-components";
import WordAnimationBackground from "./WordAnimationBackground";

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
    color: #f1c410;
    font-size: 20px;
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
    animation-delay: 0.5s;
  }
  div:nth-child(3) {
    animation-delay: 1s;
  }
  div:nth-child(4) {
    animation-delay: 1.5s;
  }
`;

function Pakupaku() {
  return (
    <WordAnimationBackground backgroundColour="#2f2f2f" navBarColour="white">
      <Container aria-hidden="true">
        <Mouth>
          <One></One>
          <Two></Two>
        </Mouth>
        <Food>
          <div>パ</div>
          <div>ク</div>
          <div>パ</div>
          <div>ク</div>
        </Food>
      </Container>
    </WordAnimationBackground>
  );
}

export default Pakupaku;
