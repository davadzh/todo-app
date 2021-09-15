import React, { Dispatch, SetStateAction } from "react";
import styles from "./styles.module.scss";
import { TodoType } from "../../redux/reducers/todoReducer";
import { useHistory } from "react-router-dom";

interface TodoItemPropsType {
  todo: TodoType;
  isDeleteModeActive: boolean;
  setDeletingTodoId: Dispatch<SetStateAction<string | null>>;
  setDeleteModalTitle: Dispatch<SetStateAction<string>>;
  setIsDeleteModalOpen: Dispatch<SetStateAction<boolean>>;
}

const TodoItem = ({
  todo,
  isDeleteModeActive,
  setDeletingTodoId,
  setDeleteModalTitle,
  setIsDeleteModalOpen,
}: TodoItemPropsType) => {
  const history = useHistory();

  let todoItemAction = (id: string | null, title: string) => {
    if (id) {
      if (isDeleteModeActive) {
        setDeletingTodoId(id);
        setDeleteModalTitle(title);
        setIsDeleteModalOpen(true);
      } else {
        history.push(`/todo-app/mytodos/${id}`);
      }
    }
  };

  return (
    <div
      key={todo.id}
      onClick={() => todoItemAction(todo.id, todo.title)}
      className={
        isDeleteModeActive
          ? [styles.todo, styles.todo__dm].join(" ")
          : styles.todo
      }
    >
      {todo.title}
    </div>
  );
};

export default TodoItem;
