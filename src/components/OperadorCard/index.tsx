import * as S from "./styles";

const OperadorCard = (user: any) => {
    const User:any = user.User; 
    console.log(User)
    return(
        <>
                {
                    User.fase !== "" && 
                    <S.CardArea>
                    <div style={{display: "flex", alignItems: "center", gap: "1em"}}><img src={User.url} alt="" width={28} height={28} style={{objectFit: 'cover'}}/><p>{User.name}</p></div>
                    <div><img src={`/icon-page/${User.fase}`} alt="" /><div><p>{User.lote}</p></div></div>
                    </S.CardArea>
                }
                {
                    User.fase === "" && 
                    <S.CardArea>
                    <div><img src={User.url} alt="" width={28} height={28}/><p>{User.name}</p></div>
                    </S.CardArea>
                }
        </>
    );
}

export default OperadorCard;