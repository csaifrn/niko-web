import { Card } from '../../../components/Card';
import MenuCoord from '../../../components/MenuCoord';
import Menu from '../../../components/Menu';
import { useAuthUser } from 'react-auth-kit';
import { AlignCenter, Main, Title, Wrapper } from '../../../global';

const Erro404 = () => {
  //const {user, loading, logOut} = useFirebaseAuth();

  //if (loading){
  //  return <p>Loading please wait.......</p>
  //}

  // <Btn onClick={logOut}>Log Out</Btn>

  return (
    <AlignCenter>
      <img src="/404.svg" alt="Erro 404" height={'50%'} />
      <div style={{ backgroundColor: '#F3802D', padding: '1em', borderRadius: '5px' }}>
        <a href="/Projetos" style={{ color: 'white', textDecoration: 'none' }}>
          Voltar a homepage
        </a>
      </div>
    </AlignCenter>
  );
};

export default Erro404;
