import styled, { keyframes } from "styled-components";
import WordAnimationBackground from "./WordAnimationBackground";

const Heartbeat = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(2);
  }
  100% {
    transform: scale(1);
  }
`;

const HeartbeatAnimation = styled.p`
  text-align: center;
  animation: ${Heartbeat} 0.4s ease infinite;
  font-size: 50px;
  color: white;
`;

const DokidokiContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

function Dokidoki() {
  return (
    <WordAnimationBackground backgroundColour="#e74c3c" navBarColour="white">
      <DokidokiContainer>
        <HeartbeatAnimation>ドキドキ</HeartbeatAnimation>
      </DokidokiContainer>
    </WordAnimationBackground>
  );
}

export default Dokidoki;
