// import React from 'react'

// export default function Signup() {
//   return (
//     <div className='w-8 h-8 bg-red-200'>Signup</div>
//   )
// }

import React, {useRef, useState, useEffect} from 'react'
import {Link, Navigate, useNavigate} from 'react-router-dom'

import { useAuth } from '../contexts/AuthContext'

import { auth } from '../firebase'

export default function 
Signup() {

  //Email Input
  const emailRef = useRef()
  const [email, setEmail] = useState("")
  const [emailFlag, setEmailFlag] = useState()

  //Password Input
  const passwordRef = useRef()
  const [password, setPassword] = useState("")
  const [passwordFlag, setPasswordFlag] = useState(false)

  //Password Confirmation Input
  const passwordConfirmRef = useRef()
  const [passwordConfirm, setPasswordConfirm] = useState("")
  const [passwordMatchFlag, setPasswordMatchFlag] = useState(false)
  
  //Destructure Authorization Functionality
  const { currentUser, signup } = useAuth()

  const navigate = useNavigate()
  
  useEffect(() => {

   verify()

  },[password, passwordConfirm])

  //Verify fields are passing
  const verify = () => {

    //set default flag values
    setPasswordFlag(false)
    setPasswordMatchFlag(false)

    //Verify length
    if(passwordRef.current.value.length >= 6) {
      setPasswordFlag(true)
    }
    //Verify match
    if(passwordRef.current.value === passwordConfirmRef.current.value) {
      setPasswordMatchFlag(true)
    }
  }

const handleSubmit = () => {

  //if values pass
  if(passwordFlag === true && passwordMatchFlag === true){
    
    signup(auth, email,password)
      .then(console.log('successfuly signed up'))
      .then(console.log(currentUser))
      .then(navigate('/dashboard'))
    
  }
}

  return (

    <div className="container mx-auto flex flex-col items-center p-4 bg-gray-200 gap-y-4">

      <h1 className='text-2xl'>Signup</h1>

        <h1 className='text-md'>Email</h1>
        <input type="email" placeholder='example@gmail.com' className='h-8 p-1 w-3/4 lg:w-1/2 shadow-sm' 
        value={email} onChange={(e) => setEmail(e.target.value)} ref={emailRef}></input>
        
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
