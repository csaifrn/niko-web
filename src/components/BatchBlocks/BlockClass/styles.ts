import styled from 'styled-components';

export const BlockGrayBorder = styled.div`
  background-color: ${({ theme }) => theme.colors['gray/500']};
  border: ${({ theme }) => theme.colors['gray/300']} solid 2px;
  height: 2em;
  padding: 0.5em 0 0.5em 0.5em;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5em;
  border-radius: 3px;
`;

export const Button = styled.button`
  transition: all 200ms;
  height: 1.5em;
  width: 2em;
  border-style: outset;
  background-color: transparent;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    background-color: ${({ theme }) => theme.colors['red/500']};
  }
  &:active {
    background-color: ${({ theme }) => theme.colors['red/700']};
    transform: translateY(-5%) translateX(2%);
  }
`;
