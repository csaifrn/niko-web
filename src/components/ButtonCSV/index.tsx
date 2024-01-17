import { ReactNode, useState } from 'react';
import { ModalCSV } from './ModalCSV';
import { ButtonGray } from '../../pages/Coordenador/Classes/styles';

interface ButtonProps {
  children: ReactNode;
  data: any;
}

export const ButtonCSV = ({ children, data }: ButtonProps) => {
  const [modalCSV, setModalCSV] = useState(false);

  return (
    <>
      <ButtonGray disabled={!data} onClick={() => setModalCSV(true)}>
        {data ? children : 'Não é possivel fazer o CSV'}
      </ButtonGray>
      {modalCSV && <ModalCSV data={data} close={() => setModalCSV(!modalCSV)} />}
    </>
  );
};
