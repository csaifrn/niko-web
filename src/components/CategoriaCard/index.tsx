import { useState } from 'react';
import * as S from './styles';
import { DeletarModal } from '../DeletarModal';
import { PencilSimple, Trash } from '@phosphor-icons/react';
import theme from '../../global/theme';
import { Tooltip } from 'react-tooltip';
import { ModalCategory } from '../ModalCategory';
import { CategoriaCardProps } from './categoria-card.interface';

const CategoriaCard = (categoria: CategoriaCardProps) => {
  const [expanded, setExpanded] = useState(false);
  const [modal, setModal] = useState(false);
  const [openModal, setOpen] = useState<boolean>(false);

  const open = () => setExpanded(!expanded);
  const handleClose = () => {
    setModal(!modal);
  };

  return (
    <>
      <S.totalArea onClick={open}>
        <S.CardA>
          <S.CategoriaClick>
            <S.CabecarioCategoria>
              <S.ContainerTitle>
                <S.ClassTitle>{categoria.name}</S.ClassTitle>
                <S.ClassSubTitle>Quantidade total de lotes: {categoria.count_batches}</S.ClassSubTitle>
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
          </S.CategoriaClick>
        </S.CardA>
      </S.totalArea>
      {openModal && (
        <ModalCategory
          id={categoria.id}
          title={'Editar classe'}
          nomeCat={categoria.name}
          close={() => setOpen(!openModal)}
        />
      )}
      {modal && (
        <DeletarModal id={categoria.id} title={`Deseja excluir a classe ${categoria.name}?`} close={handleClose} />
      )}
    </>
  );
};

export default CategoriaCard;
