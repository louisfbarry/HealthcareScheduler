import React from 'react'
import {FiFile} from 'react-icons/fi'
import { FcAlarmClock } from "react-icons/fc";
import {AiOutlineDash} from 'react-icons/ai'

import {RiAlertFill} from 'react-icons/ri'

export default function OpenShift({facility, shift}) {

  return (

    <button className='flex bg-gray-100 h-12 p-4 gap-4 shadow-lg hover:bg-red-100 rounded-xl items-center'>
    <AiOutlineDash size={28}/>
      <FcAlarmClock size={28}/> 
      <h1 className='text-3xl font-semibold'>{shift}</h1>
      
      <div className='flex grow justify-between'>
        <h1 className='text-xl'>{facility}</h1>
        
      </div>
      <div className='flex items-center font-bold pr-8'>
        <h1 className='text-3xl'>$ 45 / HR</h1>
        
      </div>
    </button>
  )
}
