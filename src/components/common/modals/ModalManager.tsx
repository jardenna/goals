import ModalOne from './ModalOne';
import ModalTwo from './ModalTwo';
import ModalThree from './ModalThree';
import { FC } from 'react';

interface ModalManagerProps {
  closeFn: any;
  modal: string;
}
const ModalManager: FC<ModalManagerProps> = ({
  closeFn = () => null,
  modal = '',
}) => (
  <>
    <ModalOne closeFn={closeFn} open={modal === 'modal-one'} />

    <ModalTwo closeFn={closeFn} open={modal === 'modal-two'} />

    <ModalThree closeFn={closeFn} open={modal === 'modal-three'} />
  </>
);

export default ModalManager;
