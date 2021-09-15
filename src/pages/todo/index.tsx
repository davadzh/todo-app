import React, { useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import styles from "../todo/styles.module.scss";
import Tile from "../../components/tile";
import { useAppDispatch, useAppSelector } from "../../redux";
import Task from "../../components/task";
import NewTask from "../../components/newTask";
import { setTodoTitleAction } from "../../redux/reducers/todoReducer";
import DeleteMode from "../../components/deleteMode";
import TaskItems from "../../components/taskItems";

interface TodoParamsType {
  id: string;
}

const Todo = () => {
  const history = useHistory();
  const dispatch = useAppDispatch();
  const params = useParams<TodoParamsType>();
  const todo = useAppSelector((state) =>
    state.todoReducer.todos.find((todo) => todo.id === params.id)
  );
  let [titleEditEnabled, setTitleEditEnabled] = useState<boolean>(false);
  let [todoTitle, setTodoTitle] = useState<string>(todo?.title ?? "");
  let [isDeleteModeActive, setIsDeleteModeActive] = useState<boolean>(false);

  if (!todo) {
    return <div>404</div>;
  } else {
    let closeTitleEditing = () => {
      if (
        todoTitle.length > 0 &&
        todoTitle.length < 31 &&
        todoTitle.trim() !== ""
      ) {
        dispatch(setTodoTitleAction({ title: todoTitle, todoId: todo.id }));
        setTitleEditEnabled(false);
      }
    };

    return (
      <Tile>
        <div className={styles.header}>
          <div className={styles.header__title}>
            <span>
              <span
                onClick={() => history.push("/todo-app/mytodos")}
                className={styles.header__title__back}
              >
                &lt;{" "}
              </span>
              Todo
            </span>
          </div>

          <DeleteMode
            isActive={isDeleteModeActive}
            setIsActive={setIsDeleteModeActive}
          />
        </div>

        <div>
          {!titleEditEnabled ? (
            <div className={styles.todo__title}>
              <div
                className={styles.todo__title__input__disabled}
                onClick={() => setTitleEditEnabled(true)}
              >
                {todoTitle}
              </div>
            </div>
          ) : (
            <div className={styles.todo__title}>
              <input
                className={styles.todo__title__input}
                value={todoTitle}
                onChange={(e) => setTodoTitle(e.target.value)}
              />
              <button
                disabled={
                  todoTitle.length === 0 &&
                  todoTitle.length > 31 &&
                  todoTitle.trim() === ""
                }
                className={styles.todo__title__edit}
                onClick={closeTitleEditing}
              >
                OK
              </button>
            </div>
          )}

          <TaskItems isDeleteModeActive={isDeleteModeActive} />
        </div>
      </Tile>
    );
  }
};

export default Todo;
