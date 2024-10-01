import React, { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

const titre = "Movie Tn";
const Acc = "Accueil";
const Ser = "Séries";
const Fil = "Films";
const Con = "Contact";

const Header = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
    onSearch(event.target.value);
  };
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary" style={{ position: "sticky", top: 0, zIndex: 100 }}>
      <div className="container-fluid">
        <img src="images/icon.png" alt="Logo" width="23" height="23" className="d-inline-block align-text-top" />
        <NavLink className="navbar-brand" style={{ paddingLeft: "7px" }} to="/">{titre}</NavLink>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link" exact to="/" activeClassName="active">{Acc}</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/series" activeClassName="active">{Ser}</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/films" activeClassName="active">{Fil}</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/contact" activeClassName="active">{Con}</NavLink>
            </li>
          </ul>
          <form className="d-flex" role="search">
            <input className="form-control me-2"
            type="search"
            placeholder="Rechercher" 
            aria-label="Search"
            value={searchTerm}
            onChange={handleSearchChange} 
            disabled={isHomePage}
              style={{cursor: isHomePage ? 'not-allowed' : 'text',}}/>
            <button className="btn btn-outline-success"type="button"
            disabled={isHomePage}
            style={{cursor: isHomePage ? 'not-allowed' : 'pointer',}}
            >Rechercher</button>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Header;
