import { useEffect, useRef, useState } from "react";
import * as S from "./styles";
import { DataFase } from "../DataFase";

const CategoriaCard = (Categoria: any) => {
  const [expanded, setExpanded] = useState(false);
  const [accodionHeight, setAccodionHeight] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

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
            <div style={{display: "flex", justifyContent: "space-between", alignItems: "center"}}>
              <p>{categoria.name}</p>
              <div style={{backgroundColor: "red", display: "flex", alignItems: "center", padding: "3px 5px", borderRadius: "3px"}}>
                <p>Prioridade</p>
              </div>
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
          <DataFase recepcao={30} preparo={2} catalogacao={12} digitalizacao={23} upload={1} arquivados={23}/>
        </S.Footer>
      </S.totalArea>
    </>
  );
};

export default CategoriaCard;
