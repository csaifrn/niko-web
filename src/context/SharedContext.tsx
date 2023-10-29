import React, { useState, createContext, useContext } from 'react';
import jwtDecode from 'jwt-decode';
import { UserProps } from './interfaces/user.interface';
import { SharedStateContextProps } from './interfaces/shared-state.interface';

const MyContext = createContext<SharedStateContextProps>({
  user: null,
  setUser: () => {},
});

export const UseSharedState = ({ children }: { children: React.ReactNode }) => {
  const token = localStorage?.getItem('token');
  const defaultUser: UserProps | null = token ? jwtDecode(token) : null;
  const [user, setUser] = useState<UserProps | null>(defaultUser);

  return (
    <MyContext.Provider
      value={{
        user,
        setUser,
      }}
    >
      {children}
    </MyContext.Provider>
  );
};

export const SharedState = () => {
  const context = useContext(MyContext);
  if (!context) {
    console.error('Context is not defined');
  }
  const { user, setUser } = context;
  return {
    user,
    setUser,
  };
};
