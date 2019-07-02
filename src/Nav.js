import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
    return(
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="#">Navbar</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
      
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
            <Link className="nav-link" to="/">Home</Link>
            <span class="sr-only">(current)</span>
            </li>
            <li class="nav-item">
              <Link className="nav-link" to="/away">Away</Link>
            </li>
          </ul>
        </div>
      </nav>
      
    )
}

export default Nav