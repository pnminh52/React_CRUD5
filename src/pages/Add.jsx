import React from "react";

const Add = (props) => {
  const { errors, onHandleSubmit, onHandleChange } = props;
  const errorDetails = errors.map((item) => {
    return { [item.context.label]: item.message };
  });
  const [errname, errprice, errdesc] = errorDetails;
  return (
    <>
      <div>
        <form action="" onSubmit={onHandleSubmit}>
          <input
            type="text"
            name="name"
            id=""
            placeholder="name"
            onInput={onHandleChange}
          />
          <span>{errname?.name}</span>
          <input
            type="text"
            name="price"
            id=""
            placeholder="price"
            onInput={onHandleChange}
          />
          <span>{errprice?.price}</span>
          <input
            type="text"
            name="description"
            id=""
            placeholder="description"
            onInput={onHandleChange}
          />
          <span>{errdesc?.description}</span>
          <button>Submit</button>
        </form>
      </div>
    </>
  );
};

export default Add;
