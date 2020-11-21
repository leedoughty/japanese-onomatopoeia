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
    color: ${(props) => props.color};
  `;

  return (
    <BarabaraContainer aria-hidden="true">
      <BarabaraText color="#248cd8" x={generateX()} y={generateY()}>
        バ
      </BarabaraText>
      <BarabaraText color="#e6412e" x={generateX()} y={generateY()}>
        ラ
      </BarabaraText>
      <BarabaraText color="#e37203" x={generateX()} y={generateY()}>
        バ
      </BarabaraText>
      <BarabaraText color="#f0bd00" x={generateX()} y={generateY()}>
        ラ
      </BarabaraText>
    </BarabaraContainer>
  );
}

export default Barabara;
