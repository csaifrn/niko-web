import { CardProjeto } from '../../../components/CardProjeto';
import Menu from '../../../components/Menu';
import MenuCoord from '../../../components/MenuCoord';
import { Projeto } from '../../../data/ProjetoData';
import { Wrapper } from '../../../global';
import { Main } from './styles';

const Projetos = () => {
  return (
    <>
      <Menu area="/"></Menu>
      <div style={{ fontFamily: 'Rubik', padding: '2em' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>
          <a
            href="/CriarProjeto"
            style={{
              border: 'none',
              color: '#191C24',
              borderRadius: '5px',
              fontFamily: 'Rubik',
            }}
          >
            <img src="plus.svg" alt="" />
          </a>
        </div>

        <Main style={{ margin: '16px 0' }}>
          {Projeto.map((projeto) => {
            return <CardProjeto projeto={projeto} key={projeto.id} />;
          })}
        </Main>
      </div>
    </>
  );
};

export default Projetos;
