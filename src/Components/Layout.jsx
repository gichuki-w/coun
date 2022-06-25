import React from 'react'
import {Link, Outlet} from 'react-router-dom'

export default function Header() {
  return (
    <nav className='main-nav'>
      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/countries'>Countries</Link>
        </li>
        <li>
          <Link to='/continents'>Continents</Link>
        </li>
        <li>
          <Link to='/about'>About</Link>
        </li>
        <li>
          <Link to='/setting'>Setting</Link>
        </li>
      </ul>
      <Outlet />
    </nav>
  )
}
