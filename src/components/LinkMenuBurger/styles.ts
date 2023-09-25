import styled from 'styled-components';

interface LinkMenuProps {
  open: boolean;
}

const LinkMenu = styled.a<LinkMenuProps>`
  font-family: 'Rubik';
  border-right: 5px solid transparent;
  border-radius: 1em 0em 0em 1em;
  font-size: 1.5rem;
  padding: 1rem 3em 1rem 1rem;
  color: white;
  text-decoration: none;
  transition: color 0.3s linear;
  z-index: 99;
  background-color: ${({ open }) => (open ? '#0E0F13' : 'transparent')};

  @media (max-width: 576px) {
    font-size: 1.5rem;
  }

  &:hover {
    background-color: #0e0f13;
    border-right: 5px solid #8f5fe8;
  }
`;
export { LinkMenu };
