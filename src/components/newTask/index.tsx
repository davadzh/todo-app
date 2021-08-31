import React, {Dispatch, SetStateAction, useState} from 'react';
import styles from "./styles.module.scss";
import { v4 as uuidv4 } from 'uuid';
import {useAppDispatch} from "../../redux";
import {addTaskAction} from "../../redux/reducers/todoReducer";

interface NewTaskPropsType {
  todoId: string
  setCreatingNewTask: Dispatch<SetStateAction<boolean>>
}

const NewTask = ({todoId, setCreatingNewTask}: NewTaskPropsType) => {
  const dispatch = useAppDispatch();
  let [taskValue, setTaskValue] = useState<string>('');

  let changeTaskName = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length < 300) {
      setTaskValue(e.target.value);
    }
  }

  let addTask = () => {
    if (taskValue.length > 0 && taskValue.length < 300) {
      setCreatingNewTask(false);

      const newId = uuidv4();
      dispatch(addTaskAction({
        todoId: todoId,
        task: {
          id: newId,
          name: taskValue,
          isDone: false
        }
      }));
    }
  }

  return (
    <div className={styles.new__task}>
      <input className={styles.new__task__input}
             value={taskValue}
             onChange={changeTaskName} />
      <button
              className={styles.new__task__accept}
              onClick={addTask}>+</button>
    </div>
  );
};

export default NewTask;