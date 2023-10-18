import styled from 'styled-components';
import media from 'styled-media-query';

const DataUser = styled.div`
  display: flex;
  color: white;
  font-family: 'Rubik';
  justify-content: space-between;
  gap: 3em;
  padding: 2em;
  ${media.greaterThan('large')`
    justify-content: start;
    gap: 1em;
  `}
`;

const SideUser = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1em;
  ${media.greaterThan('large')`
    display: grid;
    grid-template-columns: repeat(3, 1fr)
  `}
`;

const Fase = styled.div`
  display: flex;
  gap: 1em;
`;

const Icon = styled.img`
  height: 28px;
  width: 28px;
  ${media.greaterThan('large')`
    height: 46px;
    width: 46px;
  `}
`;

const TotalFase = styled.p`
  color: white;
`;

const PerecentageFase = styled.p`
  color: #c3c3c3;
  font-size: 10px;
`;

export { Fase, SideUser, Icon, TotalFase, PerecentageFase, DataUser };
