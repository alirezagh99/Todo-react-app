import React, { useState } from "react";
import todoContext from "./add-context";
const todos = [
  { id: 1, text: "Study React" },
  { id: 2, text: "watch the Movie" },
  { id: 3, text: "going to the gym" },
];
const TodoProvider = (props) => {
  const [addItem, setAddItem] = useState(todos);

  const addNewItem = (e) => {
    console.log(e);
    const newTodos = addItem.concat(e);
    setAddItem(newTodos);
  };
  const deleteHandler = (e) => {
    console.log(e);
    const newList = addItem.filter((item) => {
      return item.id !== e;
    });
    console.log("newList after one delete: ", newList);
    setAddItem(newList);
  };
  const todoContextt = {
    addNewItem: addNewItem,
    todoList: addItem,
    deleteHandler,
  };
  return (
    <todoContext.Provider value={todoContextt}>
      {props.children}
    </todoContext.Provider>
  );
};
export default TodoProvider;
