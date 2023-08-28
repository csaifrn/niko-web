import { CardProjeto } from '../../../components/CardProjeto';
import Menu from '../../../components/Menu';
import { Projeto } from '../../../data/ProjetoData';
import * as S from './styles';
import { useState } from 'react';

const Projetos = () => {
  // const auth = useAuthUser();
  // const projetosParc = Membros.filter((mem) => mem.email === auth()?.email);
  const [projetos] = useState<typeof Projeto>(Projeto);

  // useEffect(() => {
  //   for (let index = 0; index < projetosParc.length; index++) {
  //     const user = projetosParc[index];
  //     setProjetos((prev) => [...prev, Projeto.filter((projeto) => projeto.id === user.id_Projeto)]);
  //   }
  // }, []);

  return (
    <>
      <Menu area="/"></Menu>
      <S.Wrapper>
        <S.ContainerCriarProjeto>
          <S.Link href={`/CriarProjeto`}>
            <img src="plus.svg" alt="" />
          </S.Link>
        </S.ContainerCriarProjeto>
        <S.Main style={{ margin: '16px 0' }}>
          {projetos.map((projeto, index) => {
            console.log(projeto);
            return <CardProjeto projeto={projeto} key={index} />;
          })}
        </S.Main>
      </S.Wrapper>
    </>
  );
};

export default Projetos;
