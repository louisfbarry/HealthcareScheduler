import React, {useEffect, useState} from 'react'

import { FiSettings, FiLogOut } from "react-icons/fi"
import { GiHamburgerMenu } from "react-icons/gi";

export default function Navbar({setNavState, user}) {

console.log('user firstname is from navbar')

    
    const [currentUser, setCurrentUser] = useState({
        firstName: "John",
        lastName: "Doe",
        role: "Registered Nurse"
    })

    useEffect(() => {

        if(user){            
            const {firstName, lastName, role} = user
            setCurrentUser(user)
        }
    },[user])

    const handleOpenShifts = (e) => {
        e.preventDefault()
        setNavState("OPEN_SHIFTS")
        console.log('content state changed to open shifts from navbar')
    }

    const handleMyShifts = (e) => {
        e.preventDefault()
        setNavState('MY_SHIFTS')
        console.log('content state changed to my shifts')
    }

    const handleProfile = (e) => {
        e.preventDefault()
        setNavState('PROFILE')
        console.log('content state changed to profile shifts')
    }

    const Button = (handleFn, title) => {

        return (
            <button 
            onClick={handleFn}
            className='navbutton
            subpixel-antialiased          
            bg-gradient-to-tr
            from-blue-600 
            to-blue-300
            font-bold 
            active:bg-gradient-bl
            active:from-blue-300
            active:to-blue-600       
            active:scale-95
            h-16'
            > {title} </button>
        )
    }

  return (

    <div className=' navbar  
    
    ' id='navbar'>

        <div className="items-center justify-between pl-2 pt-2 gap-6 flex lg:flex-col">
            <img
              src="https://mdbcdn.b-cdn.net/img/new/avatars/8.webp"
              className="profile-image
              rounded-full 
              self-center 
              mb-4 
              w-12 
              sm:w-64 
              shadow-2xl"
              alt="Avatar"
            />
            <h5 className="text-2xl font-medium leading-tight mb-2">
                {currentUser.firstName + " " + currentUser.lastName}
            </h5>
            <p className="text-gray-500 truncate hidden sm:contents">{currentUser.role}</p>
            <div className='flex '>   
                <GiHamburgerMenu className='hamburger-menu 
                    sm:hidden
                    w-12
                    h-12
                    border-black
                    rounded-lg
                    active:border-4
                    '/>
            </div>
        </div>

        <div className='buttonCanvas 
            flex
            flex-col
        '>

            {Button(handleOpenShifts, "Open Shifts")}
            {Button(handleMyShifts, "My Shifts")}
            {Button(handleProfile, "Profile")}

            <div className='
            bg-gradient-to-tr 
             from-blue-600 
             to-blue-300 
            w-full h-16 shadow-xl rounded-bl-full
            flex justify-center items-center gap-8'>
                <FiSettings size={32} className='hover:animate-spin-slow hover:stroke-blue-600 active:scale-110'/>
                <FiLogOut size={32} className='hover:stroke-blue-600 active:scale-110'/>
            </div>
        </div>
      </div>
  )
}
