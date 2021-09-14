import React from "react";
import styles from "./styles.module.scss";

interface TaskCheckboxPropsType {
  isDone: boolean;
}

const TaskCheckbox = ({ isDone }: TaskCheckboxPropsType) => {
  return (
    <div
      className={isDone ? styles.task__checkbox__done : styles.task__checkbox}
    />
  );
};

export default TaskCheckbox;
