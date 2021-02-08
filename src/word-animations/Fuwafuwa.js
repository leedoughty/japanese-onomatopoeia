import styled, { keyframes } from "styled-components";

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

const FuwafuwaContainer = styled.div`
  margin: 10px 0 10px 0;
  width: 90vw;
  height: 50vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgb(200, 200, 200);
`;

function Fuwafuwa() {
  return (
    <FuwafuwaContainer>
      <FloatingAnimation>ふわふわ</FloatingAnimation>
    </FuwafuwaContainer>
  );
}

export default Fuwafuwa;
