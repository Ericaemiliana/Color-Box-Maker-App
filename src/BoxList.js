import React, { useState } from "react";
import { v4 as uuid } from "uuid";
import Box from "./Box";
import NewBoxForm from "./NewBoxForm";

const BoxList = () => {
  const INITIAL_STATE = [
    { id: uuid(), width: "12", height: "12", backgroundColor: "pink" },
  ];
  const [boxes, setBoxes] = useState(INITIAL_STATE);

  const addBox = (newBox) => {
    setBoxes((boxes) => [...boxes, { ...newBox, id: uuid() }]);
  };
  return (
    <div>
      <h3>My Boxes</h3>
      <NewBoxForm addBox={addBox} />
      <div>
        {boxes.map(({ id, width, height, backgroundColor }) => (
          <Box
            key={id}
            id={id}
            width={width}
            height={height}
            backgroundColor={backgroundColor}
          />
        ))}
      </div>
    </div>
  );
};

export default BoxList;
