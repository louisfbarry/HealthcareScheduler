import React from 'react'

import { FiSettings, FiLogOut } from "react-icons/fi"
import { GiHamburgerMenu } from "react-icons/gi";

export default function Navbar({setNavState}) {

    const handleOpenShifts = (e) => {
        e.preventDefault()
        setNavState(1)
        console.log('content state changed to open shifts from navbar')
    }

    const handleMyShifts = (e) => {
        e.preventDefault()
        setNavState(2)
        console.log('content state changed to my shifts')
    }

    const handleProfile = (e) => {
        e.preventDefault()
        setNavState(3)
        console.log('content state changed to profile shifts')
    }

    const Button = (handleFn, title) => {

        return (
            <button 
            onClick={handleFn}
            className='navbutton          
            bg-gradient-to-l 
            from-blue-300 
            to-blue-200 
            font-semibold 
            
            h-16 
            active:scale-110'
            > {title} </button>
        )
    }

  return (

    <div className=' navbar
    
    
    
    ' id='navbar'>

        <div class="items-center justify-between pl-2 pt-2 gap-6 flex lg:flex-col">
            <img
              src="https://mdbcdn.b-cdn.net/img/new/avatars/8.webp"
              class="profile-image
              
              
              rounded-full 
              self-center 
              mb-4 
              w-12 
              sm:w-64 
              shadow-2xl"
              alt="Avatar"
            />
            <h5 class="text-2xl font-medium leading-tight mb-2">John Doe</h5>
            <p class="text-gray-500 truncate hidden sm:contents">Registered Nurse</p>
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
            bg-gradient-to-tl 
            from-blue-300 
            to-blue-200 
            w-full h-16 shadow-xl rounded-bl-full
            flex justify-center items-center gap-8'>
                <FiSettings size={32} className='hover:animate-spin-slow hover:stroke-blue-600 active:scale-110'/>
                <FiLogOut size={32} className='hover:stroke-blue-600 active:scale-110'/>
            </div>

        </div>
      </div>
  )
}
