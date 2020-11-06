import styled, { keyframes } from "styled-components";
import "../App.css";

function Gurarigurari() {
  const Spin = keyframes`
    0% {
      transform: rotateY(0deg);
    }
    100% {
      transform: rotateY(360deg);
    }
  `;

  const SpinningAnimation = styled.p`
    font-size: 100px;
    animation: ${Spin} 1s linear infinite;
  `;
  return (
    <div>
      <SpinningAnimation>くるくる</SpinningAnimation>
    </div>
  );
}

export default Gurarigurari;
