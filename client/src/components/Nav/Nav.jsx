import React from 'react'
import { useSelector } from 'react-redux'
import { Link} from 'react-router-dom'
export default function Nav() {
  const {user}=useSelector(state=>state.user)
  return (
    <>
  <nav>
    <div class="nav-wrapper indigo darken-4">
      <a href="/" class="brand-logo" style={{color:"yellow"}}>Своя игра</a>
      <ul id="nav-mobile" class="right hide-on-med-and-down">
     { user.length > 0 ? <><li><Link to='/'><a href="collapsible.html" style={{color:"yellow"}}>Новая игра</a></Link></li>
     <li><Link to='/logout'><a href="collapsible.html" style={{color:"yellow"}}>Выйти</a></Link></li></>
      :
     <> <li><Link to='/login'><a href="collapsible.html" style={{color:"yellow"}}>Авторизация</a></Link></li>
        <li><Link to='/registration'><a href="collapsible.html" style={{color:"yellow"}}>Регистрация</a></Link></li></>}
      </ul>
    </div>
  </nav>
  </>
  )
}
