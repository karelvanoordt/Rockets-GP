import React from 'react';
import { NavLink } from 'react-router-dom';
import planet from '../planet.png';
import '../styling/navbar.css';

function NavBar() {
  return (
    <header className="H-con">
      <section className="text">
        <div className="app-logo">
          <img src={planet} alt="account icon" />
          <h1>
            Space Travelers` Hub
          </h1>
        </div>
        <nav className="nav">
          <NavLink to="/*" className="links links-active">Rockets</NavLink>
          <NavLink to="/missions" className="links links-active">Missions</NavLink>
          <NavLink to="/myProfile" className="links links-active">My profile</NavLink>
        </nav>
      </section>
    </header>
  );
}

export default NavBar;
