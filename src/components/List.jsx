import React, { useContext } from "react";
import TodoItem from "./TodoItem";
import todoContext from "../store/add-context";

// const todos = [
//   { id: 1, text: "Study React" },
//   { id: 2, text: "watch the Movie" },
//   { id: 3, text: "going to the gym" },
// ];

function List() {
  const myCtx = useContext(todoContext);
  return (
    <div className="w-1/2 bg-gray-500 rounded m-auto mt-5 border p-3">
      {myCtx.todoList.map((item) => {
        return <TodoItem key={item.id} id={item.id} text={item.text} />;
      })}
    </div>
  );
}

export default List;
