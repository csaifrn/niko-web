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
import { BoardChanger } from '../../../components/BoardChanger';
import theme from '../../../global/theme';

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
  const membros = Membros.filter((membro) => membro.id_Projeto === id);
  const membrosClientes = membros.filter((mem) => mem.roleProjeto === 'Cliente');

  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <Menu area={`/Fases/Board/Recebidos`} id_projeto={id}></Menu>
      <MenuCoord />

      <S.RecepcaoPage>
        <BoardChanger />

        {[{ role: ['coordenador'] }][0].role.filter((role: string) => role === 'Coordenador')[0] === 'Coordenador' && (
          <S.Btn
            onClick={() => {
              setOpenCriarModal(!openCriarModal);
            }}
          >
            <p>Adicionar Remessa</p>
          </S.Btn>
        )}

        <S.RemessasMain>
          <S.NumeroDeRemessasDiv>
            <S.RemessasTitle> Remessas recebidas</S.RemessasTitle>
            <S.NumDeRemessasGreen>{remessas.length}</S.NumDeRemessasGreen>
          </S.NumeroDeRemessasDiv>

          <S.RemessasCards>
            {remessas.map((remessa) => {
              const user = Users.filter((user) => user.id === remessa.id_cliente)[0];
              return (
                <S.RemessaCardCinzaClaro key={remessa.id}>
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                    }}
                  >
                    <h2>{`${remessa.Qtd_caixa} Caixas`}</h2>
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
                      <p style={{ backgroundColor: theme.colors['gray/700'], padding: '1em', borderRadius: '3px' }}>
                        {remessa.Observacao}
                      </p>
                    </div>
                  )}
                  {remessa.data != undefined && <p>{remessa.data}</p>}
                </S.RemessaCardCinzaClaro>
              );
            })}
          </S.RemessasCards>
        </S.RemessasMain>
      </S.RecepcaoPage>

      {openCriarModal && (
        <CreateRemessa
          clientes={membrosClientes}
          close={() => {
            setOpenCriarModal(!openCriarModal);
          }}
        />
      )}
    </div>
  );
};

export default Recebidos;
