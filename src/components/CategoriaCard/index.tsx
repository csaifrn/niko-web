import { useEffect, useRef, useState } from "react";
import * as S from "./styles";
import { DataFase } from "../DataFase";
import { DeletarModal } from "../DeletarModal";

const CategoriaCard = (Categoria: any) => {
  const [expanded, setExpanded] = useState(false);
  const [accodionHeight, setAccodionHeight] = useState(0);
  const [modal, setModal] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const [prioridade, setPrioridade] = useState(false)

  const handlePrioridade = () => {
    setPrioridade(!prioridade)
  }

  const handleDeletar = () => {
    setModal(!modal)
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
          <div style={{backgroundColor: "#393E4B", fontFamily: "Rubik", color: "#fff", display: "grid", gap: "1em", borderRadius: "5px"}}
          onClick={open}
          >
            <div style={{display: "flex", justifyContent: "space-between", alignItems: "center", height: '24px'}}>
              <p>{categoria.name}</p>
              {prioridade &&
              <div style={{backgroundColor: "red", height: '24px', display: "flex", alignItems: "center", padding: "2px 5px", borderRadius: "3px"}}>
                <p>Prioridade</p>
              </div>
              }

            </div>
            <div style={{backgroundColor: "#191C24", width: "100", height: "1.5em", borderRadius: "5px", overflow: "hidden"}}>
              <div style={{backgroundColor: "#00D25B", width: `${categoria.percentage}%`, height: "1.5em"}}></div>
            </div>
          </div>
        </S.CardA>

        <S.Footer
          className={expanded ? "show" : ""}
          setHeight={accodionHeight}
          ref={ref}
        >
        <DataFase recepcao={30} preparo={2} catalogacao={22} digitalizacao={23} upload={40} arquivados={23}/>
          <div style={{padding: '0 2em 2em 2em', display: 'flex', flexDirection: 'column', gap: '1em', alignItems: 'center' }}>
            <a onClick={handlePrioridade} style={{height: '44px', width: '100%', display: 'flex', justifyContent: 'center', backgroundColor: '#120F1F', alignItems: 'center', borderRadius: '5px'}}>Tirar Prioridade</a>
            <a onClick={handleDeletar} style={{height: '44px', width: '100%', display: 'flex', justifyContent: 'center', backgroundColor: '#F32D2D', alignItems: 'center', borderRadius: '5px'}}>Deletar Categoria</a>
          </div>
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
