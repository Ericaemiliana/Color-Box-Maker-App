import React, { useState } from "react";

const NewBoxForm = ({ addBox }) => {
  const INITIAL_STATE = {
    width: "",
    height: "",
    backgroundColor: "",
  };

  const [formData, setFormData] = useState(INITIAL_STATE);

  const handleChange = (e) => {
    const { width, height, backgroundColor } = e.target;
    setFormData((formData) => ({
      ...formData,
      [width]: width,
      [height]: height,
      [backgroundColor]: backgroundColor,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addBox({ ...formData });
    setFormData(INITIAL_STATE);
  };

  return (
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
  );
};

export default NewBoxForm;
