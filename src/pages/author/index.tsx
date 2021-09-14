import React from "react";
import Tile from "../../components/tile";
import styles from "./styles.module.scss";

const Author = () => {
  return (
    <>
      <Tile>
        <div className={styles.author}>
          <div className={styles.author__title}>Author</div>
          <div className={styles.author__description}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquam
            nisl et semper pulvinar. Quisque ut lorem quis tellus sodales
            vehicula. Vestibulum rutrum velit sed dolor tincidunt fermentum sit
            amet nec nisl. Lorem ipsum dolor sit amet, consectetur adipiscing
            elit. Sed aliquam nisl et semper pulvinar.
          </div>
        </div>
      </Tile>
    </>
  );
};

export default Author;
