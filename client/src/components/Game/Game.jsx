import React, { useState } from "react";
import Modal from "../Modal/Modal";
import "./Game.css";
export default function Game({ questions }) {
  const [state, setState] = useState("notOk");
  const notActive = () => {
    if (state === "notOk") {
      setState("ok");
    }
  };
  return (
    <>
      <button onClick={notActive} className="theme">
        <a className={state}>{questions.questionValue}</a>
      </button>
    </>
  );
}
