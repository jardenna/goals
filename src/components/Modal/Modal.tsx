import './modalStyles.scss';
import Portal from '../ReactPortal/Portal';
import { FC, ReactNode } from 'react';

interface ModalProps {
  children: ReactNode;
  isOpen: boolean;
  handleClose: () => void;
  targetContainer: string;
}
const Modal: FC<ModalProps> = ({
  children,
  isOpen,
  handleClose,
  targetContainer = 'modal-portal-wrapper',
}) => {
  return isOpen ? (
    <Portal wrapperId={targetContainer}>
      <div className="modal" aria-modal role="alertdialog">
        <div className="modal-content">
          <button onClick={handleClose} className="close-btn">
            X
          </button>
          {children}
        </div>
      </div>
    </Portal>
  ) : null;
};

export default Modal;
