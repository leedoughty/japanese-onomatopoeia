import styled, { keyframes } from "styled-components";
import "../App.css";

function Dokidoki() {
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
    animation: ${Heartbeat} 0.4s ease infinite;
    font-size: 80px;
  `;

  return (
    <div>
      <HeartbeatAnimation>ドキドキ</HeartbeatAnimation>
    </div>
  );
}

export default Dokidoki;
