import React, { useState } from "react";
import styles from "./styles.module.scss";
import Task from "../task";
import NewTask from "../newTask";
import { useAppDispatch, useAppSelector } from "../../redux";
import { useParams } from "react-router-dom";
import DeleteModal from "../modals/deleteModal";
import {
  removeTaskAction,
  removeTodoAction,
} from "../../redux/reducers/todoReducer";

interface TodoParamsType {
  id: string;
}

interface TaskItemsPropsType {
  isDeleteModeActive: boolean;
}

const TaskItems = ({ isDeleteModeActive }: TaskItemsPropsType) => {
  const dispatch = useAppDispatch();

  const params = useParams<TodoParamsType>();
  const todo = useAppSelector((state) =>
    state.todoReducer.todos.find((todo) => todo.id === params.id)
  );
  let [creatingNewTask, setCreatingNewTask] = useState<boolean>(false);
  let [isDeleteModalOpen, setIsDeleteModalOpen] = useState<boolean>(false);

  let [deletingTodoId, setDeletingTodoId] = useState<string | null>(null);
  let [deletingTaskId, setDeletingTaskId] = useState<string | null>(null);
  let [deleteModalTitle, setDeleteModalTitle] = useState<string>("");

  let onDelete = () => {
    if (deletingTodoId && deletingTaskId) {
      dispatch(removeTaskAction(deletingTodoId, deletingTaskId));
      setIsDeleteModalOpen(false);
    }
  };

  if (!todo) {
    return <div>404</div>;
  }
  return (
    <div className={styles.tasks}>
      <DeleteModal
        isModalOpen={isDeleteModalOpen}
        setIsModalOpen={setIsDeleteModalOpen}
        textItem={deleteModalTitle}
        onDelete={onDelete}
      />

      {todo.tasks.map((task) => {
        return (
          <Task
            key={task.id}
            todoId={todo.id}
            task={task}
            setDeletingTodoId={setDeletingTodoId}
            setDeletingTaskId={setDeletingTaskId}
            isDone={task.isDone}
            isDeleteModeActive={isDeleteModeActive}
            setIsDeleteModalOpen={setIsDeleteModalOpen}
            setDeleteModalTitle={setDeleteModalTitle}
          >
            {task.name}
          </Task>
        );
      })}

      {!creatingNewTask ? (
        <div
          className={styles.tasks__new}
          onClick={() => setCreatingNewTask(true)}
        >
          +
        </div>
      ) : (
        <NewTask todoId={todo.id} setCreatingNewTask={setCreatingNewTask} />
      )}
    </div>
  );
};

export default TaskItems;
