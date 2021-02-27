import styled, { keyframes } from "styled-components";
import WordAnimationBackground from "./WordAnimationBackground";

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

const KurukuruContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

function Kurukuru() {
  return (
    <WordAnimationBackground backgroundColour="#2f2f2f" navBarColour="white">
      <KurukuruContainer>
        <SpinningAnimation>く</SpinningAnimation>
        <SpinningAnimation>る</SpinningAnimation>
        <SpinningAnimation>く</SpinningAnimation>
        <SpinningAnimation>る</SpinningAnimation>
      </KurukuruContainer>
    </WordAnimationBackground>
  );
}

export default Kurukuru;
