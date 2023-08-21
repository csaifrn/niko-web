
import { CardProjeto } from '../../../components/CardProjeto';
import Menu from '../../../components/Menu';
import {  Projeto } from '../../../data/ProjetoData';
import { Main } from './styles';
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
      <div style={{ fontFamily: 'Rubik', padding: '2em', marginTop: '6em' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>
          <a
            href={`/CriarProjeto`}
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
          {projetos.map((projeto, index) => {
            console.log(projeto);
            return <CardProjeto projeto={projeto} key={index} />;
          })}
        </Main>
      </div>
    </>
  );
};

export default Projetos;
