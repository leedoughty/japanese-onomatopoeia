import styled, { keyframes } from "styled-components";
import WordAnimationBackground from "./WordAnimationBackground";
import WordAnimationContainer from "./WordAnimationContainer";

const Spin = keyframes`
  0% {
    transform: rotateY(0deg);
  }
  100% {
    transform: rotateY(360deg);
  }
`;

const SpinningAnimation = styled.p`
  font-size: 80px;
  animation: ${Spin} 3s linear infinite;
  color: #fdfdfd;
`;

function Kurukuru() {
  return (
    <WordAnimationBackground backgroundColour="#2f2f2f" navBarColour="white">
      <WordAnimationContainer>
        <SpinningAnimation>く</SpinningAnimation>
        <SpinningAnimation>る</SpinningAnimation>
        <SpinningAnimation>く</SpinningAnimation>
        <SpinningAnimation>る</SpinningAnimation>
      </WordAnimationContainer>
    </WordAnimationBackground>
  );
}

export default Kurukuru;
