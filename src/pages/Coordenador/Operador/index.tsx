
import OperadorCard from "../../../components/OperadorCard";
import Users from "../../../data/UserData";
import * as S from "./styles";

const Operador = () => {
    console.log(Users.map((user:any)=> user))
    return(
        <>
            <S.CardsArea>
                {
                    Users.map((user: any, index: number) => (
                        <OperadorCard User={user} key={user.id}/>
                    ))
                }
            </S.CardsArea>
        </>
    );
}

export default Operador;