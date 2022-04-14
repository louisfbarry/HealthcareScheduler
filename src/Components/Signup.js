import React, {useRef, useState, useEffect} from 'react'
import {Link, Navigate, useNavigate} from 'react-router-dom'


//Destructure Authorization Functionality
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { doc, setDoc, addDoc, onSnapshot, collection } from "firebase/firestore"
import { db } from '../firebase';

//v9 compats
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

import {auth} from '../firebase'

export default function 
Signup() {

  //Email Input
  const emailRef = useRef()
  const [email, setEmail] = useState("")
  const [emailFlag, setEmailFlag] = useState(false)
 
  //Name Input
  const nameRef = useRef()
  const [name, setName] = useState("")


  //Password Input
  const passwordRef = useRef()
  const [password, setPassword] = useState("")
  const [passwordFlag, setPasswordFlag] = useState(false)

  //Password Confirmation Input
  const passwordConfirmRef = useRef()
  const [passwordConfirm, setPasswordConfirm] = useState("")
  const [passwordMatchFlag, setPasswordMatchFlag] = useState(false)
    

  const [user, setUser] = useState()

  const navigate = useNavigate()

  useEffect(() => {

    // onAuthStateChanged(auth, (user) => {
    //   if (user) {       
        
        
        
    // }});

  },[])




  const handleSubmit = () => {

    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredentials) => {

      const user = userCredentials.user
      setDoc(doc(db, "users", user.uid), {
        
        email: user.email,
        firstName: name
        
        
      });

    })
  }

  return (

    <div className="container mx-auto flex flex-col items-center p-4 bg-gray-200 gap-y-4">

      <h1 className='text-2xl'>Signup</h1>
        {user}
        <h1 className='text-md'>Email</h1>
        <input type="email" placeholder='example@gmail.com' className='h-8 p-1 w-3/4 lg:w-1/2 shadow-sm' 
        value={email} onChange={(e) => setEmail(e.target.value)} ref={emailRef}></input>

        <h1 className='text-md'>Name</h1>
        <input type="text" placeholder='Name' className='h-8 p-1 w-3/4 lg:w-1/2 shadow-sm' 
        value={name} onChange={(e) => setName(e.target.value)} ref={nameRef}></input>
        
        <h1 className='text-md'>Password</h1>
        {!passwordFlag && <p className='text-sm'>Password must be atleast 6 characters</p>}
        <input type="password" className='h-8 w-3/4 lg:w-1/2 shadow-sm' 
        value={password} onChange={(e) => setPassword(e.target.value)} ref={passwordRef}></input>
        
        <h1 className='text-md'>Confirm Password</h1>
        {!passwordMatchFlag && <p>passwords must match</p>}
        <input type="password" className='h-8 w-3/4 lg:w-1/2 shadow-sm'
        value={passwordConfirm} onChange={(e) => setPasswordConfirm(e.target.value)} ref={passwordConfirmRef}></input>

        <button onClick={handleSubmit}
        className='bg-red-200 py-1.5 w-3/4 px-4 text-center shadow-lg rounded-lg lg:w-24'>Submit</button>

    </div>    

  )
}