import { useEffect, useRef, useState } from 'react';
import * as S from './styles';
import { DataFase } from '../DataFase';
import { DeletarModal } from '../DeletarModal';
import CategoriaData from '../../data/CategoriaData';

const CategoriaCard = (Categoria: (typeof CategoriaData)[0]) => {
  const [expanded, setExpanded] = useState(false);
  const [accodionHeight, setAccodionHeight] = useState(0);
  const [modal, setModal] = useState(false);
  const [percentage, setPercentage] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  const [prioridade, setPrioridade] = useState(false);

  const handlePrioridade = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    setPrioridade(!prioridade);
  };

  const handleDeletar = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    setModal(!modal);
  };

  const handleClose = () => {
    setModal(!modal);
  };

  const handlePercentage = (value: number) => {
    setPercentage(value);
  };

  const open = () => setExpanded(!expanded);

  const categoria = Categoria;

  useEffect(() => {
    if (ref.current) {
      const getHeight = ref.current.scrollHeight;
      setAccodionHeight(getHeight);
    }
  }, [expanded]);

  return (
    <>
      <S.totalArea onClick={open}>
        <S.CardA>
          <S.CategoriaClick>
            <S.CabecarioCategoria>
              <p>{categoria.name}</p>
              {prioridade && (
                <S.Prioridade>
                  <p>Prioridade</p>
                </S.Prioridade>
              )}
            </S.CabecarioCategoria>
            <S.BarOut>
              <S.BarInner percentage={percentage}></S.BarInner>
            </S.BarOut>
            <p>{percentage}%</p>
          </S.CategoriaClick>
        </S.CardA>

        <S.Footer className={expanded ? 'show' : ''} setHeight={accodionHeight} ref={ref}>
          <DataFase
            recepcao={30}
            preparo={2}
            catalogacao={22}
            digitalizacao={23}
            upload={40}
            arquivados={1000}
            percentageCallback={handlePercentage}
          />
          <S.BtnsDiv>
            <S.ButtonPrioridade onClick={(e) => handlePrioridade(e)}>
              {prioridade ? 'Tirar Prioridade' : 'Marcar Prioridade'}
            </S.ButtonPrioridade>
            <S.ButtonDelete onClick={(e) => handleDeletar(e)}>Deletar Categoria</S.ButtonDelete>
          </S.BtnsDiv>
        </S.Footer>
      </S.totalArea>
      {modal && <DeletarModal title={'Deletar Categoria?'} close={handleClose}></DeletarModal>}
    </>
  );
};

export default CategoriaCard;
