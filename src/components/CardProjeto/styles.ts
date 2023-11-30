import styled from 'styled-components';

const CardContainer = styled.a`
  text-decoration: none;
  font-family: 'Rubik';
  font-size: 16px;
  background-color: ${({ theme }) => theme.colors['gray/500']};
  &:hover {
    filter: brightness(0.9);
  }
  text-decoration: none;
  color: white;
`;

export const CardProjeto = styled.div`
  border-radius: 5px;
  display: flex;
  width: 100%;
  min-height: 200px;
  flex-wrap: wrap;
  transition: 1s all;
`;

export const DivImgProjeto = styled.div`
  display: flex;
`;

export const ImgProjeto = styled.img`
  display: flex;
  border-radius: 5px 5px 0 0;
  object-fit: cover;
`;

export const DivContentProjeto = styled.div`
  background-color: ${({ theme }) => theme.colors['gray/500']};
  display: flex;
  padding: 1em;
  justify-content: space-between;
  align-items: center;
  border-radius: 0 0 5px 5px;
`;

export const ThreeDotProjeto = styled.div`
  border-radius: 100%;
  padding: 1em;
  background-color: transparent;
  border: none;
  &:hover {
    filter: brightness(0.9);
  }
`;

export const LinkContainer = styled.a`
  text-decoration: none;
  color: white;
  flex-direction: column;
  width: 100%;
  display: grid;
  grid-template-rows: 1.5fr 0.5fr;
  border: none;
  border-radius: 5px;
`;

export const MenuThreeDots = styled.div`
  border-radius: 5px;
  position: absolute;
  right: 0;
  background-color: ${({ theme }) => theme.colors['gray/500']};
  min-width: 120px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  color: ${({ theme }) => theme.colors.white};
  border: solid 1px #4a5565;
`;

export const ButtonMenuThree = styled.button`
  color: ${({ theme }) => theme.colors.white};
  background-color: transparent;
  width: 100%;
  border: none;
  padding: 12px 16px;
  font-family: Rubik;
  font-size: 12;
  text-decoration: none;
  display: block;
  text-align: left;
  cursor: pointer;
`;

export const DivButtonMenuThree = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.5em;
`;

export { CardContainer };
