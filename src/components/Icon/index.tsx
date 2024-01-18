import { Tooltip } from 'react-tooltip';
import { AssignedUser } from '../../api/services/batches/get-batche/get.interface';
import { generateUUID } from '../../utils/generateUUID.util';
import styled from 'styled-components';

interface Props {
  name: string;
  id: string;
  fontSize?: number;
  size?: number;
}

export const IconUser = ({ name, id, size = 24, fontSize = 12 }: Props) => {
  function getInitials(name: string): string {
    const nameParts = name.split(' ');
    let initials = '';

    for (let i = 0; i < Math.min(nameParts.length, 2); i++) {
      const part = nameParts[i];
      if (part.length > 0) {
        initials += part[0];
      }
    }

    return initials;
  }

  const IconInitials = getInitials(name);
  const random = generateUUID();

  return (
    <BlackBlock
      style={{
        borderRadius: '100%',
        width: `${size}px`,
        height: `${size}px`,
        padding: '0',
      }}
      className={`my-tooltip-${random}`}
    >
      <p style={{ fontSize: `${fontSize}px` }}>{IconInitials}</p>
      <Tooltip anchorSelect={`.my-tooltip-${random}`} children={<p>{name}</p>} place="top" />
    </BlackBlock>
  );
};

const BlackBlock = styled.div`
  background-color: ${({ theme }) => theme.colors['gray/700']};
  display: flex;
  justify-content: center;
  align-items: center;
  :hover div {
    visibility: visible;
    opacity: 1;
    display: block;
  }
`;
