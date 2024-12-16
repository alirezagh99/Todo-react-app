import React from "react";
import AddItem from "../components/AddItem";

const todoContext = React.createContext({ addNewItem: () => {} });

export default todoContext;
