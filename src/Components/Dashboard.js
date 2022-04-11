import React, {useState, useEffect} from 'react'

import { FiSettings, FiLogOut } from "react-icons/fi"
import 'tw-elements'

import { useAuth } from '../contexts/AuthContext'

export default function Dashboard() {

  const {currentUser} = useAuth()  

  return (

    <div className='mx-auto overflow-auto w-screen h-screen'> 
      <div className='mx-auto max-h-full lg:w-1/4 bg-gray-200 lg:h-screen float-left'>
        <div class="text-center m-8">
            <img
              src="https://mdbcdn.b-cdn.net/img/new/avatars/8.webp"
              class="rounded-full w-48 mb-4 mx-auto"
              alt="Avatar"
            />
            <h5 class="text-xl font-medium leading-tight mb-2">John Doe</h5>
            <p class="text-gray-500">Web designer</p>
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
            <FiSettings size={32} className='hover:animate-spin hover:h-12'/>
            <FiLogOut size={32} onClick={console.log('clicked')} className='hover:animate-bounce'/>
            </div>
            
        </div>


      </div>


    </div>
  )
}