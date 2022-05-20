import React, { useState } from 'react'
import Modal from '../Modal/Modal'
import './Game.css'
export default function Game({questions}) {
  
  return (
    <>
        <button className='theme' >{questions.questionValue}</button>
       </>
      
    
  )
}
