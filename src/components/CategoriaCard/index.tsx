import { useEffect, useRef, useState } from 'react';
import * as S from './styles';
import { DeletarModal } from '../DeletarModal';
import { Tag } from '../../api/services/tags/get-tags/get.interface';
import { PencilSimple, Trash } from '@phosphor-icons/react';
import theme from '../../global/theme';
import { Tooltip } from 'react-tooltip';
import { ModalCategory } from '../ModalCategory';
import { Category } from '../../api/services/batches/get-batche/get.interface';
import { useMutation } from 'react-query';
import { GetCategories } from '../../api/services/settlement/get-categories';

const CategoriaCard = (Categoria: Tag) => {
  const categoria = Categoria;
  const [expanded, setExpanded] = useState(false);
  const [accodionHeight, setAccodionHeight] = useState(0);
  const [modal, setModal] = useState(false);
  const [percentage, setPercentage] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const [prioridade, setPrioridade] = useState(false);
  const [openModal, setOpen] = useState<boolean>(false);
  const [Categories, setCategories] = useState<Category[]>();

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

  const CategoriesMutate = useMutation(GetCategories, {
    onSuccess: (data: Category[]) => {
      setCategories(data);
    },
  });

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
              <S.ClassTitle>{categoria.name}</S.ClassTitle>
              <S.ClasseCardButtons>
                {/* Botão de Editar Categoria */}
                <S.ButtonArea className="EditarTooltip">
                  <PencilSimple
                    onClick={() => setOpen(!openModal)}
                    size={24}
                    weight="fill"
                    color={theme.colors['white']}
                  />
                  <Tooltip
                    children={<p style={{ fontSize: '12px', fontFamily: 'Rubik' }}>Editar classe</p>}
                    anchorSelect=".EditarTooltip"
                    place="bottom"
                  />
                </S.ButtonArea>

                {/* Botão de Excluir Categoria */}
                <S.ButtonArea className="ExcluirTooltip">
                  <Trash onClick={() => setModal(!modal)} size={24} weight="fill" color={theme.colors['white']} />
                  <Tooltip
                    children={<p style={{ fontSize: '12px', fontFamily: 'Rubik' }}>Excluir classe</p>}
                    anchorSelect=".ExcluirTooltip"
                    place="bottom"
                  />
                </S.ButtonArea>
              </S.ClasseCardButtons>

              {prioridade && (
                <S.Prioridade>
                  <p>Prioridade</p>
                </S.Prioridade>
              )}
            </S.CabecarioCategoria>
            {/* <S.BarOut>
              <S.BarInner percentage={percentage}></S.BarInner>
            </S.BarOut>
            <p>{percentage}%</p> */}
          </S.CategoriaClick>
        </S.CardA>

        {/* <S.Footer className={expanded ? 'show' : ''} setHeight={accodionHeight} ref={ref}>
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
        */}
      </S.totalArea>
      {openModal && (
        <ModalCategory
          id={categoria.id}
          title={'Editar classe'}
          nomeCat={categoria.name}
          close={() => setOpen(!openModal)}
          refetch={() => CategoriesMutate.mutate()}
        />
      )}
      {modal && <DeletarModal id ={categoria.id} title={`Deseja excluir a classe ${categoria.name}?`} close={handleClose}></DeletarModal>}
    </>
  );
};

export default CategoriaCard;
