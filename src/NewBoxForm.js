import React, { useState } from "react";
import uuid from "uuid/v4";

const NewBoxForm = ({ createBox }) => {
  const INITIAL_STATE = {
    width: "",
    height: "",
    backgroundColor: "",
  };

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
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="width"> Width</label>
          <input
            id="width"
            type="text"
            name="width"
            placeholder=" Box width"
            value={formData.width}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="height"> Height</label>
          <input
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
            <label htmlFor="backgroundColor">backgroundColor:</label>
            <input
              id="backgroundColor"
              type="text"
              onChange={handleChange}
              name="backgroundColor"
              value={formData.backgroundColor}
            />
          </div>
        </div>

        <button>Add Box</button>
      </form>
    </div>
  );
};

export default NewBoxForm;
