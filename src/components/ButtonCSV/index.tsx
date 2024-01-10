import { ReactNode, useState } from 'react';
import { ButtonGray } from '../../pages/Coordenador/Categoria/styles';

import { ModalCSV } from './ModalCSV';

interface ButtonProps {
  children: ReactNode;
  name_column?: string;
  data: any;
}

export const ButtonCSV = ({ children, name, data }: ButtonProps) => {
  const [modalCSV, setModalCSV] = useState(false);

  return (
    <>
      <ButtonGray onClick={() => setModalCSV(true)}>{children}</ButtonGray>
      {modalCSV && <ModalCSV data={data} close={() => setModalCSV(!modalCSV)} />}
    </>
  );
};
