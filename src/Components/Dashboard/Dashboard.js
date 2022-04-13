import React, {useState, useEffect} from 'react'

import Navbar from './Navbar'
import MyShifts from './MyShifts'
import OpenShifts from './OpenShifts'
import Profile from './Profile'

import 'tw-elements'

import { render } from 'react-dom'

export default function Dashboard({children}) {
    
    const [navState, setNavState] = useState(1)
    const [state, setState] = useState()


    useEffect(() => {

        switch(navState){
            case 1: openShifts(); break;
            case 2: myShifts(); break;
            case 3: profile(); break;
            default: console.log('default case')
        }

    },[navState])

    const openShifts = () => {
        
        render(<OpenShifts />, document.getElementById('dashboard-content'))   
    }

    const myShifts = () => {
        
        render(<MyShifts />, document.getElementById('dashboard-content'))
    }

    const profile = () => {
        
        render(<Profile />, document.getElementById('dashboard-content'))
    }


  return (

    <div className='dashboard
    sm:flex 
    max-h-screen 
    max-w-screen' id='dashboard'> 

        <Navbar setNavState={setNavState}/>
        <div class='w-full p-28 justify-items-center' id='dashboard-content'/>

    </div>
  )
}