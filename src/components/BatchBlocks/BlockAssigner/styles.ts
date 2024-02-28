import styled from 'styled-components';

export const BlockAssigner = styled.div`
  background-color: ${({ theme }) => theme.colors['gray/200']};
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 3px;
`;

export const ConteudoBlockAssigner = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  margin: 0.8em;
`;

export const PhotoAssigner = styled.img`
  width: 36px;
  height: 36px;
  border-radius: 100%;
`;

export const BlackBlock = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  :hover div {
    visibility: visible;
    opacity: 1;
    display: block;
  }
`;

export const NameAssigner = styled.p`
  color: ${({ theme }) => theme.colors['gray/700']};
`;

export const DeleteAssigner = styled.button`
  background-color: transparent;
  color: ${({ theme }) => theme.colors['gray/700']};
  transition: 0.2s all;
  padding: 0 1em;
  height: 55.2px;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    color: ${({ theme }) => theme.colors['white']};
    background-color: ${({ theme }) => theme.colors['red/500']};
  }
  &:active {
    background-color: ${({ theme }) => theme.colors['red/700']};
    transform: translateY(-5%) translateX(2%);
  }
`;
