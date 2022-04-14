import React, {useContext, useState, useEffect, createContext} from 'react'

import firebase from 'firebase/compat/app'
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const AuthContext = createContext()

export function useAuth() {
    return useContext(AuthContext)
}

export function AuthProvider({children}) {

//firebase.auth().onAuthStateChanged()

    useEffect(() => {

        
    },[])
   





  return (
    <AuthContext.Provider >
        {children}
    </AuthContext.Provider>
  )
}
