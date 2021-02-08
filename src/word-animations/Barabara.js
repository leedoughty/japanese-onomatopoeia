import styled from "styled-components";
import Draggable from "react-draggable";

const BarabaraContainer = styled.div`
  margin: 10px 0 10px 0;
  width: 90vw;
  height: 50vh;
  background-color: rgb(245, 243, 240);
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
  );
}

export default Barabara;
