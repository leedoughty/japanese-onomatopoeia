import styled from "styled-components";

const BarabaraContainer = styled.div`
  margin: 10px 0 10px 0;
  border: 1px solid #2f2f2f;
  width: 90vw;
  height: 50vh;
`;

function Barabara() {
  function generateX() {
    return Math.floor(Math.random() * 400);
  }

  function generateY() {
    return Math.floor(Math.random() * 150);
  }

  const BarabaraText = styled.p`
    position: absolute;
    font-size: 100px;
    transform: translate(${(props) => props.x}px, ${(props) => props.y}px);
  `;
  return (
    <BarabaraContainer aria-hidden="true">
      <BarabaraText x={generateX()} y={generateY()}>
        バ
      </BarabaraText>
      <BarabaraText x={generateX()} y={generateY()}>
        ラ
      </BarabaraText>
      <BarabaraText x={generateX()} y={generateY()}>
        バ
      </BarabaraText>
      <BarabaraText x={generateX()} y={generateY()}>
        ラ
      </BarabaraText>
    </BarabaraContainer>
  );
}

export default Barabara;
