import { useEffect, useRef, useState } from "react";
import * as S from "./styles";

const OperadorCard = (user: any) => {
    const [expanded, setExpanded] = useState(false);
    const [accodionHeight, setAccodionHeight] = useState(0);
    const ref = useRef(null);
  
    const open = () => setExpanded(!expanded);
  
    useEffect(() => {
      const getHeight = ref.current.scrollHeight;
      setAccodionHeight(getHeight);
    }, [expanded]);

    const User:any = user.User; 
    return(
        <>
        <S.totalArea>


                {
                    User.fase !== "" && 
                    <S.CardArea onClick={open}>
                    <S.dataUser><img src={User.url} alt="" width={28} height={28} style={{objectFit: 'cover',  borderRadius: "100%", border: "1px solid #43DB6D"}}/><p style={{color: "#43DB6D"}}>{User.name}</p></S.dataUser>
                    <S.dataLote><img src={`/icon-page/${User.fase}.png`} height={28} width={28} alt="" /><div><S.textLote>{User.lote}</S.textLote></div></S.dataLote>
                    
                    </S.CardArea>
                }
                {
                    User.fase === "" && 
                    <S.CardArea onClick={open}>
                    <S.dataUser><img src={User.url} alt="" width={28} height={28} style={{objectFit: 'cover',  borderRadius: "100%"}}/><p>{User.name}</p></S.dataUser>
                    </S.CardArea>
                }
                <S.Footer
                            className={expanded ? "show" : ""}
                            setHeight={accodionHeight}
                            ref={ref}
                            >
                            <div className="accodion" ref={ref}>
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos,
                                facilis. Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                                Eos, facilis. Lorem, ipsum dolor sit amet consectetur adipisicing
                                elit. Eos, facilis. Lorem, ipsum dolor sit amet consectetur
                                adipisicing elit. Eos, facilis.
                            </div>
                </S.Footer>
            </S.totalArea>
        </>
    );
}

export default OperadorCard;