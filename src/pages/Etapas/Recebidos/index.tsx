import * as Style from '../../../global/index';
import * as S from './styles';
import { useState } from 'react';

import MenuCoord from '../../../components/MenuCoord';
import Menu from '../../../components/Menu';
import { useAuthUser } from 'react-auth-kit';
import EntradaData from '../../../data/EntradasData';
import { useParams } from 'react-router-dom';
import Users from '../../../data/UserData';
import { CreateRemessa } from '../../../components/CriarRemessa';
import { Membros } from '../../../data/ProjetoData';

export interface Categoria {
  id: string;
  nome: string;
}

export interface Envolvidos {
  foto: string;
}

export interface Task {
  id: string;
  title: string;
  categoria: Categoria[] | null;
  envolvidos: Envolvidos[] | null;
}

const Recebidos = () => {
  const { id } = useParams();
  const [openCriarModal, setOpenCriarModal] = useState(false);
  const remessas = EntradaData.filter((entrada) => entrada.id_projeto === id);
  const auth = useAuthUser();
  const membros = Membros.filter((membro) => membro.id_Projeto === id);
  const membrosClientes = membros.filter((mem) => mem.roleProjeto === 'Cliente');
  console.log(membrosClientes);

  return (
    <>
      <Style.Wrapper style={{ height: 'auto', width: '100%' }}>
        <Menu area={`/Fase/${id}/Board/Recebidos`} id_projeto={id}></Menu>
        <MenuCoord />

        <S.IconeRecepDivDesktop>
          <S.IconeRecepcao src={`/icon-big/Recebimento_icon.svg`} alt={`icone da etapa recepção`} />
        </S.IconeRecepDivDesktop>

        <S.IconeRecepDivMobile>
          <S.IconeRecepcao src={`/icon-medium/Recepcao.png`} />
        </S.IconeRecepDivMobile>

        <S.RemessasDiv>
          {auth()?.role.filter((role: string) => role === 'Coordenador')[0] === 'Coordenador' && (
            <S.Btn
              onClick={() => {
                setOpenCriarModal(!openCriarModal);
              }}
            >
              <p>Adicionar Remessa</p>
            </S.Btn>
          )}

          <S.Main>
            {remessas.map((remessa) => {
              const user = Users.filter((user) => user.id === remessa.id_cliente)[0];
              return (
                <div
                  key={remessa.id}
                  style={{
                    color: 'white',
                    backgroundColor: '#393E4B',
                    padding: '2em',
                    borderRadius: '5px',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '1em',
                    height: 'auto',
                  }}
                >
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                    }}
                  >
                    <h1>{`${remessa.Qtd_caixa} Caixas`}</h1>
                    <img
                      src={user.url}
                      alt=""
                      height={32}
                      width={32}
                      style={{ objectFit: 'cover', borderRadius: '100%' }}
                    />
                  </div>

                  {remessa.Observacao.length > 0 && (
                    <div
                      style={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '1em',
                      }}
                    >
                      <p>Observações</p>
                      <p style={{ backgroundColor: '#191C24', padding: '1em', borderRadius: '3px' }}>
                        {remessa.Observacao}
                      </p>
                    </div>
                  )}
                  <p>{remessa.data}</p>
                </div>
              );
            })}
          </S.Main>
        </S.RemessasDiv>
      </Style.Wrapper>
      {openCriarModal && (
        <CreateRemessa
          clientes={membrosClientes}
          close={() => {
            setOpenCriarModal(!openCriarModal);
          }}
        />
      )}
    </>
  );
};

export default Recebidos;
