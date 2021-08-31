import React from "react";
import styled from "styled-components";
import WordAnimationBackground from "./WordAnimationBackground";
import WordAnimationContainer from "./WordAnimationContainer";

const KatakataText = styled.p`
  --typingSpeed: 3s;

  font-size: 80px;
  position: relative;
  width: max-content;

  @media (max-width: 768px) {
    font-size: 40px;
  }

  &:before,
  &:after {
    position: absolute;
    content: "";
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }

  &:before {
    background: #f5f3ef;
    animation: typing var(--typingSpeed) steps(12) 1s forwards;
  }

  &:after {
    width: 0.125em;
    background: rgb(150, 150, 150);
    animation: typing var(--typingSpeed) steps(12) 1s forwards, blink 500ms steps(12) infinite;
  }

  @keyframes typing {
    to {
      left: 100%;
    }
  }

  @keyframes blink {
    to {
      background: transparent;
    }
  }
`;

function Katakata() {
  return (
    <WordAnimationBackground navBarColour="black">
      <WordAnimationContainer>
        <KatakataText>カタカタカタカタカタカタ</KatakataText>
      </WordAnimationContainer>
    </WordAnimationBackground>
  );
}

export default Katakata;
