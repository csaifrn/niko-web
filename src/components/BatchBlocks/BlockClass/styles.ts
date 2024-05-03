import styled from 'styled-components';

export const BlockGrayBorder = styled.div`
  background-color: ${({ theme }) => theme.colors['gray/500']};
  border: solid 1px ${({ theme }) => theme.colors['gray/200']};
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
  height: 22px;
  border-radius: 0px 2px 2px 0px;
  padding: 0 0.5em;
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

export const ConteudoClassTag = styled.div`
  display: flex;
  gap: 8px;
`;

export const PriorityIcon = styled.div`
  height: 15px;
  width: 15px;
`;
