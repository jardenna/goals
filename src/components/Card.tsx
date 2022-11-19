import { useState } from 'react';
import Modal from './Modal/Modal';

export default function Card() {
  const [isOpen, setIsOpen] = useState(false);
  const [target, setTarget] = useState<string>('');
  const openBodyModal = () => {
    setTarget('modal-component-wrapper');
    setIsOpen(true);
  };
  const openCardModal = () => {
    setTarget('cardnew');
    setIsOpen(true);
  };

  return (
    <div className="card">
      <header>
        <h1>WELCOME TO YOUR PORTAL EXERCISE</h1>
      </header>
      <section>
        <p>
          We are going to learn how to use Portals to build a modal component
          for your app!
        </p>
      </section>

      <footer>
        <p>Lets try it out!</p>
        <div>
          <button onClick={() => openBodyModal()}>Open Body Modal</button>
          <button onClick={() => openCardModal()}>Open Card Modal</button>
        </div>
      </footer>
      <Modal
        isOpen={isOpen}
        handleClose={() => setIsOpen(false)}
        targetContainer={target}
      >
        This is our Modal!
      </Modal>
    </div>
  );
}
