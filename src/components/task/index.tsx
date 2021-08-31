import React, {useState} from 'react';
import styles from "./styles.module.scss"
import TaskCheckbox from "../taskCheckbox";

interface TaskPropsType {
  children: React.ReactChild | React.ReactNode
}

const Task = ({children}: TaskPropsType) => {
  let [isDone, setIsDone] = useState(false);

  return (
    <div className={styles.task} onClick={() => setIsDone(!isDone)}>
      {children}
      <TaskCheckbox isDone={isDone} />
    </div>
  );
};

export default Task;