
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Logout() {
 const dispatch=useDispatch()
 const navigation=useNavigate()
  useEffect(()=>{
fetch("http://localhost:4000/logout")
dispatch({type:"LOGOUT"})
navigation('/')

  },[])
  return (
   <></>
  )
}


