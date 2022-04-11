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
        
        render(<OpenShifts />, document.getElementById('content'))   
    }

    const myShifts = () => {
        
        render(<MyShifts />, document.getElementById('content'))
    }

    const profile = () => {
        
        render(<Profile />, document.getElementById('content'))
    }


  return (

    <div className='mx-auto min-h-fit' id='screen'> 

        <Navbar setNavState={setNavState}/>
        <div id='content' />

    </div>
  )
}