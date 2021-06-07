import React, { useState } from "react";
import uuid from "uuid/v4";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Box from "@material-ui/core/Box";

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

const NewBoxForm = ({ createBox }) => {
  const INITIAL_STATE = {
    width: "",
    height: "",
    backgroundColor: "",
  };

  const classes = useStyles();

  const [formData, setFormData] = useState(INITIAL_STATE);

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

        <div>
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
    </Box>
  );
};

export default NewBoxForm;
