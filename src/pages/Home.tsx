import { FC, useState } from 'react';
import Icon from '../../public/images/icon.jpg';
import Card from '../components/Card/Card';
import ModalManager from '../components/common/modals/ModalManager';

interface HomeProps {
  title: string;
}

const Home: FC<HomeProps> = ({ title }) => {
  const [modalOpen, setModal] = useState<any>(false);

  const openModal = (event: any) => {
    event.preventDefault();

    const {
      target: {
        dataset: { modal },
      },
    } = event;
    if (modal) {
      setModal(modal);
    }
  };

  const closeModal = () => {
    setModal('');
  };

  return (
    <article>
      <Card />
      <div className="app--shell" onClick={openModal}>
        <ModalManager closeFn={closeModal} modal={modalOpen} />
        <button type="button" data-modal="modal-one">
          Open Modal One
        </button>
        <button type="button" data-modal="modal-two">
          Open Modal Two
        </button>
        <button type="button" data-modal="modal-three">
          Open Modal Three
        </button>
      </div>

      <img src={Icon} alt="" />
      <h1>{title}</h1>
    </article>
  );
};
export default Home;
