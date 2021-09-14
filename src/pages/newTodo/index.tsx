import React, { useState } from "react";
import Tile from "../../components/tile";
import styles from "./styles.module.scss";
import { useAppDispatch } from "../../redux";
import { addTodoAction } from "../../redux/reducers/todoReducer";
import { v4 as uuidv4 } from "uuid";
import { useHistory } from "react-router-dom";

const NewTodo = () => {
  const dispatch = useAppDispatch();
  const history = useHistory();
  let [disableCreate, setDisableCreate] = useState<boolean>(true);
  let [todoName, setTodoName] = useState<string>("");

  let changeTodoName = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length < 31) {
      setTodoName(e.target.value);
      setDisableCreate(e.target.value.length === 0);
    }
  };

  let createNewTodo = () => {
    if (!disableCreate && todoName.length > 0) {
      const newId = uuidv4();

      dispatch(
        addTodoAction({
          id: newId,
          title: todoName,
          tasks: [],
        })
      );

      history.push(`/mytodos/${newId}`);
    }
  };

  return (
    <Tile>
      <div className={styles.title}>New Todo</div>
      <div>
        <input
          type="text"
          placeholder={"Enter Todo name"}
          className={styles.todo__title__input}
          onChange={changeTodoName}
          value={todoName}
        />
        <button
          disabled={disableCreate}
          className={styles.todo__title__accept}
          onClick={createNewTodo}
        >
          +
        </button>
      </div>
    </Tile>
  );
};

export default NewTodo;
