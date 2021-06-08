import styled, { keyframes } from "styled-components";
import WordAnimationBackground from "./WordAnimationBackground";
import WordAnimationContainer from "./WordAnimationContainer";

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
  font-family: "Hiragino Kaku Gothic Pro W6", Helvetica, sans-serif;
  text-align: center;
  animation: ${Heartbeat} 0.4s ease infinite;
  font-size: 50px;
  color: white;
`;

function Dokidoki() {
  return (
    <WordAnimationBackground backgroundColour="#e74c3c" navBarColour="white">
      <WordAnimationContainer>
        <HeartbeatAnimation>ドキドキ</HeartbeatAnimation>
      </WordAnimationContainer>
    </WordAnimationBackground>
  );
}

export default Dokidoki;
