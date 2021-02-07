import React from "react";
import styled from "styled-components";

const KirakiraContainer = styled.div`
  margin: 10px 0 10px 0;
  width: 90vw;
  height: 50vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const KirakiraText = styled.h1`
  font-size: 60px;
`;

const Sparkles = styled.span`
  font-size: 50px;
  position: absolute;
  color: #ffc600;
`;

function Kirakira() {
  return (
    <KirakiraContainer>
      <KirakiraText>きらきら</KirakiraText>
      <Sparkles aria-hidden="true">✧･ﾟ: *✧･ﾟ:*:･ﾟ✧*:･ﾟ✧･ﾟ:</Sparkles>
    </KirakiraContainer>
  );
}

export default Kirakira;
