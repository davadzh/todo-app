import React, {useState} from 'react';
import {useHistory, useParams} from 'react-router-dom';
import styles from "../todo/styles.module.scss";
import Tile from "../../components/tile";
import {useAppSelector} from "../../redux";
import Task from "../../components/task";
import NewTask from "../../components/newTask";

interface TodoParamsType {
  id: string
}

const Todo = () => {
  const history = useHistory();
  const params = useParams<TodoParamsType>();
  const todo = useAppSelector(state=> state.todoReducer.todos.find(todo => todo.id === params.id));
  let [creatingNewTask, setCreatingNewTask] = useState<boolean>(false);

  if (!todo) {
    history.push("/mytodos");
  }

  let goToMytodos = () => {
    history.push("/mytodos");
  }

  return (
    <Tile>
      <div className={styles.title} ><span><span onClick={goToMytodos} className={styles.back}>&lt; </span>Todo</span></div>
      <div>
        <input type="text"
               className={styles.todo__title__input}
               value={todo ? todo.title
                           : ''}
               disabled/>
        <button disabled
                className={styles.todo__title__accept}>+</button>

        {}

        <div className={styles.tasks}>
          {!todo ? ''
                 : todo.tasks.map(task => {
              return <Task key={task.id}>
                {task.name}
              </Task>
            })}

          {!creatingNewTask ? <div className={styles.tasks__new} onClick={() => setCreatingNewTask(true)}>+</div>
                            : <NewTask todoId={todo!.id} setCreatingNewTask={setCreatingNewTask} /> }
        </div>
      </div>
    </Tile>
  );
};

export default Todo;