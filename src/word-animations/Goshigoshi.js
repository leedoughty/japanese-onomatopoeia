import React, { useRef, useState, useEffect } from "react";
import styled from "styled-components";
import NavBar from "../NavBar";
import WordAnimationContainer from "./WordAnimationContainer";

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
    canvas.style.width = `75%`;
    canvas.style.height = `30%`;
    canvas.width = canvas.clientWidth;
    canvas.height = canvas.clientHeight;

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
    contextRef.current.moveTo(
      offsetX ?? nativeEvent.touches[0].pageX - canvasRef.current.offsetLeft,
      offsetY ?? nativeEvent.touches[0].pageY - canvasRef.current.offsetTop
    );
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
    contextRef.current.lineTo(
      offsetX ?? nativeEvent.touches[0].pageX - canvasRef.current.offsetLeft,
      offsetY ?? nativeEvent.touches[0].pageY - canvasRef.current.offsetTop
    );
    contextRef.current.stroke();
  };

  return (
    <>
      <NavBar navBarColour="black" />
      <WordAnimationContainer>
        <GoshigoshiText>ゴシゴシ</GoshigoshiText>
        <canvas
          style={{
            position: "absolute",
            margin: "10px 0 10px 0",
            overflow: "hidden",
            touchAction: "none",
          }}
          onMouseDown={startDrawing}
          onMouseUp={finishDrawing}
          onMouseMove={draw}
          onTouchStart={startDrawing}
          onTouchEnd={finishDrawing}
          onTouchMove={draw}
          ref={canvasRef}
        ></canvas>
      </WordAnimationContainer>
    </>
  );
}

export default Goshigoshi;
