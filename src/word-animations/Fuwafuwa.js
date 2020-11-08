import styled, { keyframes } from "styled-components";
import "../App.css";

function Fuwafuwa() {
  const Floating = keyframes`
    50% {
      transform: translateY(20%);
    }
  `;

  const FloatingAnimation = styled.p`
    animation: ${Floating} 1.5s linear infinite;
    font-size: 80px;
  `;

  return (
    <div>
      <FloatingAnimation>ふわふわ</FloatingAnimation>
    </div>
  );
}

export default Fuwafuwa;
