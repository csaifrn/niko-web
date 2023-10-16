import React, { useEffect, useRef, useState } from 'react';
import * as S from './styles';

import { v4 as uuidv4 } from 'uuid';

interface User {
  id: string;
  name: string;
  url: string;
  email: string;
  lote: string;
  fase: string;
  andamento: boolean;
}

interface UserMembro {
  id: string;
  id_Projeto: string;
  email: string;
  roleProjeto: string;
  creator: boolean;
}

interface MembrosModalProps {
  users: User[];
  close: () => void;
  membros: UserMembro[];
  id_projeto: string;
}

export const MembrosModal = (props: MembrosModalProps) => {
  const [projetoMembros, setProjetoMembros] = useState<UserMembro[]>(props.membros);

  const role = ['Coordenador', 'Operador'];
  const optionFuncoes = [
    { id: 1, label: 'Operador' },
    { id: 2, label: 'Coordenador' },
  ];

  const emailRef = useRef<HTMLInputElement>(null);

  const [selectedUsers, setSelectedUsers] = useState<User[]>([]);
  const [selectedRole, setSelectedRole] = useState<string>('');
  const [isRoleSelected, setIsRoleSelected] = useState(false);

  const [showError, setShowError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [closing, setClosing] = useState(false);

  useEffect(() => {
    const foundUsers: any[] = [];
    for (let index = 0; index < props.users.length; index++) {
      const user = props.users[index];
      for (let i = 0; i < projetoMembros.length; i++) {
        const projetoMembro = projetoMembros[i];
        if (projetoMembro.email === user.email) {
          foundUsers.push(user);
          break;
        }
      }
    }
    setSelectedUsers(foundUsers);
  }, [props.users]);

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

  const handleClose = () => {
    setClosing(true);
    setTimeout(() => {
      props.close();
    }, 300);
  };

  const handleEnviar = () => {
    const emailValue = emailRef.current?.value;

    if (selectedRole === '') {
      setShowError(true);
      setErrorMessage('Por favor, selecione uma função.');
      return;
    } else {
      setShowError(false);
    }

    let foundUser: any = null;
    for (let index = 0; index < props.users.length; index++) {
      const user = props.users[index];
      if (user.email === emailValue) {
        foundUser = user;
        break;
      }
    }

    if (foundUser && !selectedUsers.find((user) => user.email === foundUser.email)) {
      const projetoMembro = projetoMembros.find((membro) => membro.email === foundUser.email);
      const newUser = { ...foundUser, roleProjeto: projetoMembro ? projetoMembro.roleProjeto : selectedRole };
      setSelectedUsers((prevUsers) => [...prevUsers, newUser]);
      const dataUser = {
        id: uuidv4(),
        id_Projeto: props.id_projeto,
        email: newUser.email,
        roleProjeto: selectedRole,
        creator: false,
      };
      setProjetoMembros((prevUsers) => [...prevUsers, dataUser]);
    }
  };

  const handleRoleChanges = (event: React.ChangeEvent<HTMLSelectElement>, email: string) => {
    const updatedProjetoMembros = projetoMembros.map((membro) => {
      if (membro.email === email) {
        return { ...membro, roleProjeto: event.target.value };
      }
      return membro;
    });
    setProjetoMembros(updatedProjetoMembros);
  };

  const handleRoleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = event.target.value;
    setSelectedRole(selectedValue);
    setIsRoleSelected(selectedValue !== '');
  };

  const handleDeleteUser = (email: string) => {
    setSelectedUsers((prevUsers) => prevUsers.filter((user) => user.email !== email));
    setProjetoMembros((prevMembros) => prevMembros.filter((membro) => membro.email !== email));
  };

  return (
    <>
      <S.ModalBackdrop>
        <S.ModalArea id="modal-scaling">
          <S.ModalContent>
            <S.NameClose>
              <h1>+Incra</h1>
              <S.Exit type="button" onClick={handleClose}>
                <img src="/close.svg" alt="" height={18} width={18} />
              </S.Exit>
            </S.NameClose>

            <h2>Editar Mebros</h2>

            <form action="">
              <h3>Email</h3>
              <S.EmailTodo>
                <S.EmailInputSelect>
                  <input
                    type="text"
                    ref={emailRef}
                    placeholder="Email"
                    style={{
                      width: '100%',
                      paddingLeft: '0.5em',
                      height: '44px',
                      border: 'none',
                      borderRadius: '5px 0px 0px 5px',
                      backgroundColor: '#191C24',
                      color: 'white',
                      fontFamily: 'Rubik',
                    }}
                    required
                  />

                  <S.EscolherFuncao
                    options={optionFuncoes}
                    className="react-select-container"
                    classNamePrefix="react-select"
                  />
                </S.EmailInputSelect>

                <S.EnviarEmail
                  type="button"
                  onClick={() => {
                    handleEnviar();
                  }}
                >
                  <img src="VectorSend.svg" alt="" style={{ marginLeft: '0.25em' }} />
                </S.EnviarEmail>
              </S.EmailTodo>

              {showError && <p style={{ color: 'red', padding: '2em 0 0 0' }}>{errorMessage}</p>}
            </form>

            <S.ChooseLote>
              {selectedUsers.map((user: any) => {
                const projetoMembro = projetoMembros.find((membro) => membro.email === user.email);
                const roleProjeto = projetoMembro ? projetoMembro.roleProjeto : '';
                const creator = projetoMembro ? projetoMembro.creator : '';

                return (
                  <S.User key={user.id}>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '1em' }}>
                      <img
                        src={user.url}
                        alt=""
                        height={32}
                        width={32}
                        style={{ objectFit: 'cover', borderRadius: '100%' }}
                      />
                      <p style={{ color: 'white' }}>{user.name}</p>
                    </div>

                    <div style={{ display: 'flex', gap: '1em' }}>
                      <S.EscolherFuncaoBlack
                        options={optionFuncoes}
                        className="react-select-container"
                        classNamePrefix="react-select"
                      />

                      <button
                        onClick={() => {
                          handleDeleteUser(user.email);
                        }}
                        style={{ backgroundColor: 'transparent', border: 'none' , cursor: 'pointer' }}
                      >
                        <img src="VectorDelete.svg" alt="" />
                      </button>
                    </div>
                    
                  </S.User>
                );
              })}
            </S.ChooseLote>
            <S.AtribuirButton
              onClick={() => {
                handleClose();
              }}
            >
              Salvar
            </S.AtribuirButton>
          </S.ModalContent>
        </S.ModalArea>
      </S.ModalBackdrop>
    </>
  );
};
