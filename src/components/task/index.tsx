import React, { Dispatch, SetStateAction, useState } from "react";
import styles from "./styles.module.scss";
import TaskCheckbox from "../taskCheckbox";
import {
  setTaskIsDoneAction,
  TaskType,
} from "../../redux/reducers/todoReducer";
import { useAppDispatch } from "../../redux";

interface TaskPropsType {
  todoId: string;
  task: TaskType;
  setDeletingTodoId: Dispatch<SetStateAction<string | null>>;
  setDeletingTaskId: Dispatch<SetStateAction<string | null>>;
  isDone: boolean;
  isDeleteModeActive: boolean;
  setIsDeleteModalOpen: Dispatch<SetStateAction<boolean>>;
  setDeleteModalTitle: Dispatch<SetStateAction<string>>;
  children: React.ReactChild | React.ReactNode;
}

const Task = ({
  todoId,
  task,
  setDeletingTodoId,
  setDeletingTaskId,
  isDone,
  isDeleteModeActive,
  setIsDeleteModalOpen,
  setDeleteModalTitle,
  children,
}: TaskPropsType) => {
  const dispatch = useAppDispatch();

  let taskItemAction = (
    todoId: string | null,
    taskId: string | null,
    title: string
  ) => {
    if (todoId && taskId) {
      if (isDeleteModeActive) {
        setDeletingTodoId(todoId);
        setDeletingTaskId(taskId);
        setDeleteModalTitle(title);
        setIsDeleteModalOpen(true);
      } else {
        dispatch(setTaskIsDoneAction({ todoId, taskId, isDone: !isDone }));
      }
    }
  };

  return (
    <div
      className={
        isDeleteModeActive
          ? [styles.task, styles.task__dm].join(" ")
          : styles.task
      }
      onClick={() => taskItemAction(todoId, task.id, task.name)}
    >
      <div className={styles.task__text}>{children}</div>
      {!isDeleteModeActive && <TaskCheckbox isDone={isDone} />}
    </div>
  );
};

export default Task;
