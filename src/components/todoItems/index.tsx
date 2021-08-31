import React, {useState} from 'react';
import {useAppDispatch, useAppSelector} from "../../redux";
import styles from "./styles.module.scss";
import Modal from "react-modal";
import DeleteModal from "../modals/deleteModal";
import {removeTodoAction} from "../../redux/reducers/todoReducer";
import {useHistory} from "react-router-dom";

interface TodoItemsPropsType {
  isDeleteModeActive: boolean
}

Modal.setAppElement('#deleteModal');

const TodoItems = ({isDeleteModeActive}: TodoItemsPropsType) => {
  const todos = useAppSelector(state=> state.todoReducer.todos);
  const dispatch = useAppDispatch();
  const history = useHistory();

  let [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  let [modalTextItem, setModalTextItem] = useState<string>('');
  let [todoId, setTodoId] = useState<string | null>(null);

  let todoItemAction = (id: string | null, title: string) => {
    if (id) {
      if (isDeleteModeActive) {
        setTodoId(id);
        setModalTextItem(title);
        setIsModalOpen(true);
      }
      else {
        history.push(`/mytodos/${id}`);
      }
    }
  }

  let newTodoAction = () => {
    if (!isDeleteModeActive) {
      history.push(`/new`);
    }
  }

  let onDelete = (id: string) => {
    dispatch(removeTodoAction(id));
    setIsModalOpen(false);
  }

  return (
    <div className={styles.todo__items}>
      <DeleteModal isModalOpen={isModalOpen}
                   setIsModalOpen={setIsModalOpen}
                   textItem={modalTextItem}
                   onDelete={() => onDelete(todoId!)}
      />

      <div className={isDeleteModeActive ? styles.todo__items__new__todo__dm
                                         : styles.todo__items__new__todo}
           onClick={newTodoAction}
      >
        +
      </div>

      {todos.map(todo =>
        <div key={todo.id}
             onClick={() => todoItemAction(todo.id, todo.title)}
             className={isDeleteModeActive ? styles.todo__items__todo__dm
                                           : styles.todo__items__todo}
             style={isDeleteModeActive ? {border: "2px solid #C36363", transition: "0.2s ease", color: "#C36363"}
                                       : {}}
        >
          {todo.title.length > 20 ? todo.title.substr(0, 20) + "..."
                                  : todo.title}
        </div>
      )}

    </div>
  );
};

export default TodoItems;