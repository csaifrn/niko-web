import { useEffect, useRef, useState } from "react";
import * as S from "./styles";
import { DataFase } from "../DataFase";
import { DeletarModal } from "../DeletarModal";

const CategoriaCard = (Categoria: any) => {
  const [expanded, setExpanded] = useState(false);
  const [accodionHeight, setAccodionHeight] = useState(0);
  const [modal, setModal] = useState(false);
  const [percentage, setPercentage] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  const [prioridade, setPrioridade] = useState(false)

  const handlePrioridade = () => {
    setPrioridade(!prioridade)
  }

  const handleDeletar = () => {
    setModal(!modal)
  }

  const handlePercentage = (value: number) => {
    setPercentage(value)
  }

  const open = () => setExpanded(!expanded);

  const categoria = Categoria.categoria

  useEffect(() => {
    if (ref.current) {
      const getHeight = ref.current.scrollHeight;
      setAccodionHeight(getHeight);
    }
  }, [expanded]);

  return (
    <>
      <S.totalArea>
        <S.CardA>
          <S.CategoriaClick
          onClick={open}
          >
            <S.CabecarioCategoria>
              <p>{categoria.name}</p>
              {prioridade &&
              <S.Prioridade>
                <p>Prioridade</p>
              </S.Prioridade>
              }

            </S.CabecarioCategoria>
            <S.BarOut>
              <S.BarInner percentage={percentage}></S.BarInner>
            </S.BarOut>
          </S.CategoriaClick>
        </S.CardA>

        <S.Footer
          className={expanded ? "show" : ""}
          setHeight={accodionHeight}
          ref={ref}
        >
        <DataFase recepcao={30} preparo={2} catalogacao={22} digitalizacao={23} upload={40} arquivados={1000} percentageCallback={handlePercentage}/>
          <S.BtnsDiv>
            <a onClick={handlePrioridade} style={{  height: '44px', width: '100%', display: 'flex', justifyContent: 'center', backgroundColor: '#120F1F', alignItems: 'center', borderRadius: '5px', color: prioridade ? "#F32D2D" : "#fff"}}>{prioridade ? "Tirar Prioridade" : "Marcar Prioridade"}</a>
            <a onClick={handleDeletar} style={{height: '44px', width: '100%', display: 'flex', justifyContent: 'center', backgroundColor: '#F32D2D', alignItems: 'center', borderRadius: '5px'}}>Deletar Categoria</a>
          </S.BtnsDiv>
        </S.Footer>
      </S.totalArea>
      {modal && (
        <DeletarModal
          title={"Deletar Categoria?"}
          close={handleDeletar}
        ></DeletarModal>
      )}
    </>
  );
};

export default CategoriaCard;