import { createContext, useState, useEffect, ReactNode } from 'react'
import { auth, firebase, getAuth, signOut } from '../services/firebase'

type User = {
  id: string;
  name: string;
}

type AuthContextType = {
  user: User | undefined;
  signInWithGoogle: () => Promise<void>;
  signOutOfTheApp: () => Promise<void>;
}

type AuthContextProviderProps = {
  children: ReactNode;
}

export const AuthContext = createContext({} as AuthContextType)

export function AuthContextProvider(props: AuthContextProviderProps){
  const [user, setUser] = useState<User>()
  
  useEffect(() =>{
    const unsubscribe = auth.onAuthStateChanged(user =>{
      if(user){
        const { displayName, uid } = user
  
        if(!displayName){
          throw new Error('Missing information from google account.')
        }
  
        setUser({
          id: uid,
          name: displayName
        })
      }
    })
  
    return () =>{
      unsubscribe()
    }
  
  }, [])
  
  async function signInWithGoogle(){
    const provider = new firebase.auth.GoogleAuthProvider()
  
    const result = await auth.signInWithPopup(provider);
  
    if(result.user){
      const { displayName, uid } = result.user
  
      if(!displayName){
        throw new Error('Missing information from google account.')
      }
  
      setUser({
        id: uid,
        name: displayName
      })
  
    }
  }

  async function signOutOfTheApp(){
    const auth = getAuth()
    signOut(auth).then(() =>{
      setUser(undefined)
      console.log('sucesso')
    }).catch((error) =>{
      console.log(error)
    })
  }

  return (
    <AuthContext.Provider value={{ user, signInWithGoogle, signOutOfTheApp }}>
      {props.children}
    </AuthContext.Provider>
  )

}
