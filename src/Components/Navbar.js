import React from 'react'

import { FiSettings, FiLogOut } from "react-icons/fi"

export default function Navbar() {
  return (

    <div className='mx-auto max-h-full lg:w-1/4 bg-gray-200 lg:h-screen float-left' id='navbar'>
        <div class="text-center p-8">
            <img
              src="https://mdbcdn.b-cdn.net/img/new/avatars/8.webp"
              class="rounded-full w-48 mb-4 mx-auto"
              alt="Avatar"
            />
            <h5 class="text-xl font-medium leading-tight mb-2">John Doe</h5>
            <p class="text-gray-500">Registered Nurse</p>
        </div>
        <div className='mx-auto flex flex-col gap-1 p-2'>
            <button className='font-semibold w-full h-16 bg-gray-200 drop-shadow-lg shadow-xl hover:shadow-inner'>
            Open Shifts
            </button>
            <button className='font-semibold w-full h-16 bg-gray-200 drop-shadow-lg shadow-xl hover:shadow-inner'>
            My Shifts
            </button>
            <button className='font-semibold w-full h-16 bg-gray-200 drop-shadow-lg shadow-xl hover:shadow-inner'>
            Profile
            </button>
            <div className='w-full h-16 bg-gray-200 drop-shadow-lg shadow-xl 
            flex justify-center items-center gap-8'>
            <FiSettings size={32} className='hover:animate-spin-slow hover:h-12'/>
            <FiLogOut size={32} onClick={console.log('clicked')} className='hover:animate-bounce-slow'/>
            </div>
        </div>
      </div>
  )
}
