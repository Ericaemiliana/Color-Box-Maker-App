import React from "react";

const Box = ({ id, width, height, backgroundColor }) => {
  return (
    <div>
      <div
        style={{
          width: `${width}em`,
          height: `${height}em`,
          backgroundColor: { backgroundColor },
        }}
      />
      <button>X</button>
    </div>
  );
};

export default Box;
