import React from 'react'

import { FiSettings, FiLogOut } from "react-icons/fi"

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

            hidden
            md:inline-block
            
            
            bg-gradient-to-l 
            from-blue-300 
            to-blue-200 
            font-semibold 
            w-full 
            h-16 
            active:scale-110'
            > {title} </button>
        )
    }

  return (

    <div className=' navbar

    flex-0
    flex-col



    ' id='navbar'>

        <div class="text-center flex items-end lg:flex-col p-8">
            <img
              src="https://mdbcdn.b-cdn.net/img/new/avatars/8.webp"
              class="rounded-full w-48 mb-4 mx-auto shadow-2xl"
              alt="Avatar"
            />
            <h5 class="text-xl font-medium leading-tight mb-2">John Doe</h5>
            <p class="text-gray-500">Registered Nurse</p>
        </div>

        <div className='buttonCanvas mx-auto flex flex-col gap-1'>

            {Button(handleOpenShifts, "Open Shifts")}
            {Button(handleMyShifts, "My Shifts")}
            {Button(handleProfile, "Profile")}

            <div className='bg-gradient-to-tl from-blue-300 to-blue-200 w-full h-16 shadow-xl rounded-bl-full
            flex justify-center items-center gap-8'>
                <FiSettings size={32} className='hover:animate-spin-slow hover:stroke-blue-600 active:scale-110'/>
                <FiLogOut size={32} className='hover:stroke-blue-600 active:scale-110'/>
            </div>

        </div>
      </div>
  )
}
