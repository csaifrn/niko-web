import * as Style from '../../../global/index';
import * as S from './styles';
import Lote from '../../../components/Lote/index';
import { useState } from 'react';
import { CreateModal } from '../../../components/CriarLote';
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

interface RecepProps {
  etapa: string;
}

const Recebidos = (props: RecepProps) => {
  let { id } = useParams();
  const [openCriarModal, setOpenCriarModal] = useState(false);
  const remessas = EntradaData.filter((entrada) => entrada.id_projeto === id);
  const auth = useAuthUser();
  const membros = Membros.filter((membro) => membro.id_Projeto === id);
  const membrosClientes = membros.filter((mem) => mem.roleProjeto === 'Cliente');
  console.log(membrosClientes);

  return (
    <>
      <Style.Wrapper style={{ height: 'auto', marginBottom: '10em', width: '100%' }}>
        <Menu area="/"></Menu>
        <MenuCoord />
        <>
          <div style={{ margin: '1em 3em 0em 3em', display: 'flex', justifyContent: 'flex-end', gap: '0.5em' }}>
            <img src={`/icon-page/${props.etapa}.png`} alt={`icone da etapa ${props.etapa}`} />
          </div>
        </>

        <div style={{ margin: '2em', display: 'flex', flexDirection: 'column', gap: '1em' }}>
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
                </div>
              );
            })}
          </S.Main>
        </div>
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
