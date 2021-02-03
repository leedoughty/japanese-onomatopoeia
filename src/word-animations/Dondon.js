import React from "react";
import styled from "styled-components";

const DondonContainer = styled.div`
  margin: 10px 0 10px 0;
  width: 90vw;
  height: 50vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const DondonText = styled.p`
  font-size: 80px;
  @media (max-width: 768px) {
    font-size: 40px;
  }
`;

function Dondon() {
  return (
    <DondonContainer>
      <DondonText>ドンドン</DondonText>
      <DondonText>ドンドン</DondonText>
      <DondonText>ドンドン</DondonText>
      <DondonText>ドンドン</DondonText>
    </DondonContainer>
  );
}

export default Dondon;
