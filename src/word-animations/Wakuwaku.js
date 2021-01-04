import React from "react";
import styled, { keyframes } from "styled-components";

const WakuwakuAnimation = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(1);
  }
`;

const WakuwakuContainer = styled.div`
  margin: 10px 0 10px 0;
  width: 90vw;
  height: 50vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const WakuwakuText = styled.h1`
  font-size: 60px;
  color: ${(props) => props.colour};
  animation: ${WakuwakuAnimation} 0.4s ease infinite;
  padding: 20px;
  @media (max-width: 768px) {
    font-size: 40px;
    padding: 15px;
  }
`;

function Wakuwaku() {
  return (
    <WakuwakuContainer>
      <WakuwakuText colour="rgb(230, 65, 46)">わ</WakuwakuText>
      <WakuwakuText colour="rgb(240, 189, 0)">く</WakuwakuText>
      <WakuwakuText colour="rgb(29, 200, 97)">わ</WakuwakuText>
      <WakuwakuText colour="rgb(37, 140, 216)">く</WakuwakuText>
    </WakuwakuContainer>
  );
}

export default Wakuwaku;
