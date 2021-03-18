import React from "react";
import styled from "styled-components";
import WordAnimationBackground from "./WordAnimationBackground";
import WordAnimationContainer from "./WordAnimationContainer";

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
      <WordAnimationContainer>
        <KirakiraText>きらきら</KirakiraText>
        <Sparkles aria-hidden="true">✧･ﾟ: *✧･ﾟ:*:･ﾟ✧*:･ﾟ✧･ﾟ:</Sparkles>
      </WordAnimationContainer>
    </WordAnimationBackground>
  );
}

export default Kirakira;
