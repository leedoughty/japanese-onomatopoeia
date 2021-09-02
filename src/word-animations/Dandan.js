import React from "react";
import styled from "styled-components";
import WordAnimationBackground from "./WordAnimationBackground";
import WordAnimationContainer from "./WordAnimationContainer";

const DandanText = styled.p`
  font-size: 40px;
  position: absolute;
  bottom: 10px;
  left: 0;
  width: 200px;
  height: 60px;
  border-radius: 50%;
  animation: bounce 8s infinite;
  animation-timing-function: ease;

  @keyframes bounce {
    0% {
      transform: translate(0, 0);
    }
    5% {
      transform: translate(80px, -140px);
    }
    10% {
      transform: translate(150px, -100px);
    }
    17% {
      transform: translate(230px, -240px);
    }
    20% {
      transform: translate(300px, -200px);
    }
    27% {
      transform: translate(380px, -340px);
    }
    30% {
      transform: translate(450px, -300px);
    }
    37% {
      transform: translate(530px, -440px);
    }
    40% {
      transform: translate(600px, -400px);
    }
    50% {
      transform: translate(600px, 0);
    }
    57% {
      transform: translate(530px, -140px);
    }
    60% {
      transform: translate(450px, -100px);
    }
    67% {
      transform: translate(370px, -240px);
    }
    70% {
      transform: translate(300px, -200px);
    }
    77% {
      transform: translate(220px, -340px);
    }
    80% {
      transform: translate(150px, -300px);
    }
    87% {
      transform: translate(70px, -440px);
    }
    90% {
      transform: translate(0, -400px);
    }
    100% {
      transform: translate(0, 0);
    }
  }
`;

const SecondDandanText = styled.p`
  font-size: 40px;
  position: absolute;
  bottom: 10px;
  width: 200px;
  height: 60px;
  animation: bounce 8s infinite;
  animation-timing-function: ease;

  @keyframes bounce {
    0% {
      transform: translate(0, 0);
    }
    5% {
      transform: translate(80px, -140px);
    }
    10% {
      transform: translate(150px, -100px);
    }
    17% {
      transform: translate(230px, -240px);
    }
    20% {
      transform: translate(300px, -200px);
    }
    27% {
      transform: translate(380px, -340px);
    }
    30% {
      transform: translate(450px, -300px);
    }
    37% {
      transform: translate(530px, -440px);
    }
    40% {
      transform: translate(600px, -400px);
    }
    50% {
      transform: translate(600px, 0);
    }
    57% {
      transform: translate(530px, -140px);
    }
    60% {
      transform: translate(450px, -100px);
    }
    67% {
      transform: translate(370px, -240px);
    }
    70% {
      transform: translate(300px, -200px);
    }
    77% {
      transform: translate(220px, -340px);
    }
    80% {
      transform: translate(150px, -300px);
    }
    87% {
      transform: translate(70px, -440px);
    }
    90% {
      transform: translate(0, -400px);
    }
    100% {
      transform: translate(0, 0);
    }
  }
`;

function Dandan() {
  return (
    <WordAnimationBackground navBarColour="black">
      <WordAnimationContainer>
        <DandanText>だん</DandanText>
        <SecondDandanText>だん</SecondDandanText>
      </WordAnimationContainer>
    </WordAnimationBackground>
  );
}

export default Dandan;
