import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import CartWidget from "../cartwidget/CartWidget";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-primary-subtle border-body">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand">
          Tienda online
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="/" className="nav-link active" aria-current="page">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to={`/category/id`}
                className="nav-link active"
                aria-current="page"
              >
                Electronica
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="category/id"
                className="nav-link active"
                aria-current="page"
              >
                Joyas
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="category/id"
                className="nav-link active"
                aria-current="page"
              >
                Ropa de hombre
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="category/id"
                className="nav-link active"
                aria-current="page"
              >
                Ropa de Mujer
              </Link>
            </li>
          </ul>
        </div>
      </div>
      {<CartWidget />}
    </nav>
  );
};

export default NavBar;
