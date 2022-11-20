import { FC, ReactNode } from 'react';
import { createPortal } from 'react-dom';

interface ModalProps {
  children: ReactNode;
  open: boolean | string;
}
const modalRootEl = document.getElementById('root') as HTMLElement;

const Modal: FC<ModalProps> = ({ children, open = false }) => {
  if (!open) return null;

  return createPortal(children, modalRootEl);
};

export default Modal;
