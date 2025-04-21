import React from "react";
import Card from "../Card/Card.jsx";
import styles from "./TodosList.module.css";
const TodosList = () => {
  return (
    <div className={styles.todoList}>
      {[0,1,2,3].map((item)=>(
      <Card />
      ))}
    </div>
  );
};

export default TodosList;
