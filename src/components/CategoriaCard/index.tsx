import { useState } from 'react';
import * as S from './styles';
import { PencilSimple, Trash } from '@phosphor-icons/react';
import theme from '../../global/theme';
import { Tooltip } from 'react-tooltip';

const CategoriaCard = (Categoria: any) => {
  const [expanded, setExpanded] = useState(false);
  const [modal, setModal] = useState(false);
  const [openModal, setOpen] = useState<boolean>(false);

  const open = () => setExpanded(!expanded);

  return (
    <S.totalArea onClick={open}>
      <S.CardA>
        <S.CategoriaClick>
          <S.CabecarioCategoria>
            <S.ClassTitle>{Categoria.name}</S.ClassTitle>
            <S.ClasseCardButtons>
              {/* Botão de Editar Categoria */}
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

              {/* Botão de Excluir Categoria */}
              <S.ButtonArea className="ExcluirTooltip">
                <Trash onClick={() => setModal(!modal)} size={24} weight="fill" color={theme.colors['white']} />
                <Tooltip anchorSelect=".ExcluirTooltip" place="bottom"></Tooltip>
              </S.ButtonArea>
            </S.ClasseCardButtons>
          </S.CabecarioCategoria>
        </S.CategoriaClick>
      </S.CardA>
    </S.totalArea>
  );
};

export default CategoriaCard;
