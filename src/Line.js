import React from "react";

function Line({ colour, width }) {
  return (
    <>
      <hr
        style={{
          color: colour,
          backgroundColor: colour,
          width: width,
          height: "1px",
        }}
      />
    </>
  );
}

export default Line;
