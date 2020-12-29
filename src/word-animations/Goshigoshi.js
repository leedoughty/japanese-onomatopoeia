import React, { useRef, useState, useEffect } from "react";
import styled from "styled-components";

const GoshigoshiContainer = styled.div`
  margin: 10px 0 10px 0;
  width: 90vw;
  height: 50vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const GoshigoshiText = styled.h1`
  text-align: center;
  font-size: 100px;
  @media (max-width: 768px) {
    font-size: 50px;
  }
`;

function Goshigoshi() {
  const canvasRef = useRef(null);
  const contextRef = useRef(null);
  const [isDrawing, setIsDrawing] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    canvas.width = 600;
    canvas.height = 200;
    canvas.style.width = `600px`;
    canvas.style.height = `200px`;

    const context = canvas.getContext("2d");
    context.fillStyle = "rgb(200,200,200)";
    context.fillRect(0, 0, 1000, 300);
    context.lineCap = "round";
    context.globalCompositeOperation = "destination-out";
    context.lineWidth = 40;
    contextRef.current = context;
  }, []);

  const startDrawing = ({ nativeEvent }) => {
    const { offsetX, offsetY } = nativeEvent;
    contextRef.current.beginPath();
    contextRef.current.moveTo(offsetX, offsetY);
    setIsDrawing(true);
  };

  const finishDrawing = () => {
    contextRef.current.closePath();
    setIsDrawing(false);
  };

  const draw = ({ nativeEvent }) => {
    if (!isDrawing) {
      return;
    }
    const { offsetX, offsetY } = nativeEvent;
    contextRef.current.lineTo(offsetX, offsetY);
    contextRef.current.stroke();
  };

  return (
    <GoshigoshiContainer>
      <GoshigoshiText>ゴシゴシ</GoshigoshiText>
      <canvas
        style={{
          position: "absolute",
          margin: "10px 0 10px 0",
          overflow: "hidden",
        }}
        onMouseDown={startDrawing}
        onMouseUp={finishDrawing}
        onMouseMove={draw}
        ref={canvasRef}
      ></canvas>
    </GoshigoshiContainer>
  );
}

export default Goshigoshi;
