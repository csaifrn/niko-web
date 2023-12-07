import styled from 'styled-components';

interface LinkMenuProps {
  open: boolean;
}

const LinkMenu = styled.a<LinkMenuProps>`
  font-family: 'Rubik';
  border-right: 5px solid transparent;
  border-radius: 1em 0em 0em 1em;
  font-size: 1.5rem;
  padding: 1rem 3em 1rem 2rem;
  color: white;
  text-decoration: none;
  transition: all 0.1s linear;
  z-index: 99;
  background-color: ${({ open }) => (open ? ({ theme }) => theme.colors['gray/900'] : 'transparent')};

  @media (max-width: 576px) {
    font-size: 1.5rem;
  }

  &:hover {
    background-color: ${({ theme }) => theme.colors['gray/900']};
    border-right: 5px solid ${({ theme }) => theme.colors['orange/500']};
  }
`;
export { LinkMenu };
