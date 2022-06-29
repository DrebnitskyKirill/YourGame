import React, { useEffect } from // useEffect
"react";
import { useDispatch } from "react-redux";
import { FIND_QUESTION } from "../../redux/actionTypes/findQuestion"
// import { useDispatch, useSelector } from "react-redux";
// import { useParams } from "react-router-dom";
// import { FIND_QUESTION } from "../../redux/actionTypes/findQuestion";
import "./Modal.css";

export default function Modal({ active, setActive, questions }) {
  const dispatch = useDispatch();
  // const { id } = useParams()
  // const {questions} = useSelector(state=>state.questions)
  // useEffect(()=> {
  //   fetch(`localhost:4000/question/${id}`)
  //   .then(res => res.json())
  //   .then(data => dispatch({ type: FIND_QUESTION, payload: data }));
  // }, [])
  const answer = (e) => {
    e.preventDefault()
    const data = e.target.input.value
    dispatch({type: FIND_QUESTION, payload: {data, questions}})
    setActive()
  }

  return (
    <div className={active ? "modal.active" : "modal"}>
      <div onClick={(e) => e.stopPropagation()}>
        <div className="modal_body">
          <div className="modal_close" >
            &times;
          </div>
          <div className="title">{questions.question}</div>
          <form onSubmit={answer} >
            <input name="input" type="text" className="modal_input" placeholder="Ваш Ответ"/>
            <button className="modal_button">Ответить</button>
          </form>
        </div>
      </div>
    </div>
  );
}
