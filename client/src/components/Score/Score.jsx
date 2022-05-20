import React from 'react'
import { useDispatch, useSelector } from 'react-redux';

export default function Score() {
  const dispatch = useDispatch();
  const { questions } = useSelector((store) => store.questions);
  
  return (
    <>
    
    </>
  )
}
