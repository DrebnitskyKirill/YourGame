import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux' 
import { ADD_QUESTIONS } from '../../redux/actionTypes/questionsAT'
import Game from '../Game/Game'
// state => state.questions
export default function Questions() {
  const dispatch = useDispatch()
  const {questions} = useSelector(store => store.questions)
  useEffect(() => {
    fetch('http://localhost:4000/questions')
    .then(res => res.json())
    .then(data => dispatch({type: ADD_QUESTIONS, payload: data}))
  },[])


  return (
    <>
    
  {questions.length ? <div>412</div>: questions.map(el => <Game question = {el}/>)}
    </>
  )
}
