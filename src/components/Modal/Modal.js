import './modalStyles.scss';
import ReactPortal from '../ReactPortal/ReactPortal';

export default function Modal({
  children,
  isOpen,
  handleClose,
  targetContainer = 'modal-portal-wrapper',
}) {
  return (
    isOpen && (
      <ReactPortal wrapperId={targetContainer}>
        <div className="modal" aria-modal role="alertdialog">
          <div className="modal-content">
            <button onClick={handleClose} className="close-btn">
              X
            </button>
            {children}
          </div>
        </div>
      </ReactPortal>
    )
  );
}
