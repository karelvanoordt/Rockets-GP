import React from 'react';
import { Link } from 'react-router-dom';
import planet from '../planet.png';
import '../styling/navbar.css';

function NavBar() {
  return (
    <header className="H-con">
      <section className="text">
      <div className="app-logo">
          <img src={planet} alt="account icon" />
        <h1>
        Space Travelers' Hub
        </h1>
      </div>
        <nav className="nav">
            <Link to="/*" className="links">Rockets</Link>
            <Link to="/missions" className="links">Missions</Link>
            <Link to="/myProfile" className="links">My profile</Link>
        </nav>
      </section>
    </header>
  );
}

export default NavBar;