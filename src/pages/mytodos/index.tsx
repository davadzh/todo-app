import React, { useState } from "react";
import Tile from "../../components/tile";
import styles from "./styles.module.scss";
import DeleteMode from "../../components/deleteMode";
import TodoItems from "../../components/todoItems";

const MyTodos = () => {
  let [isDeleteModeActive, setIsDeleteModeActive] = useState<boolean>(false);

  return (
    <>
      <Tile>
        <div className={styles.mytodos__header}>
          <div className={styles.mytodos__header__title}>My Todos</div>
          <DeleteMode
            isActive={isDeleteModeActive}
            setIsActive={setIsDeleteModeActive}
          />
        </div>

        <TodoItems isDeleteModeActive={isDeleteModeActive} />
      </Tile>
    </>
  );
};

export default MyTodos;
