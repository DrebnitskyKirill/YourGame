import React, { useState } from 'react'
import Modal from '../Modal/Modal'
import './Game.css'
// import { Link } from 'react-router-dom'

export default function Game({question}) {
  const {modalActive, setModalActive} = useState()  
  return (
    <div>
      <button className='open-btn' onClick={()=> setModalActive(true)}></button>
      {/* <Link to={`questions/${question.id}`} className='theme' >{question.questionValue}</Link> */}
      <Modal active={modalActive} setActive={setModalActive} question={question}></Modal>
    </div>

  )
}
