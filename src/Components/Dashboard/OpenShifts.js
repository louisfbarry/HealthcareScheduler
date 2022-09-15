import React, { useState, useEffect} from 'react'

import {getDocs, collection} from 'firebase/firestore'
import { db } from '../../firebase';

import OpenShift from './OpenShift';

import {FiFile} from 'react-icons/fi'
import { FcAlarmClock } from "react-icons/fc";
import {AiOutlineDash} from 'react-icons/ai'

import {RiAlertFill} from 'react-icons/ri'
import { data } from 'autoprefixer';

export default function OpenShifts() {

  const [shifts, setShifts] = useState([])

  const tempArray = []

  const populateShifts = async () => {
        
    const querySnapshot = await getDocs(collection(db, "shifts"))
    querySnapshot.forEach((doc) => {
        //facility
        console.log('docId is ' + doc.id)
        console.log(doc.data().shift)
    })        

    
  }

  useEffect(() => {
    populateShifts()
    console.log('shifts is : ' + JSON.stringify(shifts))
  },[])


  // <button className='flex h-12 p-4 gap-4 bg-gray-100 items-center justify-start rounded-xl shadow-lg hover:bg-red-100'>
    
  // <div className='flex'>      
  //     <RiAlertFill className='animate-ping absolute bg-sky-100 opacity-50' color={'#eed202'} size={28}/>
  //     <RiAlertFill className='relative' color={'#eed202'} size={28}/>
  //   </div> 
  //   <FcAlarmClock size={28}/> 
  //   <h1 className='text-3xl font-semibold'>1st Shift</h1>
    

  //   <div className='flex grow justify-between'>
  //     <h1 className='text-xl'>Bloomington Rehabilitation and Healthcare</h1>
      
  //   </div>
    
  //   <div className='flex items-center font-bold pr-8'>
  //     <h1 className='text-3xl '>$ 50 / HR</h1> 
  //   </div>
  // </button>

  // <button className='flex bg-gray-100 h-12 p-4 gap-4 shadow-lg hover:bg-red-100 rounded-xl items-center'>
  // <AiOutlineDash size={28}/>
  //   <FcAlarmClock size={28}/> 
  //   <h1 className='text-3xl font-semibold'>2nd Shift</h1>
    
  //   <div className='flex grow justify-between'>
  //     <h1 className='text-xl'>Heritage Healthcare - Springfield</h1>
      
  //   </div>
  //   <div className='flex items-center font-bold pr-8'>
  //     <h1 className='text-3xl'>$ 45 / HR</h1>
      
  //   </div>
  // </button>

  // <button className='flex bg-gray-100 h-12 p-4 gap-4 shadow-lg hover:bg-red-100 rounded-xl justify-start items-center'>
  // <AiOutlineDash size={28}/>
  //   <FcAlarmClock size={28}/> 
  //   <h1 className='text-3xl font-semibold'>3rd Shift</h1>
   
  //   <div className='flex grow justify-between'>
  //     <h1 className='text-xl'>Heritage Healthcare - Springfield</h1>
      
  //   </div>
  //   <div className='flex grow gap-1 justify-end'>

  //     <div className='flex items-center font-bold pr-8'>
  //       <h1 className='text-3xl'>$ 25 / HR</h1>
  //     </div>
      
  //   </div>
    
  // </button>


  return (
    
    <div className='bg-gray-100 flex flex-col gap-4 p-4 h-full ring-4 rounded-3xl'>

    <div className='flex justify-between place-items-center'>
      
      <div className='text-3xl p-4' id='profile-heading'>Open Shifts</div>
      <button className=' px-6 w-fit h-1/2 ring-4 rounded-full
      focus:bg-gray-200 focus:shadow-md focus:outline-none
      active:bg-blue-300 active:shadow-md active:text-white
      hover:bg-gray-200 hover:shadow-md
      '>Sort</button>
    </div> 

    


  </div>
  )
}
