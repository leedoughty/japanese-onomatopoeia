import React from "react";
import styled from "styled-components";
import WordAnimationBackground from "./WordAnimationBackground";

const KirakiraContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const KirakiraText = styled.h1`
  font-size: 60px;
`;

const Sparkles = styled.span`
  font-size: 100px;
  width: 50%;
  text-align: center;
  position: absolute;
  color: #ffc600;
`;

function Kirakira() {
  return (
    <WordAnimationBackground navBarColour="black">
      <KirakiraContainer>
        <KirakiraText>きらきら</KirakiraText>
        <Sparkles aria-hidden="true">✧･ﾟ: *✧･ﾟ:*:･ﾟ✧*:･ﾟ✧･ﾟ:</Sparkles>
      </KirakiraContainer>
    </WordAnimationBackground>
  );
}

export default Kirakira;
