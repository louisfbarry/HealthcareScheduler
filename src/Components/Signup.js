import React, {useRef, useState, useEffect} from 'react'
import {Link, Navigate, useNavigate} from 'react-router-dom'


//Destructure Authorization Functionality
import { createUserWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { doc, setDoc, onSnapshot, collection } from "firebase/firestore"
import { db } from '../firebase';

import { getAuth } from 'firebase/auth';

//v9 compats
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

//import {auth} from '../firebase'

export default function 
Signup() {

  //Email Input
  const emailRef = useRef()
  const [email, setEmail] = useState("")
  const [emailFlag, setEmailFlag] = useState(false)
 
  //First Name Input
  const firstNameRef = useRef()
  const [firstName, setFirstName] = useState("")

  //Last Name Input
  const lastNameRef = useRef()
  const [lastName, setLastName] = useState("")

  //Password Input
  const passwordRef = useRef()
  const [password, setPassword] = useState("")
  const [passwordFlag, setPasswordFlag] = useState(false)

  //Password Confirmation Input
  const passwordConfirmRef = useRef()
  const [passwordConfirm, setPasswordConfirm] = useState("")
  const [passwordMatchFlag, setPasswordMatchFlag] = useState(false)
    
  const [user, setUser] = useState()
  const auth = getAuth()
  const navigate = useNavigate()

  useEffect(() => {

    //Form input verification
    password.length >= 6 ? setPasswordFlag(true) : setPasswordFlag(false)
    password === passwordConfirm ? setPasswordMatchFlag(true) : setPasswordMatchFlag(false)
    

  },[password, passwordConfirm])


  const handleSubmit = () => {

    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredentials) => {

      const user = userCredentials.user
      console.log(user)
      setDoc(doc(db, "users", user.uid), {
        
        role: "Nurse",
        email: user.email,
        firstName: firstName,
        lastName: lastName
      })
    })
    .then(navigate('/dashboard'))
  }

  return (

    <div className="container mx-auto flex flex-col items-center p-2 bg-gray-200 gap-y-4">

      <h1 className='text-2xl'>Signup</h1>
        {user}
        <h1 className='text-md'>Email</h1>
        <input type="email" placeholder='example@gmail.com' className='h-8 rounded-lg p-1 w-3/4 lg:w-1/2 shadow-sm' 
        value={email} onChange={(e) => setEmail(e.target.value)} ref={emailRef}></input>

        <h1 className='text-md'>First Name</h1>
        <input type="text" placeholder='Name' className='h-8 rounded-lg p-1 w-3/4 lg:w-1/2 shadow-sm' 
        value={firstName} onChange={(e) => setFirstName(e.target.value)} ref={firstNameRef}></input>

        <h1 className='text-md'>Last Name</h1>
        <input type="text" placeholder='Name' className='h-8 rounded-lg p-1 w-3/4 lg:w-1/2 shadow-sm' 
        value={lastName} onChange={(e) => setLastName(e.target.value)} ref={lastNameRef}></input>

        <h1 className='text-md'>Password</h1>
        {!passwordFlag && <p className='text-sm bg-red-400' >Password must be atleast 6 characters</p>}
        <input type="password" className='h-8 rounded-lg w-3/4 lg:w-1/2 shadow-sm' 
        value={password} onChange={(e) => setPassword(e.target.value)} ref={passwordRef}></input>
        
        <h1 className='text-md'>Confirm Password</h1>
        {!passwordMatchFlag && <p className='text-sm bg-red-400'>passwords must match</p>}
        <input type="password" className='h-8 rounded-lg w-3/4 lg:w-1/2 shadow-sm'
        value={passwordConfirm} onChange={(e) => setPasswordConfirm(e.target.value)} ref={passwordConfirmRef}></input>

        <button onClick={handleSubmit}
        className='bg-gradient-to-t from-blue-600 to-blue-300 shadow-xl font-bold py-1.5 w-3/4 px-4 text-center rounded-xl lg:w-24'>Submit</button>

    </div>    

  )
}