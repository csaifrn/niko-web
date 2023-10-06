import { ChangeEvent, useEffect, useRef, useState } from 'react';
import Menu from '../../../components/Menu';
import * as Sm from '../../../components/MembrosModal/styles';
import { Membros, Projeto } from '../../../data/ProjetoData';
import { useNavigate } from 'react-router-dom';
import Users from '../../../data/UserData';
import * as S from './styles';

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
  id: number;
  id_Projeto: number;
  email: string;
  roleProjeto: string;
  creator: boolean;
}

const CreateProjeto = () => {
  const users = Users;
  const [contador, setContador] = useState(0);

  const [projetoMembros, setProjetoMembros] = useState<UserMembro[]>([
    {
      id: Membros.length + 1,
      id_Projeto: Projeto.length + 1,
      email: 'pedro@gmail.com',
      roleProjeto: 'Coordenador',
      creator: true,
    },
  ]);

  const role = ['Coordenador', 'Operador'];

  const emailRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  const [selectedUsers, setSelectedUsers] = useState<User[]>([]);
  const [selectedRole, setSelectedRole] = useState<string>('');
  const [isRoleSelected, setIsRoleSelected] = useState(false);

  const [showError, setShowError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    const foundUsers: User[] | null = [];
    for (let index = 0; index < users.length; index++) {
      const user = users[index];
      for (let i = 0; i < projetoMembros.length; i++) {
        const projetoMembro = projetoMembros[i];
        if (projetoMembro.email === user.email) {
          foundUsers.push(user);
          break;
        }
      }
    }
    setSelectedUsers(foundUsers);
  }, [users]);

  const [file, setFile] = useState<File>();

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFile(e.target.files[0]);
    }
    console.log(file);
  };

  const handleEnviar = () => {
    const emailValue = emailRef.current?.value;

    if
     (selectedRole === '') {
      setShowError(true);
      setErrorMessage('Por favor, selecione uma função.');
      return;
    } else {
      setShowError(false);
    }

    let foundUser: User | null = null;
    for (let index = 0; index < users.length; index++) {
      const user = users[index];
      if (user.email === emailValue) {
        foundUser = user;
        break;
      }
    }

    if (foundUser && !selectedUsers.find((user) => user.email === foundUser?.email)) {
      const projetoMembro = projetoMembros.find((membro) => membro.email === foundUser?.email);
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
    <div style={{display: 'flex' , justifyContent: 'center'}}>
      <Menu area="/Projetos"></Menu>
      <S.Wrapper>
        <h1>Criar projeto</h1>
        <S.Head>
          <S.Status>
            <S.BallStatus
              style={{
                backgroundColor: `${contador > 0 ? '#43DB6D' : '#F3802D'}`,
              }}
            >
              {contador > 0 && <img src="Check.svg" alt="" height={18} width={18} />}
            </S.BallStatus>
            <h3>Detalhes</h3>
          </S.Status>

          <S.Status>
            <S.BallStatus
              style={{
                backgroundColor: `${contador > 1 ? '#43DB6D' : '#F3802D'}`,
              }}
            ></S.BallStatus>
            <h3>Membros</h3>
          </S.Status>
        </S.Head>
        <form action="">
          {contador === 0 && (
            <S.ContainerForm>
              <S.LabelForm htmlFor="imagem">
                <img src="Img.svg" alt="Imagem" height={32} width={32} />
              </S.LabelForm>
              <input type="file" accept="image/*" id="imagem" style={{ display: 'none' }} onChange={handleFileChange} />
              <label htmlFor="nome">
                <h2>Nome</h2>
              </label>
              <S.InputText type="text" placeholder="nome" />
              <S.ContentButtonGreen>
                <S.ButtonGreen onClick={() => setContador(contador + 1)}>Avançar</S.ButtonGreen>
              </S.ContentButtonGreen>
              
            </S.ContainerForm>
          )}
          {contador === 1 && (
            <S.ContainerForm>
              <S.ContainerForm>
                <S.AdressContainer>
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
                </S.AdressContainer>
                {showError && <p style={{ color: 'red' }}>{errorMessage}</p>}
                <Sm.ChooseLote>
                  {selectedUsers.map((user: any) => {
                    const projetoMembro = projetoMembros.find((membro) => membro.email === user.email);
                    const roleProjeto = projetoMembro ? projetoMembro.roleProjeto : '';
                    const creator = projetoMembro ? projetoMembro.creator : false;

                    return (
                      <Sm.Lote
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
                          <select value={roleProjeto} onChange={(event) => handleRoleChanges(event, user.email)}>
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
                      </Sm.Lote>
                    );
                  })}
                </Sm.ChooseLote>
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
                  onClick={() => {
                    navigate('/Projetos');
                  }}
                  style={{
                    border: 'none',
                    color: '#191C24',
                    borderRadius: '5px',
                    height: '44px',
                    fontFamily: 'Rubik',
                    backgroundColor: '#43DB6D',
                  }}
                >
                  Criar Projeto
                </button>
              </S.ContainerForm>
            </S.ContainerForm>
          )}
        </form>
      </S.Wrapper>
    </div>
  );
};

export default CreateProjeto;
