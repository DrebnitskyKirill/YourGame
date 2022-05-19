import React from "react";
import "./Modal.css";

export default function Modal({active, setActive}) {
  return (
    <div className={active ? "modal.active" : "modal"} onClick={()=> setActive(false)}>
      <div className="modalContent" onClick={e => e.stopPropagation()}>
      Title
      <input placeholder="Ваш ответ"/>
      <button className="btn disabled">Ответить</button>
      </div>
    </div>
  );
}
