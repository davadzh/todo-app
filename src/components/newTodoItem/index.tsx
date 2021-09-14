import React from "react";
import styles from "./styles.module.scss";
import { useHistory } from "react-router-dom";

const NewTodoItem = () => {
  let history = useHistory();

  return (
    <div className={styles.new__todo} onClick={() => history.push("/new")}>
      +
    </div>
  );
};

export default NewTodoItem;
