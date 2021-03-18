import styled, { keyframes } from "styled-components";
import WordAnimationBackground from "./WordAnimationBackground";
import WordAnimationContainer from "./WordAnimationContainer";

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

function Fuwafuwa() {
  return (
    <WordAnimationBackground
      backgroundColour="rgb(200, 200, 200)"
      navBarColour="white"
    >
      <WordAnimationContainer>
        <FloatingAnimation>ふわふわ</FloatingAnimation>
      </WordAnimationContainer>
    </WordAnimationBackground>
  );
}

export default Fuwafuwa;
