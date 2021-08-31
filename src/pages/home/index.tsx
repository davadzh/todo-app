import React from 'react';
import Showcase from "../../components/showcase";
import Tile from "../../components/tile";
import styles from "./styles.module.scss";
import Task from "../../components/task";

const Home = () => {
  const exampleTodoTitles: string[] = ["Create UX/UI",
                                       "Develop backend",
                                       "Develop frontend"];

  return (
    <div className={styles.showcase__and__example}>
      <Showcase />
      <Tile>
        <div className={styles.example__title}>TODO example</div>
        <div className={styles.example__todo__name}>Website creating</div>


        {exampleTodoTitles.map((title) => {
          return <Task key={title}>
            {title}
          </Task>
        })}
      </Tile>
    </div>
  );
};

export default Home;