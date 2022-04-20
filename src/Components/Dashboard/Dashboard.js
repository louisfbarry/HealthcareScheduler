import React, {useState, useEffect} from 'react'

import Navbar from './Navbar'
import MyShifts from './MyShifts'
import OpenShifts from './OpenShifts'
import Profile from './Profile'
import { getAuth, onAuthStateChanged } from "firebase/auth";

import { doc, getDoc } from 'firebase/firestore'

import {auth, db} from '../../firebase'

import 'tw-elements'

import { render } from 'react-dom'

export default function Dashboard({children}) {
    
    const [navState, setNavState] = useState(1)
    const [user, setUser] = useState()
    const [firstName, setFirstName] = useState()
    
    const [lastName, setLastName] = useState()
    
    const [role, setRole] = useState()


    // populate with generic uid ?

    const read = async (col, uid) => {

        const docRef = doc(db, col, uid)
        const docSnap = await getDoc(docRef)
        const data = docSnap.exists() ? docSnap.data() : console.log('no docSnap data')

        console.log(data)
        setFirstName(data.firstName)
        setLastName(data.lastName)
        setRole(data.role)

    }
 

    useEffect(() => {

        //render dashboard type
        switch(navState){
            case 1: openShifts(); break;
            case 2: myShifts(); break;
            case 3: profile(); break;
            default: console.log('default case')
        }

        //retrieve uid
        //populate credentials with user info
        onAuthStateChanged(auth, (userCredentials) => {
            if (userCredentials) {
                //find user uid
                const uid = userCredentials.uid
               
                const user = read('users', uid)

             
                

                
                
                //parse user data
            
               // docSnap ? console.log('docsnap is : ' + docSnap.data()) : console.log('docSnap empty')

                
          }});

    },[navState, auth])

    const openShifts = () => {
        
        render(<OpenShifts user={user}/>, document.getElementById('dashboard-content'))   
    }

    const myShifts = () => {
        
        render(<MyShifts user={user}/>, document.getElementById('dashboard-content'))
    }

    const profile = () => {
        
        render(<Profile user={user}/>, document.getElementById('dashboard-content'))
    }


  return (

    <div className='dashboard
        sm:flex 
        max-h-screen 
        max-w-screen' id='dashboard'> 
        <Navbar setNavState={setNavState} firstName={firstName} lastName={lastName} role={role}/>
        <div className='w-full p-28 justify-items-center' id='dashboard-content'/>

    </div>
  )
}