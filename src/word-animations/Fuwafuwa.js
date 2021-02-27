import styled, { keyframes } from "styled-components";
import WordAnimationBackground from "./WordAnimationBackground";

const Floating = keyframes`
  50% {
    transform: translateY(20%);
  }
`;

const FloatingAnimation = styled.p`
  animation: ${Floating} 1.5s linear infinite;
  font-size: 80px;
  color: white;
  @media (prefers-reduced-motion: reduce) {
    animation: ${Floating} 0.5s ease-in infinite;
  }
`;

const FuwafuwaContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

function Fuwafuwa() {
  return (
    <WordAnimationBackground
      backgroundColour="rgb(200, 200, 200)"
      navBarColour="white"
    >
      <FuwafuwaContainer>
        <FloatingAnimation>ふわふわ</FloatingAnimation>
      </FuwafuwaContainer>
    </WordAnimationBackground>
  );
}

export default Fuwafuwa;
