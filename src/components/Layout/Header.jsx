import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <header>
      <div>
        <NavLink to="/usemutation-in-react-query/"> TanStack Query </NavLink>
        <ul>
          <li><NavLink to="/usemutation-in-react-query/">Home</NavLink></li>
          <li><NavLink to="/usemutation-in-react-query/trad">FetchOld</NavLink></li>
          <li><NavLink to="/usemutation-in-react-query/rq">FetchRQ</NavLink></li>
        </ul>
      </div>
    </header>
  )
}

export default Header