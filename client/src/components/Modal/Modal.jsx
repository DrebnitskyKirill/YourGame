import React, { 
  // useEffect 
} from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { useParams } from "react-router-dom";
// import { FIND_QUESTION } from "../../redux/actionTypes/findQuestion";
import "./Modal.css";

export default function Modal({active, setActive, question}) {
  // const dispatch = useDispatch();
  // const { id } = useParams()
  // const {questions} = useSelector(state=>state.questions)
  // useEffect(()=> {
  //   fetch(`localhost:4000/question/${id}`)
  //   .then(res => res.json())
  //   .then(data => dispatch({ type: FIND_QUESTION, payload: data }));
  // }, [])
  return (
    <div className={active ? 'modal.active' : "modal"} onClick={()=> setActive(false)}>
      <div onClick={e => e.stopPropagation()}>
        {question}
      </div>
      <input type="text" />
    </div>
  );
}
