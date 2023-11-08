import styled from 'styled-components';

export const BlockAssigner = styled.div`
  background-color: ${({ theme }) => theme.colors['white']};
  overflow: hidden;
  height: 2em;
  padding: 0 0 0 0.5em;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5em;

  border-radius: 3px;
`;

export const NameAssigner = styled.p`
  color: ${({ theme }) => theme.colors['gray/700']};
`;

export const DeleteAssigner = styled.button`
  background-color: ${({ theme }) => theme.colors['white']};
  color: ${({ theme }) => theme.colors['gray/700']};

  height: 2em;
  padding: 0 0.5em;

  border: none;

  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: #ffaa95;
  }
  &:active {
    background-color: ${({ theme }) => theme.colors['red/300']};
    transform: translateY(-5%) translateX(2%);
  }
`;
