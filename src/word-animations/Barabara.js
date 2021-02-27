import styled from "styled-components";
import Draggable from "react-draggable";
import WordAnimationBackground from "./WordAnimationBackground";

const BarabaraContainer = styled.div`
  width: 100vw;
  height: 60vh;
`;

const BarabaraText = styled.p`
  top: 20%;
  position: absolute;
  left: ${(props) => props.pos}%;
  font-size: 100px;
  color: ${(props) => props.color};
  cursor: grab;
  :active {
    cursor: grabbing;
  }
`;

function Barabara() {
  function generateY() {
    return Math.floor(Math.random() * 150);
  }

  return (
    <WordAnimationBackground
      backgroundColor="rgb(245, 243, 240)"
      navBarColour="#248cd8"
    >
      <BarabaraContainer aria-hidden="true">
        <Draggable defaultPosition={{ x: 0, y: generateY() }}>
          <BarabaraText color="#248cd8" pos={10}>
            バ
          </BarabaraText>
        </Draggable>
        <Draggable defaultPosition={{ x: 0, y: generateY() }}>
          <BarabaraText color="#e6412e" pos={30}>
            ラ
          </BarabaraText>
        </Draggable>
        <Draggable defaultPosition={{ x: 0, y: generateY() }}>
          <BarabaraText color="#e37203" pos={50}>
            バ
          </BarabaraText>
        </Draggable>
        <Draggable defaultPosition={{ x: 0, y: generateY() }}>
          <BarabaraText color="#f0bd00" pos={70}>
            ラ
          </BarabaraText>
        </Draggable>
      </BarabaraContainer>
    </WordAnimationBackground>
  );
}

export default Barabara;
