import React from "react";
import styles from "./styles.module.scss";

interface ButtonProps {
  onClick?: () => void;
  children?: React.ReactChild | React.ReactNode;
}

const WhiteOutlinedButton = ({ onClick, children }: ButtonProps) => {
  return (
    <button onClick={onClick} className={styles.white__button}>
      {children}
    </button>
  );
};

export default WhiteOutlinedButton;
