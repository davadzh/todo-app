import React from 'react';
import {useHistory} from 'react-router-dom';
import styles from "./styles.module.scss";
import PurpleFilledButton from "../buttons/purpleFilledButton";
import WhiteOutlinedButton from "../buttons/whiteOutlinedButton";

const Showcase = () => {
  let history = useHistory();

  return (
    <div className={styles.showcase}>
      <h1 className={styles.showcase__title}>JUST COOL TODO LIST.</h1>
      <p className={styles.showcase__description}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquam nisl et semper pulvinar. Quisque ut lorem quis tellus sodales vehicula. Vestibulum rutrum velit sed dolor tincidunt fermentum sit amet nec nisl. </p>

      <div className={styles.showcase__buttons__pair}>
        <PurpleFilledButton onClick={() => history.push('/new')}>
          Create TODO
        </PurpleFilledButton>
        <WhiteOutlinedButton onClick={() => history.push('/author')}>
          About
        </WhiteOutlinedButton>
      </div>
    </div>
  );
};

export default Showcase;