import { CardProjeto } from '../../../components/CardProjeto';
import Menu from '../../../components/Menu';
import { Projeto } from '../../../data/ProjetoData';
import * as S from './styles';
import { useState } from 'react';

const Projetos = () => {
  const [projetos] = useState<typeof Projeto>(Projeto);

  return (
    <div style={{display: 'flex' , justifyContent: 'center'}}>
      <Menu area="/"></Menu>
      <S.Wrapper>
        <S.ContainerCriarProjeto>
          <S.Link href={`/CriarProjeto`}>
            <img src="adicionar.svg" alt="" />
          </S.Link>
        </S.ContainerCriarProjeto>
        <S.Main style={{ margin: '16px 0' }}>
          {projetos.map((projeto, index) => {
            return <CardProjeto projeto={projeto} key={index} />;
          })}
        </S.Main>
      </S.Wrapper>
    </div>
  );
};

export default Projetos;
