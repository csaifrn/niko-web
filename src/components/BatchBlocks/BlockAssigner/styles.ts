import styled from 'styled-components';

export const BlockAssigner = styled.div`
  background-color: ${({ theme }) => theme.colors['gray/200']};
  overflow: hidden;
  height: 2em;
  padding: 0 0 0 0.5em;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 3px;
`;

export const NameAssigner = styled.p`
  padding-right: 0.5em;
  color: ${({ theme }) => theme.colors['gray/700']};
`;

export const DeleteAssigner = styled.button`
  background-color: transparent;

  color: ${({ theme }) => theme.colors['gray/700']};

  transition: 0.2s all;

  height: 2em;
  padding: 0 0.5em;

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
