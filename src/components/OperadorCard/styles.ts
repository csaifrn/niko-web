import styled from 'styled-components';

const totalArea = styled.div`
  background-color: ${({ theme }) => theme.colors['gray/500']};
  align-items: center;
  color: white;
  font-family: 'Rubik';
  border-radius: 5px;
`;

const CardArea = styled.div`
  display: flex;
  background-color: ${({ theme }) => theme.colors['gray/500']};
  align-items: center;
  justify-content: space-between;
  color: white;
  font-family: 'Rubik';
  border-radius: 5px;
`;
const CardA = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1.5em 2em;
  background-color: ${({ theme }) => theme.colors['gray/500']};
  gap: 2em;
  font-family: 'Rubik';
  border-radius: 5px;
`;

const dataUser = styled.div`
  display: flex;
  align-items: center;
  gap: 1em;
`;
const dataLote = styled.div`
  display: flex;
  align-items: center;
  gap: 1em;
`;
const textLote = styled.p`
  display: flex;
  align-items: center;
  height: 32px;
  padding: 0em 1em;
  color: white;
  background-color: ${({ theme }) => theme.colors['gray/700']};
  border-radius: 5px;
`;
interface IFooter {
  setHeight: number;
}

const Footer = styled.div<IFooter>`
  border-top: 1px solid transparent;
  width: 100%;
  height: 0px;
  display: flex;
  flex-direction: column;
  transition: all 0.3s ease-in-out;
  overflow: hidden;
  span {
    padding: 12px 0;
  }

  .accodion {
    padding: 2em;
  }
  .padding {
    padding: 0em 2em 2em 2em;
  }

  &.show {
    border-top: 1px solid ${({ theme }) => theme.colors['gray/400']};
    height: ${({ setHeight }) => setHeight}px;
  }
`;

const DataUser = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 3em;
`;

const SideUser = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1em;
`;

const Fase = styled.div`
  display: flex;
  gap: 1em;
`;

const Icon = styled.img`
  height: 18px;
  width: 18px;
`;

const TotalFase = styled.p`
  color: white;
`;

const PerecentageFase = styled.p`
  color: ${({ theme }) => theme.colors['gray/50']};
  font-size: 10px;
`;

const ButtonAtribuir = styled.button`
  height: 44px;
  width: 100%;
  border: none;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.colors['gray/700']};
  color: white;
  display: flex;
  align-items: center;
  padding: 0em 1em;
  gap: 1em;
  font-family: 'Rubik';
`;

export {
  CardArea,
  dataUser,
  dataLote,
  textLote,
  Footer,
  totalArea,
  SideUser,
  DataUser,
  Icon,
  TotalFase,
  PerecentageFase,
  Fase,
  ButtonAtribuir,
  CardA,
};
