import React from 'react'
import { Link } from 'react-router-dom'



function Header() {
  return (
    <div className='header'>
        <Link to='/'>Home</Link>
        <Link to='/zakazi'>Zakazi</Link>
        <Link to='/mojiTermini'>Moji Termini</Link>
    </div>
  )
}

export default Header