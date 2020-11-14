import styled, { keyframes } from "styled-components";

function Fuwafuwa() {
  const Floating = keyframes`
    50% {
      transform: translateY(20%);
    }
  `;

  const FloatingAnimation = styled.p`
    animation: ${Floating} 1.5s linear infinite;
    font-size: 80px;
    @media (prefers-reduced-motion: reduce) {
      animation: ${Floating} 0.5s ease-in infinite;
    }
  `;

  const FuwafuwaContainer = styled.div`
    margin: 10px 0 10px 0;
    width: 90vw;
    height: 50vh;
    display: flex;
    align-items: center;
    justify-content: center;
  `;

  return (
    <FuwafuwaContainer>
      <FloatingAnimation>ふわふわ</FloatingAnimation>
    </FuwafuwaContainer>
  );
}

export default Fuwafuwa;
