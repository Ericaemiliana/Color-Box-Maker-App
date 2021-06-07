import React, { useState } from "react";
import { v4 as uuid } from "uuid";
import Box from "./Box";
import NewBoxForm from "./NewBoxForm";
import Grid from "@material-ui/core/Grid";

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
    <Grid item xs={6} sm={2}>
      <Box p={2}>
        <Box
          key={box.id}
          id={box.id}
          width={box.width}
          heigh={box.height}
          handleRemove={removeBox}
          backgroundColor={box.backgroundColor}
        />
      </Box>
    </Grid>
  ));

  return (
    <div>
      <h3>Create a Box</h3>
      <NewBoxForm createBox={add} />
      <Grid container spacing={1}>
        {boxComponents}
      </Grid>
    </div>
  );
};

export default BoxList;
