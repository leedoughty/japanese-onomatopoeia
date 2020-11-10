import styled, { keyframes } from "styled-components";

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
    text-align: center;
    animation: ${Heartbeat} 0.4s ease infinite;
    font-size: 50px;
    color: white;
  `;

  const DokidokiContainer = styled.div`
    margin: 10px 0 10px 0;
    border: 1px solid red;
    background-color: #e74c3c;
    width: 90vw;
    height: 50vh;
    display: flex;
    align-items: center;
    justify-content: center;
  `;

  return (
    <DokidokiContainer>
      <HeartbeatAnimation>ドキドキ</HeartbeatAnimation>
    </DokidokiContainer>
  );
}

export default Dokidoki;
