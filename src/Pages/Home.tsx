import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className="navbar bg-base-100 shadow-sm">
  <div className="flex-1">
    <a className="btn btn-ghost text-xl">LES NOUVELLES VIES</a>
  </div>
  <div className="flex-none">
    <ul className="menu menu-horizontal px-1 ">
      <li className='hover:bg-sky-700 hover:text-white hover:cursor-pointer'><a>Home</a></li>
      <li><a>About</a></li>
      <li><Link to="/private/declaration">Declarations</Link></li>
      <li><a>Contact</a></li>
      <li><a>Connexion</a></li>

    </ul>
  </div>
</div>
  )
}

export default Home