import { AlignCenter } from '../../../global';

const Unauthorized = () => {
  return (
    <AlignCenter>
      <img src="/Unauthorized.svg" alt="Erro 404" height={'50%'} />
      <div style={{ backgroundColor: '#F3802D', padding: '1em', borderRadius: '5px' }}>
        <a href="/Projetos" style={{ color: 'white', textDecoration: 'none' }}>
          Voltar a homepage
        </a>
      </div>
    </AlignCenter>
  );
};

export default Unauthorized;
