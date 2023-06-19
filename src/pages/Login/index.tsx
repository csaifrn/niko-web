// import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import * as S from './styles';
import { useSignIn } from 'react-auth-kit';

const Login = () => {
  const [resgisterEmail, setRegisterEmail] = useState('');
  const [resgisterPassword, setRegisterPassword] = useState('');
  const signIn = useSignIn();

  const user = { email: resgisterEmail, password: resgisterPassword };

  // const auth = getAuth();

  const navigate = useNavigate();

  const handleSignUp = async () => {
    //   try{
    //     const user = await signInWithEmailAndPassword(auth, resgisterEmail, resgisterPassword)
    //     console.log("Created", user)
    //     if(user != null)
    //     {
    //         navigate('/');
    //     }
    //   } catch (err) {
    //     console.log(err)
    //   }
    try {
      axios.post('http://localhost:3333/auth/sign-in', user).then((response: any) => {
        const token = response.data.token;
        // const role = [123, 231];
        const user = response.data.user;
        const role = ['Coordenador'];

        signIn({
          token: token,
          expiresIn: 3600,
          tokenType: 'Bearer',
          authState: { user, role, email: resgisterEmail },
        });

        navigate('/Fase');
      });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <S.backgroundContainer>
        <S.itemsContainer>
          <S.logo alt="Logo" src="Logo_Niko.svg"></S.logo>
          <S.formLogin>
            <S.dataArea>
              <S.labelLogin>Email</S.labelLogin>
              <S.inputLogin
                placeholder="Email"
                onChange={(event) => {
                  setRegisterEmail(event.target.value);
                }}
              ></S.inputLogin>
            </S.dataArea>
            <S.dataArea>
              <S.labelLogin>Senha</S.labelLogin>
              <S.inputLogin
                type="password"
                placeholder="Senha"
                onChange={(event) => {
                  setRegisterPassword(event.target.value);
                }}
              ></S.inputLogin>
              <S.dangerText>Esqueceu a senha?</S.dangerText>
            </S.dataArea>
          </S.formLogin>
          <S.btnLogin onClick={handleSignUp}>Entrar</S.btnLogin>
        </S.itemsContainer>
      </S.backgroundContainer>
    </>
  );
};

export default Login;
