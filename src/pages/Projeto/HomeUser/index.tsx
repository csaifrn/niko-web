import { CardProjeto } from '../../../components/CardProjeto';
import Menu from '../../../components/Menu';
import MenuCoord from '../../../components/MenuCoord';
import { Wrapper } from '../../../global';
import { Main } from './styles';

const Projetos = () => {
  return (
    <Wrapper>
      <Menu area="/"></Menu>
      <Main style={{ margin: '16px' }}>
        <CardProjeto srcImgIcon="Incra.png" link="/Fase" />
        <CardProjeto srcImgIcon="Incra.png" link="/Fase" />
        <CardProjeto srcImgIcon="Incra.png" link="/Fase" />
        <CardProjeto srcImgIcon="Incra.png" link="/Fase" />
      </Main>
    </Wrapper>
  );
};

export default Projetos;
