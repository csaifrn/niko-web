import * as S from "./styles"
import ReactLoading from 'react-loading';

const Splash =() =>{
    return(
        <S.backgroundContainer>
            <S.itemsContainer>
                <S.logo alt="Logo" src="Logo_Niko.svg"></S.logo>
                <ReactLoading type="cylon" color="white" height={100} width={100} />
            </S.itemsContainer>
        </S.backgroundContainer>
    );
}

export default Splash;