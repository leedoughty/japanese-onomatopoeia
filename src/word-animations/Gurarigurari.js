import styled, { keyframes } from "styled-components";
import WordAnimationBackground from "./WordAnimationBackground";

const Shaking = keyframes`
  0% { transform: translate(2px, 1px) rotate(0deg); }
  10% { transform: translate(-1px, -2px) rotate(-3deg); }
  20% { transform: translate(-3px, 0px) rotate(3deg); }
  30% { transform: translate(0px, 2px) rotate(0deg); }
  40% { transform: translate(1px, -1px) rotate(3deg); }
  50% { transform: translate(-1px, 2px) rotate(-3deg); }
  60% { transform: translate(-3px, 1px) rotate(0deg); }
  70% { transform: translate(2px, 1px) rotate(-3deg); }
  80% { transform: translate(-1px, -1px) rotate(3deg); }
  90% { transform: translate(2px, 2px) rotate(0deg); }
  100% { transform: translate(1px, -2px) rotate(-3deg); }
`;

const ShakingAnimation = styled.h1`
  color: #fdfdfd;
  font-size: 60px;
  animation: ${Shaking} 0.8s linear infinite;
  @media (prefers-reduced-motion: reduce) {
    animation: ${Shaking} 3s linear infinite;
  }
  @media (max-width: 768px) {
    font-size: 40px;
  }
`;

const GurarigurariContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

function Gurarigurari() {
  return (
    <WordAnimationBackground backgroundColour="#2f2f2f" navBarColour="white">
      <GurarigurariContainer>
        <ShakingAnimation>ぐらりぐらり</ShakingAnimation>
      </GurarigurariContainer>
    </WordAnimationBackground>
  );
}

export default Gurarigurari;
