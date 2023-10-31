import { SetStateAction } from 'react';
import { UserProps } from './user.interface';

export interface SharedStateContextProps {
  user: UserProps | null;
  setUser: React.Dispatch<SetStateAction<UserProps | null>>;
}
