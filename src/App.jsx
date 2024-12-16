import React from "react";
import AddItem from "./components/AddItem";
import List from "./components/List";
import TodoProvider from "./store/TodoProvider";

function App() {
  return (
    <TodoProvider>
      <AddItem />
      <List />
    </TodoProvider>
  );
}

export default App;
