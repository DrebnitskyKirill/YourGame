import React from 'react'
import { Link} from 'react-router-dom'
export default function Nav() {
  return (
    <>
  <nav>
    <div class="nav-wrapper">
      <a href="#" class="brand-logo">Своя игра</a>
      <ul id="nav-mobile" class="right hide-on-med-and-down">
      <li><Link to='/'><a href="collapsible.html">Новая игра</a></Link></li>
      <li><Link to='/login'><a href="collapsible.html">Авторизация</a></Link></li>
        <li><Link to='/registration'><a href="collapsible.html">Регистрация</a></Link></li>
      </ul>
    </div>
  </nav>
  </>
  )
}
