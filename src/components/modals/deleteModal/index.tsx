import React, {Dispatch, SetStateAction} from 'react';
import Tile from "../../tile";
import Modal from "react-modal";
import styles from "./styles.module.scss";

interface DeleteModalPropsType {
  isModalOpen: boolean
  setIsModalOpen: Dispatch<SetStateAction<boolean>>
  textItem: string
  onDelete?: () => void
  onCancel?: () => void
}

const customModalStyles = {
  overlay: {
    background: 'rgba(0, 0, 0, 0.14)'
  },
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    border: 'none',
    background: 'none'
  },
};

const customTileStyles = {
  boxShadow: "0px 0px 15px rgba(191, 191, 191, 0.25)",
  padding: "20px"
}


const DeleteModal = ({isModalOpen, setIsModalOpen, textItem, onDelete}: DeleteModalPropsType) => {

  let onCancel = () => {
    setIsModalOpen(false)
  }

  return (
    <Modal
      isOpen={isModalOpen}
      style={customModalStyles}
    >
      <Tile style={customTileStyles}>
        <div className={styles.delete__modal}>
          <div className={styles.delete__modal__text}>
            <span>Delete <span className={styles.delete__modal__text__item}>"{textItem}"</span>?</span>
          </div>

          <div className={styles.delete__modal__buttons}>
            <button onClick={onCancel} className={styles.delete__modal__buttons__cancel}>Cancel</button>
            <button onClick={onDelete} className={styles.delete__modal__buttons__delete}>Delete</button>
          </div>
        </div>
      </Tile>
    </Modal>
  );
};

export default DeleteModal;