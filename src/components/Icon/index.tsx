import { Tooltip } from 'react-tooltip';
import { AssignedUser } from '../../api/services/batches/get-batche/get.interface';
import { generateUUID } from '../../utils/generateUUID.util';
import styled from 'styled-components';
import theme from '../../global/theme';
import { Photo } from '../../api/services/users/me/me.interface';

interface Props {
  name: string;
  fontSize?: number;
  size?: number;
  color?: string;
  tooloff?: boolean;
  photo?: Photo | undefined;
}

export const IconUser = ({ name, size = 24, fontSize = 12, color, tooloff = false, photo }: Props) => {
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

  if (photo) {
    return (
      <DivImgUser
        style={{
          width: `${size}px`,
          height: `${size}px`,
        }}
        className={`my-tooltip-${random}-img`}
      >
        <ImgUser src={photo.url} />
        {!tooloff && <Tooltip anchorSelect={`.my-tooltip-${random}-img`} children={<p>{name}</p>} place="top" />}
      </DivImgUser>
    );
  } else {
    return (
      <BlackBlock
        style={{
          borderRadius: '100%',
          width: `${size}px`,
          height: `${size}px`,
          padding: '0',
          backgroundColor: `${color ? color : theme.colors['gray/700']}`,
        }}
        className={`my-tooltip-${random}`}
      >
        <p style={{ fontSize: `${fontSize}px`, color: theme.colors['white'], fontFamily: 'Rubik' }}>{IconInitials}</p>
        {!tooloff && <Tooltip anchorSelect={`.my-tooltip-${random}`} children={<p>{name}</p>} place="top" />}
      </BlackBlock>
    );
  }
};

const BlackBlock = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  :hover div {
    visibility: visible;
    opacity: 1;
    display: block;
  }
`;

const ImgUser = styled.img`
  border-radius: 100%;
  width: 100%;
  height: 100%;
  object-fit: cover;

  :hover div {
    visibility: visible;
    opacity: 1;
    display: block;
  }
`;

const DivImgUser = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  :hover div {
    visibility: visible;
    opacity: 1;
    display: block;
  }
`;
