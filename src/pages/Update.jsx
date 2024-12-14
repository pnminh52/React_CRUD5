import React, { useState } from "react";
import { useParams } from "react-router-dom";

const Update = ({ products, onHandleUpdate }) => {
  const [inputValue, setInputValue] = useState([]);
  const { id } = useParams();
  const crtPrd = products.find((item) => item.id == id);
  const onHandleChange = (e) => {
    const { name, value } = e.target;
    setInputValue({ ...inputValue, [name]: value });
  };
  const onUpdate = (e) => {
    e.preventDefault();
    const updateData = { ...crtPrd, ...inputValue };
    onHandleUpdate(updateData);
  };

  return (
    <>
      <div>
        <form action="" onSubmit={onUpdate}>
          <input
            type="text"
            name="name"
            id=""
            placeholder="name"
            defaultValue={crtPrd?.name}
            onInput={onHandleChange}
          />

          <input
            type="text"
            name="price"
            id=""
            placeholder="price"
            defaultValue={crtPrd?.price}
            onInput={onHandleChange}
          />

          <input
            type="text"
            name="description"
            id=""
            placeholder="description"
            defaultValue={crtPrd?.description}
            onInput={onHandleChange}
          />

          <button>Submit</button>
        </form>
      </div>
    </>
  );
};

export default Update;
