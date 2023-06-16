import { useEffect, useRef, useState } from 'react';
import * as S from './styles';

interface MembrosModalProps {
  users: any[];
  close: () => void;
}

export const MembrosModal = (props: MembrosModalProps) => {
  const [projetoMembros, setProjetoMembros] = useState([
    {
      email: 'melquiades.sousa@gmail.com',
      roleProjeto: 'Cliente',
      creator: false,
    },
    {
      email: 'pedro@email.com.br',
      roleProjeto: 'Coordenador',
      creator: true,
    },
    {
      email: 'luis.gustavo@gmail.com',
      roleProjeto: 'Operador',
      creator: false,
    },
  ]);

  const role = ['Coordenador', 'Operador', 'Cliente'];
  const emailRef = useRef<HTMLInputElement>(null);

  const [selectedUsers, setSelectedUsers] = useState<any[]>([]);
  const [selectedRole, setSelectedRole] = useState<string>('');
  const [newUserRole, setNewUserRole] = useState<string>('');
  const [isRoleSelected, setIsRoleSelected] = useState(false);
  const [showError, setShowError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

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

  const handleEnviar = () => {
    const emailValue = emailRef.current?.value;

    if (selectedRole === '') {
      setShowError(true);
      setErrorMessage('Por favor, selecione uma função.');
      return;
    } else {
      setShowError(false);
      setErrorMessage('');
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
      const dataUser = { email: newUser.email, roleProjeto: selectedRole, creator: false };
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

  const handleNewUserRoleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewUserRole(event.target.value);
  };

  const handleDeleteUser = (email: string) => {
    setSelectedUsers((prevUsers) => prevUsers.filter((user) => user.email !== email));
    setProjetoMembros((prevMembros) => prevMembros.filter((membro) => membro.email !== email));
  };

  return (
    <>
      <S.ModalBackdrop>
        <S.ModalArea>
          <S.ModalContent>
            <S.NameClose>
              <h1>+Incra</h1>
              <button onClick={props.close} style={{ width: 'auto', backgroundColor: 'transparent', border: 'none' }}>
                <img
                  src="close.svg"
                  alt=""
                  height={18}
                  width={18}
                  style={{
                    padding: '5px 5px',
                    backgroundColor: '#090E09',
                    borderRadius: '5px',
                  }}
                />
              </button>
            </S.NameClose>
            <h3>Editar Mebros</h3>
            <form action="">
              <h3>Email</h3>
              <div style={{ display: 'flex', height: '44px', gap: '2em', padding: '1em 0em' }}>
                <div style={{ display: 'flex', borderRadius: '5px', overflow: 'hidden' }}>
                  <input
                    type="text"
                    ref={emailRef}
                    placeholder="Email"
                    style={{
                      width: '100%',
                      paddingLeft: '0.5em',
                      height: '44px',
                      border: 'none',
                      backgroundColor: '#5C6170',
                      color: 'white',
                    }}
                    required
                  />
                  <select
                    value={selectedRole}
                    onChange={handleRoleChange}
                    className={!isRoleSelected ? 'error' : ''}
                    style={{
                      color: 'white',
                      fontSize: '10px',
                      border: 'none',
                      height: '44px',
                      width: 'auto',
                      backgroundColor: '#5C6170',
                    }}
                  >
                    <option value="" disabled>
                      Função
                    </option>
                    {role.map((roles, index) => (
                      <option key={index} value={roles}>
                        {roles}
                      </option>
                    ))}
                  </select>
                </div>

                <button
                  style={{
                    fontSize: '10px',
                    border: 'none',
                    height: '44px',
                    width: '44px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: '5px',
                    overflow: 'hidden',
                    backgroundColor: '#F3802D',
                  }}
                  type="button"
                  onClick={() => {
                    handleEnviar();
                  }}
                >
                  <img src="VectorSend.svg" alt="" style={{ marginLeft: '0.25em' }} />
                </button>
              </div>
              {showError && <p style={{ color: 'red' }}>{errorMessage}</p>}
            </form>
            <S.ChooseLote>
              {selectedUsers.map((user: any) => {
                const projetoMembro = projetoMembros.find((membro) => membro.email === user.email);
                const roleProjeto = projetoMembro ? projetoMembro.roleProjeto : '';
                const creator = projetoMembro ? projetoMembro.creator : '';

                return (
                  <S.Lote
                    key={user.id}
                    style={{
                      backgroundColor: '#090E09',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '2em',
                    }}
                  >
                    <div>
                      <img
                        src={user.url}
                        alt=""
                        height={32}
                        width={32}
                        style={{ objectFit: 'cover', borderRadius: '100%' }}
                      />
                      <p style={{ color: 'white' }}>{user.name}</p>
                    </div>
                    <div>
                      <select
                        value={roleProjeto}
                        onChange={(event) => handleRoleChanges(event, user.email)}
                        style={{
                          color: 'white',
                          padding: '0em 1em',
                          fontSize: '10px',
                          border: 'none',
                          backgroundColor: '#090E09',
                        }}
                      >
                        {role.map((roles, index) => (
                          <option key={index + 3} value={roles}>
                            {roles}
                          </option>
                        ))}
                      </select>
                      {!creator && (
                        <button
                          onClick={() => {
                            handleDeleteUser(user.email);
                          }}
                          style={{ backgroundColor: 'transparent', border: 'none' }}
                        >
                          <img src="VectorDelete.svg" alt="" />
                        </button>
                      )}
                      {creator && <p style={{ color: 'white' }}>Dono</p>}
                    </div>
                  </S.Lote>
                );
              })}
            </S.ChooseLote>
            <S.AtribuirButton
              onClick={() => {
                props.close;
                console.log(projetoMembros);
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
