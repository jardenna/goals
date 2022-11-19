import { FC, ReactNode } from 'react';
import ReactDOM from 'react-dom';

interface ModalProps {
  children: ReactNode;
  open: boolean | string;
}
const modalRootEl = document.getElementById('portal-container') as HTMLElement;

const Modal: FC<ModalProps> = ({ children, open = false }) => {
  if (!open) return null;

  return ReactDOM.createPortal(children, modalRootEl);
};

export default Modal;
