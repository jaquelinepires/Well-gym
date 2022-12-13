import { createContext, useEffect, useState } from "react";
import { UserDTO } from "../dtos/UserDTO";
import { api } from "../services/api";
import { storageAuthTokenSave } from "../storage/storageAuthToken";
import { storageUserSave, storageUserGet } from "../storage/storageUser";

export type AuthContextDataProps = {
  user: UserDTO;
  signIn: (email: string, password: string) => Promise<void>;
  isLoadingUserStorageData: boolean;
}
type AuthContextProviderProps = {
  children: React.ReactNode;
}
export const AuthContext = createContext({} as AuthContextDataProps);

export function AuthContextProvider({children}: AuthContextProviderProps) {
  const [user, setUser ] = useState<UserDTO>({} as UserDTO);
  const [ isLoadingUserStorageData, setIsLoadingUserStorageData ] = useState(true)

  async function storageUserAndToken(userData: UserDTO, token: string) {
    try {
      setIsLoadingUserStorageData(true)

      api.defaults.headers.common['Authorization'] = `Bearer ${token}`
     
      await storageUserSave(userData)
      await storageAuthTokenSave(token) 
      setUser(user)

    }catch (error) {
      throw error
    } finally {
      setIsLoadingUserStorageData(false)
    }
  }
  
  async function signIn(email: string, password: string) {
    try{
    const { data } = await api.post('/sessions', {email, password})

    if(data.user && data.token) {
      storageUserAndToken(data.user, data.token)
    }
    } catch (error) {
      throw error
    }
  }
    async function loadUserData() {
      try{
      const userLogged = await storageUserGet()

      if(userLogged) {
        setUser(userLogged)
        setIsLoadingUserStorageData(false)
      }
    } catch (error) {
      throw error
    } finally {
      setIsLoadingUserStorageData(false)
    }
  }
    useEffect(() => {
      loadUserData()
    }, [])
  return (
    <AuthContext.Provider value={{
      user,
      signIn,
      isLoadingUserStorageData
      }}>
      { children }
    </AuthContext.Provider>
  )
}
