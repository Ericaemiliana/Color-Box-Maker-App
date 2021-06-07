import React from "react";

const Box = ({
  id,
  width = 4,
  height = 4,
  backgroundColor = "yellow",
  handleRemove,
}) => {
  const remove = () => handleRemove(id);

  return (
    <div>
      <div
        style={{
          width: `${width}em`,
          height: `${height}em`,
          backgroundColor,
        }}
      />
      <button onClick={remove}>X</button>
    </div>
  );
};

export default Box;
