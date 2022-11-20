import { useState } from 'react';
import Modal from './Modal/Modal';

const Card = () => {
  const [target, setTarget] = useState('');
  const [modalOpen, setOpenModal] = useState('');

  const openNewModal = (modalName: string) => {
    setTarget('modal-component-wrapper');
    if (modalName) {
      setOpenModal(modalName);
    }
  };

  const closeModal = () => {
    setOpenModal('');
  };

  return (
    <div className="card">
      <footer>
        <div>
          <button onClick={() => openNewModal('modal1')}>
            Open Body Modal
          </button>
          <button onClick={() => openNewModal('modal2')}>
            Open Card Modal
          </button>
        </div>
      </footer>
      <Modal
        isOpen={modalOpen === 'modal1'}
        handleClose={closeModal}
        targetContainer={target}
      >
        This is our Moda
      </Modal>

      <Modal
        isOpen={modalOpen === 'modal2'}
        handleClose={closeModal}
        targetContainer={target}
      >
        This is our Moda 2
      </Modal>
    </div>
  );
};

export default Card;
