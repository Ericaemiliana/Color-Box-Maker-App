import React, { useState } from "react";
import uuid from "uuid/v4";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Box from "@material-ui/core/Box";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";

import { ColorPicker, createColor } from "material-ui-color";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
  },
  textField: {
    marginLeft: theme.spacing(5),
    marginRight: theme.spacing(5),
    width: "25ch",
  },
}));

const theme = createMuiTheme({
  palette: {},
});

const NewBoxForm = ({ createBox }) => {
  const INITIAL_STATE = {
    width: "",
    height: "",
    backgroundColor: "",
    //#A0E7E5
  };

  const classes = useStyles();
  const [color, setColor] = useState(createColor("#000"));
  const [formData, setFormData] = useState(INITIAL_STATE);

  const handleChangeColor = (value) => {
    console.log("onChange=", value);
    setColor(value);
  };

  const handleChange = (e) => {
    console.log(e.target);
    const { name, value } = e.target;
    console.log(name);
    console.log(value);
    setFormData((formData) => ({
      ...formData,

      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createBox({ ...formData, id: uuid() });
    setFormData(INITIAL_STATE);
    console.log(formData);
  };

  return (
    <Box justifyContent="center">
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="width"> Width: </label>
          <TextField
            id="width"
            type="text"
            name="width"
            placeholder=" Box width"
            value={formData.width}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="height">Height: </label>
          <TextField
            id="height"
            type="text"
            name="height"
            placeholder=" Box height"
            value={formData.height}
            onChange={handleChange}
          />
        </div>

        {/**<div>
          <div>
            <label htmlFor="backgroundColor">Color: </label>
            <TextField
              id="backgroundColor"
              type="text"
              placeholder="Box color"
              onChange={handleChange}
              name="backgroundColor"
              value={formData.backgroundColor}
            />
          </div>
        </div>**/}

        <div>
          <label htmlFor="backgroundColor">Color: </label>
          <ColorPicker
            //value={color}
            onChange={handleChange}
            id="backgroundColor"
            //onChange={handleChange}
            name="backgroundColor"
            //value={formData.backgroundColor}
          />
        </div>

        <Button
          variant="contained"
          color="secondary"
          href="#contained-buttons"
          onClick={handleSubmit}
        >
          Add Box
        </Button>
      </form>
      <div>
        <ColorPicker value={color} onChange={handleChangeColor} />
      </div>
    </Box>
  );
};

export default NewBoxForm;
