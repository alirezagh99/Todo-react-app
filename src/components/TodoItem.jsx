import React, { useContext } from "react";
import todoContext from "../store/add-context";
function TodoItem(props) {
  const myCtx = useContext(todoContext);
  const deleteHandler = () => {
    myCtx.deleteHandler(props.id);
  };
  return (
    <div className="w-full flex items-center justify-between p-2 border mb-4 rounded bg-white text-black">
      <p className="inline">{props.text}</p>
      <div className="flex  items-center gap-5">
        <button
          onClick={deleteHandler}
          className="border rounded px-3 bg-black hover:bg-[rgba(0,0,0,0.8)] text-white"
        >
          Delete
        </button>
        <input
          type="checkbox"
          className="border rounded w-5 h-5 bg-black"
        ></input>
      </div>
    </div>
  );
}

export default TodoItem;
