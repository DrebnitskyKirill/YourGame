import React, { useEffect } from "react";
import './Questions.css'
import { useDispatch, useSelector } from "react-redux";
import { ADD_QUESTIONS } from "../../redux/actionTypes/questionsAT";
import Game from "../Game/Game";
export default function Questions() {
  const dispatch = useDispatch();
  const { questions } = useSelector((store) => store.questions);
  console.log(questions);
  useEffect(() => {
    fetch("http://localhost:4000/questions")
      .then((res) => res.json())
      .then((data) => dispatch({ type: ADD_QUESTIONS, payload: data }));
  }, []);

  return (
    <div className="wrapper">
      <div className="board">
       
          
          {questions.map((el) => (
            <Game key={el.id} questions={el} />
          ))}
        
      </div>
    </div>
  );
}
