import { ChangeEvent, useEffect, useRef, useState } from 'react';
import Menu from '../../../components/Menu';
import * as Sm from '../../../components/MembrosModal/styles';
import { Membros, Projeto } from '../../../data/ProjetoData';
import { useNavigate } from 'react-router-dom';
import Users from '../../../data/UserData';
import * as S from './styles';
import theme from '../../../global/theme';

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

  const roleFuncoes = [
    { id: 1, label: 'Coordenador' },
    { id: 2, label: 'Operador' },
  ];

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

    if (selectedRole === '') {
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
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <Menu area="/Projetos"></Menu>
      <S.Wrapper>
        <h1>Criar projeto</h1>
        <S.Head>
          <S.Status>
            <S.BallStatus
              style={{
                backgroundColor: `${contador > 0 ? theme.colors['green/400'] : theme.colors['orange/400']}`,
              }}
            >
              {contador > 0 && <img src="Check.svg" alt="" height={18} width={18} />}
            </S.BallStatus>
            <h3>Detalhes</h3>
          </S.Status>

          <S.Status>
            <S.BallStatus
              style={{
                backgroundColor: `${contador > 1 ? theme.colors['green/400'] : theme.colors['orange/400']}`,
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
              <S.InputText type="text" placeholder="Projeto de digitalização..." />
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
                        backgroundColor: theme.colors['gray/400'],
                        color: 'white',
                        fontFamily: 'Rubik',
                        borderRadius: '5px 0 0 5px',
                      }}
                      required
                    />

                    <S.EscolherFuncao
                      options={roleFuncoes}
                      className="react-select-container"
                      classNamePrefix="react-select"
                    />

                    {/* <select
                      value={selectedRole}
                      onChange={handleRoleChange}
                      className={!isRoleSelected ? 'error' : ''}
                      style={{
                        color: 'white',
                        fontSize: '10px',
                        border: 'none',
                        height: '44px',
                        width: 'auto',
                        backgroundColor: theme.colors[gray/400],
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
                    </select> */}
                  </div>

                  <S.ButtonEnviar
                    type="button"
                    onClick={() => {
                      handleEnviar();
                    }}
                  >
                    <img src="VectorSend.svg" alt="" style={{ marginLeft: '0.25em' }} />
                  </S.ButtonEnviar>
                </S.AdressContainer>
                {showError && <p style={{ color: 'red' }}>{errorMessage}</p>}
                <Sm.MembrosDiv></Sm.MembrosDiv>
                <S.ButtonGray onClick={() => setContador(contador - 1)}>Voltar</S.ButtonGray>
                <S.ButtonGreen
                  onClick={() => {
                    navigate('/Projetos');
                  }}
                >
                  Criar Projeto
                </S.ButtonGreen>
              </S.ContainerForm>
            </S.ContainerForm>
          )}
        </form>
      </S.Wrapper>
    </div>
  );
};

export default CreateProjeto;
