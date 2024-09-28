import React from 'react';

const titre = "Movie Tn"
const Acc = "Accueil"
const Ser = "Séries"
const Fil = "Films"
const Con = "Contact"
const search = "Rechercher"

const Header = () =>{
    return(
      <nav className="navbar navbar-expand-lg bg-body-tertiary" style={{ position: "sticky", top: 0, zIndex: 100 }}> 
  <div className="container-fluid">
    <img src="images/icon.png" alt="Logo" width="23" height="23" className="d-inline-block align-text-top"/> 
    <a className="navbar-brand" style={{paddingLeft:"7px"}} href="/">{titre}</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">{Acc}</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/series">{Ser}</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/films">{Fil}</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/contact">{Con}</a>
        </li>
      </ul>

      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Rechercher" aria-label="Search" />
        <button className="btn btn-outline-success" type="submit">{search}</button>
      </form>
    </div>
  </div>
</nav>
        )
  }
export default Header;