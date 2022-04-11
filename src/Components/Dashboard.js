import React, {useState, useEffect} from 'react'
import Navbar from './Navbar'

import 'tw-elements'

import { useAuth } from '../contexts/AuthContext'

export default function Dashboard() {

  const {currentUser} = useAuth()  

  return (

    <div className='mx-auto min-h-fit' id='screen'> 

        <Navbar />

        



    </div>
  )
}