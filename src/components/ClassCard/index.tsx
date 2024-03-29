import { useEffect, useRef, useState } from 'react';
import * as S from './styles';
import { DeletarModal } from '../DeletarModal';
import { Circle, PencilSimple, Trash } from '@phosphor-icons/react';
import theme from '../../global/theme';
import { Tooltip } from 'react-tooltip';
import { ClassModal } from '../ClassModal';
import { ClassProps } from './categoria-card.interface';
import { DataFase } from '../DataFase';
import { Prioridade } from '../Lote/styles';

const ClassCard = (categoria: ClassProps) => {
  const [accodionHeight, setAccodionHeight] = useState(0);
  const [expanded, setExpanded] = useState(false);
  const [modal, setModal] = useState(false);
  const [openModal, setOpen] = useState<boolean>(false);
  const ref = useRef<HTMLDivElement>(null);

  const open = () => setExpanded(!expanded);
  const handleClose = () => {
    setModal(!modal);
  };

  const [percentage, setPercentage] = useState(0);
  const handlePercentage = (value: number) => {
    setPercentage(value);
  };

  useEffect(() => {
    if (ref.current) {
      const getHeight = ref.current.scrollHeight;
      setAccodionHeight(getHeight);
    }
  }, [expanded]);

  return (
    <>
      <S.totalArea>
        <S.CardClick onClick={open}>
          <S.CabecarioCategoria>
            <S.ContainerTitle>
              {/* Nome da classe */}
              <S.ClassTitle>{categoria.name}</S.ClassTitle>

              <Circle size={8} weight="fill" />

              {/* Quando não há nenhum lote na classe */}
              {Number(categoria.count_batches) === 0 && (
                <S.ContainerTitle style={{ gap: '8px' }}>
                  <S.ClassSubTitle>nenhum lote</S.ClassSubTitle>
                </S.ContainerTitle>
              )}

              {/* Quando há 1 lote na classe */}
              {Number(categoria.count_batches) === 1 && (
                <S.ContainerTitle style={{ gap: '8px' }}>
                  <S.ClassSubTitle style={{ color: theme.colors['green/500'], fontWeight: 'bold' }}>1</S.ClassSubTitle>
                  <S.ClassSubTitle>lote</S.ClassSubTitle>
                </S.ContainerTitle>
              )}

              {/* Quanda há vários lotes nqclasse */}
              {Number(categoria.count_batches) > 1 && (
                <S.ContainerTitle style={{ gap: '8px' }}>
                  <S.ClassSubTitle style={{ color: theme.colors['green/500'], fontWeight: 'bold' }}>
                    {categoria.count_batches}
                  </S.ClassSubTitle>
                  <S.ClassSubTitle>lotes</S.ClassSubTitle>
                </S.ContainerTitle>
              )}

              {categoria.priority === true && (
                <>
                  <Circle size={8} weight="fill" />
                  <Prioridade style={{ height: '28px' }}>
                    <p style={{ fontSize: '14px' }}>Prioridade</p>
                  </Prioridade>
                </>
              )}
            </S.ContainerTitle>

            <S.ClasseCardButtons>
              <S.ButtonArea className="EditarTooltip">
                <PencilSimple
                  onClick={() => setOpen(!openModal)}
                  size={24}
                  weight="fill"
                  color={theme.colors['white']}
                />
                <Tooltip anchorSelect=".EditarTooltip" place="bottom">
                  <p style={{ fontSize: '12px', fontFamily: 'Rubik' }}>Editar classe</p>
                </Tooltip>
              </S.ButtonArea>

              <S.ButtonArea className="ExcluirTooltip">
                <Trash onClick={() => setModal(!modal)} size={24} weight="fill" color={theme.colors['white']} />
                <Tooltip anchorSelect=".ExcluirTooltip" place="bottom">
                  <p style={{ fontSize: '12px', fontFamily: 'Rubik' }}>Excluir classe</p>
                </Tooltip>
              </S.ButtonArea>
            </S.ClasseCardButtons>
          </S.CabecarioCategoria>
        </S.CardClick>

        <S.Footer className={expanded ? 'show' : ''} setHeight={accodionHeight} ref={ref}>
          <DataFase
            available_batches_count={categoria.available_batches_count}
            in_progress_batches_count={categoria.in_progress_batches_count}
            archiving_done_batches_count={categoria.archiving_done_batches_count}
            recepcao={0}
            preparo={categoria.preparo_batches_count}
            catalogacao={categoria.catalog_batches_count}
            digitalizacao={categoria.digital_batches_count}
            upload={categoria.upload_batches_count}
            arquivados={categoria.arquiv_batches_count}
            percentageCallback={handlePercentage}
          />
          {/* <S.BtnsDiv>
            <S.ButtonPrioridade onClick={(e) => handlePrioridade(e)}>
              {prioridade ? 'Tirar Prioridade' : 'Marcar Prioridade'}
            </S.ButtonPrioridade>
          </S.BtnsDiv> */}
        </S.Footer>
      </S.totalArea>
      {openModal && (
        <ClassModal
          id={categoria.id}
          title={'Editar classe'}
          nomeCat={categoria.name}
          priority={categoria.priority}
          close={() => setOpen(!openModal)}
        />
      )}
      {modal && (
        <DeletarModal id={categoria.id} title={`Deseja excluir a classe ${categoria.name}?`} close={handleClose} />
      )}
    </>
  );
};

export default ClassCard;
