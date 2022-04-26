import React from 'react'

import { auth } from '../../firebase';

import CardMyShift from './CardMyShift';
import Card from '../Card';


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

      <CardMyShift/>
      <CardMyShift/>
      <CardMyShift/>


    </div>

  )
}
