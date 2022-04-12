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
        console.log('content state changed to my shifts ')
        

    }

    const handleProfile = (e) => {
        e.preventDefault()
        setNavState(3)
        console.log('content state changed to profile shifts')
    }

  return (

    <div className=' lg:w-1/4 h-screen bg-gray-100 min-h-screen bg-gradient-to-r from-gray-200 to-blue-100' id='navbar'>
        <div class="text-center p-8">
            <img
              src="https://mdbcdn.b-cdn.net/img/new/avatars/8.webp"
              class="rounded-full w-48 mb-4 mx-auto shadow-2xl"
              alt="Avatar"
            />
            <h5 class="text-xl font-medium leading-tight mb-2">John Doe</h5>
            <p class="text-gray-500">Registered Nurse</p>
        </div>

        <div className='mx-auto flex flex-col divide-y-2 gap-1 p-2'>
        <button className='font-semibold w-full h-16 hover:shadow-inner active:scale-110'
            
            
            onClick={handleOpenShifts}>
            Open Shifts
            </button>
            <button className='font-semibold w-full h-16 hover:shadow-inner active:scale-110'
            onClick={handleMyShifts}>
            My Shifts
            </button>
            <button className='font-semibold w-full h-16 hover:shadow-inner active:scale-110'
            onClick={handleProfile}>
            Profile
            </button>
            <div className='w-full h-16 shadow-xl rounded-bl-full
            flex justify-center items-center gap-8'>
            <FiSettings size={32} className='hover:animate-spin-slow hover:stroke-blue-600 active:scale-110'/>
            <FiLogOut size={32} className='hover:stroke-blue-600 active:scale-110'/>
            </div>
        </div>
      </div>
  )
}
