import styled from "styled-components";

const BarabaraContainer = styled.div`
  margin: 10px 0 10px 0;
  width: 90vw;
  height: 50vh;
`;

function Barabara() {
  function generateX() {
    return Math.floor(Math.random() * 60);
  }

  function generateY() {
    return Math.floor(Math.random() * 100);
  }

  const BarabaraText = styled.p`
    top: 20%;
    position: absolute;
    left: ${(props) => props.pos}%;
    font-size: 100px;
    transform: translate(${(props) => props.x}px, ${(props) => props.y}px);
    color: ${(props) => props.color};
  `;

  return (
    <BarabaraContainer aria-hidden="true">
      <BarabaraText color="#248cd8" x={generateX()} y={generateY()} pos={10}>
        バ
      </BarabaraText>
      <BarabaraText color="#e6412e" x={generateX()} y={generateY()} pos={30}>
        ラ
      </BarabaraText>
      <BarabaraText color="#e37203" x={generateX()} y={generateY()} pos={50}>
        バ
      </BarabaraText>
      <BarabaraText color="#f0bd00" x={generateX()} y={generateY()} pos={70}>
        ラ
      </BarabaraText>
    </BarabaraContainer>
  );
}

export default Barabara;
