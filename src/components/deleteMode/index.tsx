import React, { Dispatch, SetStateAction } from "react";
import styles from "./styles.module.scss";

interface DeleteModePropsType {
  isActive: boolean;
  setIsActive: Dispatch<SetStateAction<boolean>>;
}

const DeleteMode = ({ isActive, setIsActive }: DeleteModePropsType) => {
  return (
    <div>
      <div
        className={`
          ${styles.delete__mode__title}
          ${isActive && styles.delete__mode__title__activation}
        `}
      >
        Delete mode
      </div>

      <div className={styles.delete__mode__buttons}>
        <div
          className={
            isActive
              ? styles.delete__mode__buttons__OFF
              : styles.delete__mode__buttons__OFF__active
          }
          onClick={() => setIsActive(false)}
        >
          OFF
        </div>

        <div
          className={
            isActive
              ? styles.delete__mode__buttons__ON__active
              : styles.delete__mode__buttons__ON
          }
          onClick={() => setIsActive(true)}
        >
          ON
        </div>
      </div>
    </div>
  );
};

export default DeleteMode;
