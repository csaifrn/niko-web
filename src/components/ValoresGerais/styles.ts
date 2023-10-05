import styled from 'styled-components';
import media from 'styled-media-query';

export const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 2em;
`;

export const ContainerValorGeral = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1em;
  ${media.greaterThan('large')`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
  `}
`;

export const ValorGeral = styled.div`
  padding: 1.5em;
  background-color: ${({ theme }) => theme.colors['gray/500']};
  display: flex;
  gap: 1em;
  align-items: center;
  border-radius: 5px;
`;

export const Text = styled.p`
  color: #fff;
  font-family: Rubik;
  font-size: 16px;
`;

export const TituloH3 = styled.p`
  font-family: Rubik;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
`;

export const TextBlue = styled.span`
  color: ${({ theme }) => theme.colors['blue/400']};
`;
export const TextGreen = styled.span`
  color: ${({ theme }) => theme.colors['green/400']};
`;
export const TextPurple = styled.span`
  color: ${({ theme }) => theme.colors['purple/600']};
`;

export const TituloH2 = styled.p`
  color: ${({ theme }) => theme.colors.white};
  font-family: Rubik;
  font-size: 22px;
  font-weight: bold;
`;
