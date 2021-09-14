import React from "react";
import styles from "./styles.module.scss";

interface ButtonProps {
  onClick?: () => void;
  children?: React.ReactChild | React.ReactNode;
}

const PurpleFilledButton = ({ onClick, children }: ButtonProps) => {
  return (
    <button onClick={onClick} className={styles.purple__button}>
      {children}
    </button>
  );
};

export default PurpleFilledButton;
