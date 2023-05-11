import OperadorCard from "../../../components/OperadorCard";
import Users from "../../../data/UserData";

const Operador = () => {
    console.log(Users.map((user:any)=> user))
    return(
        <>
            <div>
                {
                    Users.map((user: any, index: number) => (
                        <OperadorCard User={user} key={user.id}/>
                    ))
                }
                
            </div>
        </>
    );
}

export default Operador;