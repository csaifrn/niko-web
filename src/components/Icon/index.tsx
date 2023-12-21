import { Tooltip } from 'react-tooltip';
import { BlackBlock } from '../Lote/styles';
import { AssignedUser } from '../../api/services/batches/get-batche/get.interface';
import { generateUUID } from '../../utils/generateUUID.util';

export const IconUser = ({ name, id }: AssignedUser) => {
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
    <BlackBlock style={{ borderRadius: '100%', width: '2em' }} className={`my-tooltip-${random}`}>
      <p style={{ padding: '0 0.5em' }}>{IconInitials}</p>
      <Tooltip anchorSelect={`.my-tooltip-${random}`} children={<p>{name}</p>} place="top" />
    </BlackBlock>
  );
};
