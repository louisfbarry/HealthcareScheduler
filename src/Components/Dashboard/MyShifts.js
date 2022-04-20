import React from 'react'

import {FiFile, FiUpload, FiTrash2} from 'react-icons/fi'
import { FcApproval,FcHighPriority } from "react-icons/fc";
import { FcAlarmClock,FcCheckmark } from "react-icons/fc";


export default function MyShifts() {
  return (
    <div className='bg-gradient-to-t from-gray-200 to-gray-300 flex flex-col gap-4 p-4 h-full rounded-3xl'>

      <div className='flex place-items-center'>
        
          <h1 className='text-3xl p-4' id='profile-heading'>My Shifts</h1>
          <button className=' px-6 w-fit h-1/2 ring-4 rounded-full
          focus:bg-gray-200 focus:shadow-md focus:outline-none
          active:bg-blue-300 active:shadow-md active:text-white
          hover:bg-gray-200 hover:shadow-md
          '>Calender</button>
          <button className=' px-6 w-fit h-1/2 ring-4 rounded-full
          focus:bg-gray-200 focus:shadow-md focus:outline-none
          active:bg-blue-300 active:shadow-md active:text-white
          hover:bg-gray-200 hover:shadow-md
          '>Sort</button>
      </div>

      
      <div className='flex h-12 p-4 gap-4 bg-gray-100 items-center rounded-xl shadow-lg rounded'>
        <FcAlarmClock size={28}/> 
        <FiFile size={28}/>

        <div className='flex grow justify-between'>
          <h1 className='text-xl'>Healthcare License Upload</h1>
          
        </div>
        
        <div className='flex grow gap-1 justify-end'>
          <FiUpload className='hover:stroke-blue-600 active:scale-110' size={28}/>
          <FiTrash2 size={28}/>
        </div>
      </div>

      <div className='flex bg-gray-100 h-12 p-4 gap-4 shadow-lg rounded-xl items-center'>
        <FcAlarmClock size={28}/> 
        <FiFile size={28}/>
        <div className='flex grow justify-between'>
          <h1 className='text-xl'>CPR Certification Upload</h1>
          
        </div>
        <div className='flex grow gap-1 justify-end'>
          <FiUpload className='hover:stroke-blue-600 active:scale-110' size={28}/>
          <FiTrash2 size={28}/>
        </div>
        
      </div>
      



    <div className='flex bg-gray-100 h-12 p-4 gap-4 shadow-lg rounded-xl items-center hover:blur-sm'>
      <FcCheckmark size={28}/> 
      <FiFile size={28}/>
      <div className='flex grow justify-between '>
        <h1 className='text-xl'>The Loft - Normal</h1>
        
      </div>
      <div className='flex grow gap-1 justify-end'>
        <FiUpload className='hover:stroke-blue-600' size={28}/>
        <FiTrash2 size={28}/>
      </div>
    </div>
    </div>

  )
}
