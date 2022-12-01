import { createContext } from "react";
import { UserDTO } from "../dtos/UserDTO";

export type AuthContextDataProps = {
  user: UserDTO;
}
type AuthContextProviderProps = {
  children: React.ReactNode;
}
export const AuthContext = createContext({} as AuthContextDataProps);

export function AuthContextProvider({children}: AuthContextProviderProps) {
  return (
    <AuthContext.Provider value={{
      user: {
      id: '1',
      name: 'John Doe',
      email: 'johndoe@gmail.com',
      avatar: 'john.png'
      }
    }}>
      { children }
    </AuthContext.Provider>
  )
}
