import React, {useState, useEffect} from 'react'

import Navbar from './Navbar'
import MyShifts from './MyShifts'
import OpenShifts from './OpenShifts'
import Profile from './Profile/Profile'
import { onAuthStateChanged } from "firebase/auth";

import { doc, getDoc } from 'firebase/firestore'

import {auth, db} from '../../firebase'

import 'tw-elements'

import { render } from 'react-dom'

export default function Dashboard({}) {

    const PROFILE = Symbol('PROFILE')
    const MY_SHIFTS = Symbol('MY_SHIFTS')
    const OPEN_SHIFTS = Symbol('OPEN_SHIFTS')
    
    const [navState, setNavState] = useState(PROFILE)
    const [user, setUser] = useState()

    //Function that populates fields with current user specific data
    const populateUser = async (col, uid) => {

        const docRef = doc(db, col, uid)
        const docSnap = await getDoc(docRef)
        const data = docSnap.exists() ? docSnap.data() : console.log('no docSnap data')

        setUser({
            firstName: data.firstName,
            lastName: data.lastName,
            role: data.role
        })
    }

    useEffect(() => {

        //render dashboard type
        switch(navState){
            case "OPEN_SHIFTS": {   
                render(<OpenShifts user={user}/>, document.getElementById('dashboard-content'))
            }; break;
            case "MY_SHIFTS": {
                render(<MyShifts user={user}/>, document.getElementById('dashboard-content'))
            }; break;
            case "PROFILE": {
                render(<Profile user={user}/>, document.getElementById('dashboard-content'))
            }; break;
            default: console.log('default case')
        }

        //retrieve uid
        //populate credentials with user info
        onAuthStateChanged(auth, (userCredentials) => {

            if (userCredentials) {
                //find user uid
                const uid = userCredentials.uid
                populateUser('users', uid)         
          }});

    },[navState, auth])


  return (

    <div className='dashboard
        sm:flex 
        max-h-screen 
        max-w-screen' id='dashboard'> 
        <Navbar setNavState={setNavState} user={user}/>
        <div className='w-full p-28 justify-items-center' id='dashboard-content'/>
    </div>
  )
}