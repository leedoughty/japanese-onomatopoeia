import styled, { keyframes } from "styled-components";

const Spin = keyframes`
  0% {
    transform: rotateY(0deg);
  }
  100% {
    transform: rotateY(360deg);
  }
`;

const SpinningAnimation = styled.p`
  font-size: 80px;
  animation: ${Spin} 3s linear infinite;
  color: #fdfdfd;
`;

const KurukuruContainer = styled.div`
  margin: 10px 0 10px 0;
  background-color: #2f2f2f;
  width: 90vw;
  height: 50vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

function Kurukuru() {
  return (
    <KurukuruContainer>
      <SpinningAnimation>く</SpinningAnimation>
      <SpinningAnimation>る</SpinningAnimation>
      <SpinningAnimation>く</SpinningAnimation>
      <SpinningAnimation>る</SpinningAnimation>
    </KurukuruContainer>
  );
}

export default Kurukuru;
