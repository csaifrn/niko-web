import { ChangeEvent, useEffect, useRef, useState } from 'react';
import Menu from '../../../components/Menu';
import * as S from '../../../components/MembrosModal/styles';
import { Membros, Projeto } from '../../../data/ProjetoData';
import { useAuthUser } from 'react-auth-kit';

interface User {
  id: number;
  name: string;
  url: string;
  email: string;
  lote: string;
  fase: string;
}

interface UserMembro {
  id: number;
  id_Projeto: number;
  email: string;
  roleProjeto: string;
  creator: boolean;
}

interface MembrosModalProps {
  users: User[];
}

const CreateProjeto = (props: MembrosModalProps) => {
  const [contador, setContador] = useState(0);
  const auth = useAuthUser();
  const [projetoMembros, setProjetoMembros] = useState<UserMembro[]>([
    {
      id: Membros.length + 1,
      id_Projeto: Projeto.length + 1,
      email: auth()?.email,
      roleProjeto: 'Coordenador',
      creator: true,
    },
  ]);
  console.log(projetoMembros);

  const role = ['Coordenador', 'Operador'];

  const emailRef = useRef<HTMLInputElement>(null);

  const [selectedUsers, setSelectedUsers] = useState<User[]>([]);
  const [selectedRole, setSelectedRole] = useState<string>('');
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

  const [file, setFile] = useState<File>();

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFile(e.target.files[0]);
    }
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
        id: projetoMembros.length + 1,
        id_Projeto: Projeto.length + 1,
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
      <Menu area="/Projetos"></Menu>
      <div style={{ fontFamily: 'Rubik', padding: '2em', display: 'grid', gap: '2em', color: '#fff' }}>
        <h1 style={{}}>Criar projeto</h1>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-evenly', gap: '2em' }}>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '1em',
              flexDirection: 'column',
            }}
          >
            <div
              style={{
                height: '32px',
                width: '32px',
                borderRadius: '100%',
                backgroundColor: `${contador > 0 ? '#43DB6D' : '#F3802D'}`,
                transition: '200ms all',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              {contador > 0 && <img src="Check.svg" alt="" height={18} width={18} />}
            </div>
            <h3>Detalhes</h3>
          </div>

          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '1em',
              flexDirection: 'column',
            }}
          >
            <div
              style={{
                height: '32px',
                width: '32px',
                borderRadius: '100%',
                backgroundColor: `${contador > 1 ? '#43DB6D' : '#F3802D'}`,
              }}
            ></div>
            <h3>Membros</h3>
          </div>
        </div>
        <form action="">
          {contador === 0 && (
            <div style={{ display: 'grid', gap: '2em' }}>
              <label
                htmlFor="imagem"
                style={{
                  display: 'flex',
                  height: '150px',
                  border: 'dashed 1px #fff',
                  borderRadius: '5px',
                  alignItems: 'center',
                  justifyContent: 'center',
                  background: 'rgba(57, 62, 75, 0.5)',
                }}
              >
                <img src="Img.svg" alt="Imagem" height={32} width={32} />
              </label>
              <input type="file" accept="image/*" id="imagem" style={{ display: 'none' }} onChange={handleFileChange} />
              <label htmlFor="nome">
                <h2>Nome</h2>
              </label>
              <input
                type="text"
                placeholder="Nome"
                style={{
                  boxSizing: 'border-box',
                  height: '44px',
                  width: '100%',
                  padding: '0 1em',
                  borderRadius: '5px',
                  border: 'none',
                  backgroundColor: '#5C6170',
                }}
              />
              <button
                onClick={() => setContador(contador + 1)}
                style={{
                  border: 'none',
                  color: '#191C24',
                  borderRadius: '5px',
                  height: '44px',
                  width: '100%',
                  fontFamily: 'Rubik',
                  backgroundColor: '#43DB6D',
                }}
              >
                Avançar
              </button>
            </div>
          )}
          {contador === 1 && (
            <div style={{ display: 'grid', gap: '2em' }}>
              <div style={{ display: 'grid', gap: '2em' }}>
                <div
                  style={{
                    display: 'grid',
                    height: '44px',
                    gap: '2em',
                    gridTemplateColumns: '30fr 1fr',
                  }}
                >
                  <div style={{ display: 'flex', borderRadius: '5px', width: '100%' }}>
                    <input
                      type="text"
                      ref={emailRef}
                      placeholder="Email"
                      style={{
                        paddingLeft: '0.5em',
                        height: '44px',
                        border: 'none',
                        width: '100%',
                        backgroundColor: '#5C6170',
                        color: 'white',
                        borderRadius: '5px 0 0 5px',
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
                        borderRadius: '0 5px 5px 0',
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
                <S.ChooseLote>
                  {selectedUsers.map((user: any) => {
                    const projetoMembro = projetoMembros.find((membro) => membro.email === user.email);
                    const roleProjeto = projetoMembro ? projetoMembro.roleProjeto : '';
                    const creator = projetoMembro ? projetoMembro.creator : false;

                    return (
                      <S.Lote
                        key={user.id}
                        style={{
                          backgroundColor: '#393E4B',
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
                        <div style={{ display: 'flex', justifyContent: 'flex-end', width: '100%' }}>
                          <select
                            value={roleProjeto}
                            onChange={(event) => handleRoleChanges(event, user.email)}
                            style={{
                              color: 'white',
                              padding: '0em 1em',
                              fontSize: '10px',
                              border: 'none',
                              backgroundColor: '#393E4B',
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
                <button
                  onClick={() => setContador(contador - 1)}
                  style={{
                    border: 'none',
                    color: '#fff',
                    borderRadius: '5px',
                    height: '44px',
                    fontFamily: 'Rubik',
                    backgroundColor: '#393E4B',
                  }}
                >
                  Voltar
                </button>
                <button
                  onClick={() => {}}
                  style={{
                    border: 'none',
                    color: '#191C24',
                    borderRadius: '5px',
                    height: '44px',
                    fontFamily: 'Rubik',
                    backgroundColor: '#43DB6D',
                  }}
                >
                  Salvar
                </button>
              </div>
            </div>
          )}
        </form>
      </div>
    </>
  );
};

export default CreateProjeto;
