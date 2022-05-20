import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Game from '../Game/Game';
import Question from '../Question/Question';
import { ADD_QUESTIONS } from '../../redux/actionTypes/questionsAT';




function GameOrQuestion () {

  const dispatch = useDispatch()
  const {questions} = useSelector(store => store.questions)
  const {status} = useSelector()

  useEffect(()=> {
    fetch(process.env.REACT_APP_QUESTIONS)
    .then(res => res.json())
    .then(data => dispatch({type: ADD_QUESTIONS, payload: data}))
  }, [])

  return (
    <div className="wrapper">
      { status ? questions.map(questions=><Game questions={questions} /> ) :  <Question questions={questions}/>}
    </div>
  );
}

export default GameOrQuestion;
