import React, {useEffect, useState} from 'react'
import { useNavigate } from 'react-router-dom'

export default function Card({icon, heading, page}) {

  const navigate = useNavigate()

  return (
    <button className='card
                flex
                flex-col
                items-center
                justify-center
                h-64
                w-64
                rounded-3xl
                bg-gradient-to-tr
                from-blue-600
                to-blue-300
                shadow-xl
                hover:scale-105
                active:scale-95'
                onClick={() => navigate(`${page}`)}>
                <h1 className='text-xl font-bold'>{heading}</h1>
                {icon}
    </button>
  )
}
