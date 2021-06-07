import React, { useState } from "react";
import { v4 as uuid } from "uuid";
import Box from "./Box";
import NewBoxForm from "./NewBoxForm";

const BoxList = () => {
  /*const INITIAL_STATE = [
    { id: uuid(), width: "12", height: "12", backgroundColor: "pink" },
  ];*/
  const [boxes, setBoxes] = useState([]);

  const add = (newBox) => {
    setBoxes((boxes) => [...boxes, { ...newBox, id: uuid() }]);
  };

  const removeBox = (id) => {
    setBoxes((boxes) => boxes.filter((box) => box.id !== id));
  };

  const boxComponents = boxes.map((box) => (
    <Box
      key={box.id}
      id={box.id}
      width={box.width}
      heigh={box.height}
      handleRemove={removeBox}
      backgroundColor={box.backgroundColor}
    />
  ));

  return (
    <div>
      <h3>My Boxes</h3>
      <NewBoxForm createBox={add} />
      {boxComponents}
    </div>
  );
};

export default BoxList;
