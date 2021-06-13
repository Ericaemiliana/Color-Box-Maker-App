import React, { useState } from "react";
import { useFormik } from "formik";
import * as yup from "yup";
//import { Formik, Field } from "formik";

import uuid from "uuid/v4";
//import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Box from "@material-ui/core/Box";
//import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";

import { ColorPicker, createColor } from "material-ui-color";

/*const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
  },
  textField: {
    marginLeft: theme.spacing(5),
    marginRight: theme.spacing(5),
    width: "25ch",
  },
}));*/

/*const theme = createMuiTheme({
  palette: {},
});*/

const validationSchema = yup.object({
  width: yup
    .string("Enter the Box Width")
    .min("Enter a valid number")
    .required("Width is required"),
  heigh: yup
    .string("Enter the Box heigh")
    .min(8, "Enter a valid number")
    .required("heigh is required"),
});

const NewBoxForm = ({ createBox }) => {
  const INITIAL_STATE = {
    width: "",
    height: "",
    backgroundColor: "",
    //#A0E7E5
  };

  const formik = useFormik({
    initialValues: {
      width: "",
      height: "",
      backgroundColor: "",
    },

    validationSchema: validationSchema,
  });

  //const classes = useStyles();
  const [color, setColor] = useState(createColor("#000"));
  const [formData, setFormData] = useState(INITIAL_STATE);

  const handleChangeColor = (value) => {
    console.log("onChange from handleChange Color=", value);
    console.log("printing value", value);
    let c = value.css.backgroundColor;
    setColor(c);
    console.log("color from state", c);
    console.log("changing color", c);
  };

  const handleChange = (e) => {
    console.log(e.target);
    const { name, value } = e.target;
    console.log(name);
    console.log(value);
    setFormData((formData) => ({
      ...formData,

      [name]: value,
      //backgroundColor: color,
    }));
    //console.log("printing data in formData", formData);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    formData.backgroundColor = color;
    console.log("backgroundColor", formData.backgroundColor);
    console.log(
      "form Data for new box ",
      formData.width,
      formData.height,
      formData.backgroundColor
    );
    createBox({ ...formData, id: uuid() });
    setFormData(INITIAL_STATE);
  };

  return (
    <Box justifyContent="center">
      <form onSubmit={formik.handleSubmit}>
        <div>
          <label htmlFor="width"> Width: </label>
          <TextField
            id="width"
            type="text"
            name="width"
            placeholder=" Box width"
            value={formData.width}
            onChange={handleChange}
            error={formik.touched.width && Boolean(formik.errors.width)}
            helperText={formik.touched.width && formik.errors.width}
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
          <label htmlFor="backgroundColor">Color: </label>
          <ColorPicker
            name="backgroundColor"
            id="backgroundColor"
            value={color}
            onChange={handleChangeColor}
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
    </Box>
  );
};

export default NewBoxForm;
