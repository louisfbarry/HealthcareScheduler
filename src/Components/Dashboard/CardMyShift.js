import React from 'react'

import {FiFile, FiUpload, FiTrash2} from 'react-icons/fi'
import { FcApproval,FcHighPriority } from "react-icons/fc";
import { FcAlarmClock,FcCheckmark } from "react-icons/fc";

export default function CardMyShift() {
  return (
      
    <div className='flex h-12 p-4 gap-4 bg-gray-100 items-center rounded-xl shadow-lg'>
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
  )
}
