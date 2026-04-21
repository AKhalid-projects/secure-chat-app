import React from 'react';

export interface AuthContextProps {
  isLoggedIn: boolean;
  setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
  logout: () => Promise<void>;
}

export const AuthContext = React.createContext<AuthContextProps>({
  isLoggedIn: false,
  setIsLoggedIn: () => {},
  logout: async () => {},
});
