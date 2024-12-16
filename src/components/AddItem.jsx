import React, { useState, useContext } from "react";
import todoContext from "../store/add-context";

function AddItem() {
  const [add, setAdd] = useState("");
  const [notValid, setNotValid] = useState(false);
  const todoCtx = useContext(todoContext);
  const inputHandler = (e) => {
    setAdd(e.target.value);
  };
  const addHandler = (e) => {
    e.preventDefault();
    if (add === "") {
      setNotValid(true);
      return;
    }
    const newItem = { id: Math.random(), text: add };
    setAdd("");
    setNotValid(false);
    todoCtx.addNewItem(newItem);
  };
  return (
    <form
      onSubmit={addHandler}
      className="w-1/2 m-auto border bg-gray-500 rounded p-3 mt-5"
    >
      <label>Enter your todo: </label>
      <input
        value={add}
        onChange={inputHandler}
        className="border px-1 w-2/3 rounded ml-5"
        type="text"
      />
      {notValid && <p>The Item cannot be empty.</p>}
      <button
        className="block bg-black hover:bg-[rgba(0,0,0,0.8)] text-white border-black mt-5 border px-5 py-1 rounded"
        type="submit"
      >
        Add
      </button>
    </form>
  );
}

export default AddItem;
