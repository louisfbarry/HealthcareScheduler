import React, {useEffect, useState} from 'react'

import {CgArrowRightO} from 'react-icons/cg'
import {FaTools} from 'react-icons/fa'
import {BsClipboardCheck} from 'react-icons/bs'
import Card from './Card'
import Signup from './Signup'

import { useNavigate } from 'react-router-dom'

export default function LandingPage({children}) {


    const navigate = useNavigate()

    return (
      <>
        <div className='landingpage
            
            w-screen
            sm:max-h-96
            lg:h-screen
            flex
            flex-col
            justify-center
            items-center
            gap-20
            sm:flex-row
            bg-red-500
            '>
            
            <Card icon={<FaTools size={64}/>} heading={'Demo Mode'} page={'/Dashboard'}/>
            <Card icon={<BsClipboardCheck size={64}/>} heading={'Signup'} page={'/Signup'}/>
            <Card icon={<CgArrowRightO size={64}/>} heading={'Login'} page={'/Login'}/>
        
        </div>
        <div className='description
            flex
            pt-44
            text-3xl
            justify-center
            h-screen
            w-screen
        '>

            firebase and react react logo. the capabilities of this app

        </div>
    </>
  )
}
