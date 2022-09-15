import React, {useEffect, useState} from 'react'

import {CgArrowRightO} from 'react-icons/cg'
import {FaTools} from 'react-icons/fa'
import {BsClipboardCheck} from 'react-icons/bs'
import {SiFirebase, SiReact, SiLinkedin, SiGithub} from 'react-icons/si'
import Card from './Card'
import Signup from './Signup'

import { useNavigate } from 'react-router-dom'

export default function LandingPage({children}) {

    return (
      <>
        <div className='landingpage
            
            
            w-screen
            sm:max-h-96
            pt-4
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
            pt-24
            text-sm
            justify-center
            h-screen
            w-screen
        '>

            <div className='
              flex 
              flex-col
              gap-6
              '>
              <div className='flex 
                items-center
                gap-2'>
                <SiFirebase className='' size={90} color={'#F5820D'}/>
                <p>This project uses Firebase for user authentication.<br></br>
                User data is stored in Firestore, a cloud database enviroment provided by Firebase.
                </p>
              </div>
              <div className='
                flex 
                items-center
                gap-2'>
                <SiReact className='' size={90} color={'#61dbfb'}/>
                <p>The core technology used in this application's frontend is React.</p>
              </div>
              <div className='
              flex 
              justify-center
              gap-6'>

                <SiGithub size={64} />
                <SiLinkedin size={64} />
              </div>
            </div>


        </div>
    </>
  )
}
