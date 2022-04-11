import React, {useState, useEffect} from 'react'

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
            Profile
            </button>
            <button className='font-semibold w-full h-16 bg-gray-200 drop-shadow-lg shadow-xl hover:shadow-inner'>
            Open Shifts
            </button>
            <button className='font-semibold w-full h-16 bg-gray-200 drop-shadow-lg shadow-xl hover:shadow-inner'>
            My Shifts
            </button>
            <button className='font-semibold w-full h-16 bg-gray-200 drop-shadow-lg shadow-xl hover:shadow-inner'>
            Settings / Logout
            </button>
        </div>


      </div>


    </div>
  )
}