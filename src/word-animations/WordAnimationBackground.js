import React from "react";
import styled from "styled-components";
import NavBar from "../NavBar";

const WordPageContainer = styled.div`
  width: 100vw;
  height: 100vh;
`;

function WordAnimationBackground({ children, ...props }) {
  const WordContainer = styled.div`
    background-color: ${props.backgroundColour};
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
  `;

  return (
    <WordPageContainer>
      <NavBar navBarColour={props.navBarColour} />
      <WordContainer>{children}</WordContainer>
    </WordPageContainer>
  );
}

export default WordAnimationBackground;
