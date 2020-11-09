import styled, { keyframes } from "styled-components";

function Gurarigurari() {
  const Shaking = keyframes`
    0% { transform: translate(2px, 1px) rotate(0deg); }
    10% { transform: translate(-1px, -2px) rotate(-1deg); }
    20% { transform: translate(-3px, 0px) rotate(1deg); }
    30% { transform: translate(0px, 2px) rotate(0deg); }
    40% { transform: translate(1px, -1px) rotate(1deg); }
    50% { transform: translate(-1px, 2px) rotate(-1deg); }
    60% { transform: translate(-3px, 1px) rotate(0deg); }
    70% { transform: translate(2px, 1px) rotate(-1deg); }
    80% { transform: translate(-1px, -1px) rotate(1deg); }
    90% { transform: translate(2px, 2px) rotate(0deg); }
    100% { transform: translate(1px, -2px) rotate(-1deg); }
  `;

  const ShakingAnimation = styled.h1`
    font-size: 80px;
    animation: ${Shaking} 0.8s linear infinite;
  `;

  return (
    <div>
      <ShakingAnimation>ぐらりぐらり</ShakingAnimation>
    </div>
  );
}

export default Gurarigurari;
