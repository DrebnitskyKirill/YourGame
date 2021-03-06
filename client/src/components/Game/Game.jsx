
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
import { useSelector } from 'react-redux';
import Modal from '../Modal/Modal'
import './Game.css'
// import { Link } from 'react-router-dom'

export default function Game({questions}) {
  const { rightQuestion } = useSelector((store) => store.findQuestion);
  const {user}=useSelector(state=>state.user)
  console.log(user)

  const [modalActive, setModalActive] = useState(false)  
  return (
    <div>
    <div className='zag'>{questions.zag}</div>
      <button className='theme' onClick={()=> setModalActive(true)}>{questions.questionValue}</button>
      <Modal active={modalActive} setActive={()=>setModalActive(false)} questions={questions}></Modal>
    </div>

  )

}
