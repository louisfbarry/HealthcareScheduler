import React from 'react'

import {FiFile, FiUpload, FiTrash2} from 'react-icons/fi'
import { FcApproval,FcHighPriority } from "react-icons/fc";

export default function Profile() {


  //min-h-screen max-h-screen w-full

  //flex flex-col bg-red-200 h-full p-2

  return (

    <div className='flex flex-col gap-4 p-4 h-full'>

      <div className='text-3xl p-4' id='profile-heading'>My Profile</div>

      
      <div className='flex h-12 p-4 gap-4 bg-gray-100 items-center rounded-xl shadow-lg rounded'>
        <FcApproval size={28}/> 
        <FiFile size={28}/>

        <div className='flex grow justify-between'>
          <h1 className='text-xl'>Healthcare License Upload</h1>
          <p>File name...</p>
        </div>
        
        <div className='flex grow gap-1 justify-end'>
          <FiUpload className='hover:animate-bounce-slow' size={28}/>
          <FiTrash2 size={28}/>
        </div>
      </div>

        
      
      <div className='flex bg-gray-100 h-12 p-4 gap-4 shadow-lg rounded-xl items-center'>
        <FcHighPriority size={28}/> 
        <FiFile size={28}/>
        <div className='flex grow justify-between'>
          <h1 className='text-xl'>CPR Certification Upload</h1>
          <p>File name...</p>
        </div>
        <div className='flex grow gap-1 justify-end'>
          <FiUpload className='hover:animate-bounce-slow' size={28}/>
          <FiTrash2 size={28}/>
        </div>
        
      </div>
      

      <div className='flex bg-gray-100 h-12 p-4 gap-4 shadow-lg rounded-xl items-center'>
        <FcHighPriority size={28}/> 
        <FiFile size={28}/>
        <div className='flex grow justify-between'>
          <h1 className='text-xl'>Vaccine Card Upload</h1>
          <p>File name...</p>
        </div>
        <div className='flex grow gap-1 justify-end'>
          <FiUpload className='hover:animate-bounce-slow' size={28}/>
          <FiTrash2 size={28}/>
        </div>
      </div>







    </div>

  
    
  )
}
