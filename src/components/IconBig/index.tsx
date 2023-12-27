import { AssignedUser } from '../../api/services/batches/get-batche/get.interface';
import { generateUUID } from '../../utils/generateUUID.util';
import { BlackBlock } from './style';

export const IconUserBig = ({ name, id }: AssignedUser) => {
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
    <BlackBlock className={`my-tooltip-${random}`}>
      <p style={{color: 'white' }}>{IconInitials}</p>
    </BlackBlock>
  );
};
