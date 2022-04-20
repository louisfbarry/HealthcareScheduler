import React, {useEffect} from 'react'
import { onAuthStateChanged } from 'firebase/auth';
import CardCredentials from './CardCredentials';


import Card from '../../Card';

export default function Profile({user}) {



  return (

    <div className='bg-gradient-to-t from-gray-200 to-gray-300 flex flex-col gap-4 p-4 h-full rounded-3xl'>

      <div className='text-3xl p-4' id='profile-heading'>My Profile</div>

      <CardCredentials title={'Healthcare License Certificate'} file={true}/>
      <CardCredentials title={'CPR Certification Photo'} file={false}/>
      <CardCredentials title={'Vaccine Card Upload'}  file={false}/>



    </div>

  
    
  )
}
