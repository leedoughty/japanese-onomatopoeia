import React from "react";
import styled from "styled-components";
import GunyagunyaText from "./images/squishy.svg";

const GunyagunyaContainer = styled.div`
  margin: 10px 0 10px 0;
  background-color: #f1c410;
  width: 90vw;
  height: 50vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const GunyagunyaImage = styled.img`
  width: 400px;
  height: auto;
`;

function Gunyagunya() {
  return (
    <GunyagunyaContainer>
      <GunyagunyaImage src={GunyagunyaText} alt="Squishy" />
    </GunyagunyaContainer>
  );
}

export default Gunyagunya;
