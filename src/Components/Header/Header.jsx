import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'

const Header = () => {
  return (
    <div>
      <header>
        <nav>
          <ul>
            <li>
              <Link to='/'>Inicio</Link>
            </li>
            <li>
              <Link to='/series'>Todas las series</Link>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  )
}

export default Header
