import React, { useState } from 'react'
import Modal from '../Modal/Modal'
import './Game.css'
export default function Game() {
  const [modalActive, setModalActive] = useState(false)
  return (
    <div className="wrapper">
      <div className='board'>
        <div className='first' >title</div>
        <button className='theme' >title</button>
       
      
      </div>
      <Modal active={modalActive} setActive={setModalActive}/>
    </div>
  )
}
