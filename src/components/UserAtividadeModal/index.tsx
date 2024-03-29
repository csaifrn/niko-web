import React, { useEffect, useState } from 'react';
import * as S from './styles';
import Search from '../Search';
import Users from '../../data/UserData';
import { Membros } from '../../data/ProjetoData';
import { useParams } from 'react-router-dom';
import theme from '../../global/theme';

export interface IUserFase {
  id_fase: any;
  users: Array<any>;
}

export interface UserModalAtividadeProps {
  close: () => void;
  // eslint-disable-next-line no-unused-vars
  setUserFase: (e: any) => void;
  // eslint-disable-next-line no-unused-vars
  fase: any;
  userFase: Array<IUserFase>;
}

export const UserModalAtividade = (props: UserModalAtividadeProps) => {
  const { id } = useParams();
  const [fase] = useState<any>(props.fase);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [faseSelected, setFaseSelected] = useState<number>(0);
  const [UserFase, setUserFase] = useState<IUserFase[]>([]);

  useEffect(() => {
    if (props.userFase.length > 0) {
      setUserFase(props.userFase);
    } else {
      for (let index = 0; index < fase.length; index++) {
        const element = fase[index];
        setUserFase((prev) => [...prev, { id_fase: element.id, users: [] }]);
      }
    }
  }, []);

  const [membros, setMembros] = useState<typeof Users>([]);

  useEffect(() => {
    Users.forEach((element) => {
      const membro = Membros.filter((membr) => membr.email === element.email);
      membro.forEach((m) => {
        if (m.id_Projeto == id) {
          setMembros((old: any) => [...old, element]);
        }
      });
    });
  }, []);

  const [error, setError] = useState(false);

  const handleLoteClick = (item: any) => {
    const updatedUserFase = [...UserFase];

    if (updatedUserFase[faseSelected].users.some((user) => user.id === item.id)) {
      updatedUserFase[faseSelected].users = updatedUserFase[faseSelected].users.filter((user) => user.id !== item.id);
    } else {
      updatedUserFase[faseSelected].users.push(item);
    }

    setUserFase(updatedUserFase);
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const filteredCategorias = membros.filter(
    (f) => f.name.toLowerCase().includes(searchTerm.toLowerCase()) || f.name.includes(searchTerm),
  );

  const [closing, setClosing] = useState(false);

  useEffect(() => {
    // Ao renderizar o modal, aplicar um escalonamento gradual para exibi-lo
    const timer = setTimeout(() => {
      const modal = document.getElementById('modal-scaling');
      if (closing === false && modal) {
        modal.style.transform = 'scale(1)';
      } else if (modal && closing) {
        modal.style.transform = 'scale(0)';
      }
    }, 10);

    return () => clearTimeout(timer);
  }, [closing]);

  const handleSave = () => {
    // Verifica se alguma lista de usuários em UserFase está vazia
    const isAnyUserFaseEmpty = UserFase.some((uf) => uf.users.length === 0);

    if (isAnyUserFaseEmpty) {
      // Exibe uma mensagem de erro caso alguma lista esteja vazia
      setError(true);
      setTimeout(() => {
        setError(false);
      }, 3000);
      return; // Aborta a função handleSave
    }

    props.setUserFase(UserFase);
    handleClose();
  };

  const handleClose = () => {
    setClosing(true);
    setTimeout(() => {
      props.close();
    }, 300);
  };

  return (
    <>
      <S.ModalBackdrop>
        <S.ModalAreaCard id="modal-scaling">
          <S.ModalContent id="modal-content">
            <S.NameClose>
              <h2>Atribuir usuários à atividade</h2>
              <S.Exit onClick={handleClose}>
                <img src="/buttonclose.svg" alt="" height={24} width={24} />
              </S.Exit>
            </S.NameClose>

            <div
              style={{
                color: 'white',
                overflow: 'hidden',
                borderRadius: '5px',
                display: 'flex',
                gap: '0.5em',
                flexWrap: 'wrap',
              }}
            >
              {UserFase.map((Fase: any, index: number) => {
                return (
                  <div key={index}>
                    <button
                      onClick={() => setFaseSelected(index)}
                      style={{
                        height: '44px',
                        color: 'white',
                        border: 'none',
                        borderRadius: '5px',
                        backgroundColor: faseSelected === index ? theme.colors['gray/700'] : theme.colors['gray/600'],
                        padding: '8px 8px',
                        cursor: 'pointer',
                      }}
                    >
                      <p style={{ fontFamily: 'Rubik' }}>{fase.filter((f: any) => f.id === Fase.id_fase)[0].titulo}</p>
                    </button>
                  </div>
                );
              })}
            </div>

            <Search searchTerm={searchTerm} handleSearchChange={handleSearchChange} />

            <S.ChooseLote>
              {filteredCategorias.map((f) => {
                const isSelected = UserFase[faseSelected]?.users.includes(f);
                const isPresentInOtherFase = UserFase.some(
                  (userFase) =>
                    userFase.id_fase !== fase[faseSelected].id && userFase.users.some((user) => user.id === f.id),
                );
                return (
                  <S.Lote
                    key={f.id}
                    onClick={() => handleLoteClick(f)}
                    style={{
                      backgroundColor: isSelected ? theme.colors['gray/700'] : theme.colors['gray/600'],
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '0.5em',
                    }}
                  >
                    <p
                      style={{
                        color: isSelected ? theme.colors.white : theme.colors['gray/100'],
                      }}
                    >
                      {f.name}
                    </p>
                    {isPresentInOtherFase && (
                      <p style={{ color: theme.colors['orange/400'], fontSize: '12px' }}>
                        Usuário presente em outra tarefa
                      </p>
                    )}
                  </S.Lote>
                );
              })}
            </S.ChooseLote>
            <S.AtribuirButton onClick={handleSave}>Salvar</S.AtribuirButton>
            {error && (
              <p style={{ color: theme.colors['red/500'], fontSize: '12px' }}>Todas as fases precisam de um Operador</p>
            )}
          </S.ModalContent>
        </S.ModalAreaCard>
      </S.ModalBackdrop>
    </>
  );
};

export {};
