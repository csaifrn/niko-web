import styled from 'styled-components';

const Lote = styled.div`
  font-family: 'Rubik';
  border: 0.2px solid #35394a;
  position: relative;
  padding: 0.8em;
  background-color: #393e4b;
  border-radius: 5px;
  color: white;
  min-height: 80px;
  max-width: 400px;
  min-width: 180px;

  filter: drop-shadow(0px 4px 1px rgba(0, 0, 0, 0.25));
`;

const LoteEdit = styled.div`
  font-family: 'Rubik';
  padding: 0.8em;
  background-color: #393e4b;
  border-radius: 5px;
  color: white;
  max-width: 400px;
  min-width: 230px;
  min-height: 200px;
  filter: drop-shadow(0px 4px 1px rgba(0, 0, 0, 0.25));
`;

const LoteArea = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1em;
`;

const Content = styled.div`
  display: flex;
  gap: 2em;
  justify-content: space-between;
  align-left {
    justify-self: left;
  }
`;

const Prioridade = styled.div`
  height: 24px;
  background-color: #dd3b3b;
  border-radius: 3px;
  display: flex;
  justify-content: center;
  align-items: center;
  p {
    color: white;
    margin-bottom: 0;
    padding: 0 0.5em;
  }
`;

const Envolvido = styled.div`
  display: flex;
  margin-left: 10px;
`;

const Categoria = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5em;
`;

const CategoriaTextDiv = styled.div`
  height: 24px;
  background-color: #191c24;
  display: flex;
  justify-content: center;
  align-items: center;

  p {
    color: 'white';
    margin-bottom: '0';
  }
`;

const fotoEnv = styled.img`
  width: 32px;
  height: 32px;
  margin-left: -10px;
  border-radius: 100%;
`;

const Btn = styled.button`
  padding: 0.5em;
  width: 100%;
  height: 44px;
  background-color: #43db6d;
  border-radius: 5px;
  border: none;
  color: white;
  font-weight: bold;
  :hover {
  }
  p {
    font-family: 'Rubik';
    color: #191c24;
  }
`;

export { Lote, LoteArea, Content, Prioridade, Envolvido, Categoria, CategoriaTextDiv, fotoEnv, LoteEdit, Btn };
