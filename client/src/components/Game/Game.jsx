
// import React, { useState } from "react";
// import Modal from "../Modal/Modal";
// import "./Game.css";
// export default function Game({ questions }) {
//   const [state, setState] = useState("notOk");
//   const notActive = () => {
//     if (state === "notOk") {
//       setState("ok");
//     }
//   };
  
//   return (
//     <>
//       <button onClick={notActive} className="theme">
//         <a className={state}>{questions.questionValue}</a>
//       </button>
//     </>
//   );

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
