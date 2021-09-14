import React, { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../redux";
import styles from "./styles.module.scss";
import DeleteModal from "../modals/deleteModal";
import { removeTodoAction } from "../../redux/reducers/todoReducer";
import TodoItem from "../todoItem";
import NewTodoItem from "../newTodoItem";

interface TodoItemsPropsType {
  isDeleteModeActive: boolean;
}

const TodoItems = ({ isDeleteModeActive }: TodoItemsPropsType) => {
  const dispatch = useAppDispatch();

  let [deletingTodoId, setDeletingTodoId] = useState<string | null>(null);
  let [isDeleteModalOpen, setIsDeleteModalOpen] = useState<boolean>(false);
  let [deleteModalTitle, setDeleteModalTitle] = useState<string>("");

  const todos = useAppSelector((state) => state.todoReducer.todos);

  let onTodoDelete = () => {
    if (deletingTodoId) {
      dispatch(removeTodoAction(deletingTodoId));
      setIsDeleteModalOpen(false);
    }
  };

  return (
    <div className={styles.todo__items}>
      <DeleteModal
        isModalOpen={isDeleteModalOpen}
        setIsModalOpen={setIsDeleteModalOpen}
        textItem={deleteModalTitle}
        onDelete={onTodoDelete}
      />

      <NewTodoItem />

      {todos.map((todo) => (
        <TodoItem
          isDeleteModeActive={isDeleteModeActive}
          setIsDeleteModalOpen={setIsDeleteModalOpen}
          setDeleteModalTitle={setDeleteModalTitle}
          setDeletingTodoId={setDeletingTodoId}
          todo={todo}
        />
      ))}
    </div>
  );
};

export default TodoItems;
