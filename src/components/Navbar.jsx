import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav>
      <div id='logo'>
      <h2>Recipe Finder App</h2>
      </div>
      <Link to={"/"} locatorLabel="Return to Home">

        Home</Link>
    </nav>
  )
}

export default Navbar