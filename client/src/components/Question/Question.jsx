import React, { useState } from 'react';
import Modal from '../Modal/Modal';

function Question() {
  const obj = {question: 'Serega',

}
  const {active, setActive} = useState(false) 
  return (
    <div>
      <div onClick={()=>setActive(true)}>200</div>
      {active && <Modal {}/>}
    </div>
  ); 
}

export default Question;
