import React, {useContext, useState, useEffect, createContext} from 'react'

import {auth} from '../firebase'
import { createUserWithEmailAndPassword, onAuthStateChanged, setPersistence } from 'firebase/auth'

const AuthContext = createContext()

export function useAuth() {
    return useContext(AuthContext)
}

export function AuthProvider({children}) {

    const [currentUser, setCurrentUser] = useState()

    useEffect(() => {


        onAuthStateChanged(auth, (user) => {
            setCurrentUser(user)
        })

    },[])
   

    async function signup(auth, email, password){
        await createUserWithEmailAndPassword(auth, email, password)
        console.log('user created')
    }

    async function login(auth, email, password){
        await login
    }

    const value= {
        
        currentUser,
        signup
    }

  return (
    <AuthContext.Provider value={value}>
        {children}
    </AuthContext.Provider>
  )
}
