import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-orange shadow-sm py-2">
        <div className="container-fluid px-4">
          {/* ==== LOGO ==== */}
          <NavLink className="navbar-brand d-flex align-items-center" to="/">
            <img
              src="/img/logo.jpg"
              alt="Logo"
              width="150px"
              className="me-2"
            />
          </NavLink>

          {/* ==== TOGGLER ==== */}
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

          {/* ==== NAV LINKS ==== */}
          <div className="collapse navbar-collapse" id="navbarNav">
            {/* Center the nav links */}
            <ul className="navbar-nav mx-auto">
              <li className="nav-item mx-3">
                <NavLink className="nav-link fw-semibold" to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item mx-3">
                <NavLink className="nav-link fw-semibold" to="/about">
                  About Us
                </NavLink>
              </li>
              {/* <li className="nav-item mx-3">
                <NavLink className="nav-link fw-semibold" to="/services">
                  Services
                </NavLink>
              </li> */}
              <li className="nav-item mx-3">
                <NavLink className="nav-link fw-semibold" to="/products">
                  Products
                </NavLink>
              </li>
              <li className="nav-item mx-3">
                <NavLink className="nav-link fw-semibold" to="/gallery">
                  Gallery
                </NavLink>
              </li>
              <li className="nav-item mx-3">
                <NavLink className="nav-link fw-semibold" to="/contact">
                  Contact Us
                </NavLink>
              </li>
            </ul>

            {/* ==== RIGHT-SIDE BUTTON ==== */}
            <div className="d-flex justify-content-end">
              <button className="btn brochure-btn px-4 fw-semibold text-white">
                BROCHURE
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* ==== INLINE STYLING ==== */}
      <style>
        {`
          body {
            overflow-x: hidden;
          }

          .navbar{
         background-color:#064d16;
          }
          .nav-link {
            color:white !important;
            transition: 0.3s ease;
            font-size: 0.95rem;
          }

          .nav-link:hover {
            color: #00a859 !important;
            transform: scale(1.05);
          }

          .brochure-btn {
            background-color:orange;
          
            transition: all 0.3s ease;
          }

          .brochure-btn:hover {
            background-color: #0e944f;
            transform: scale(1.05);
          }

          @media (max-width: 991px) {
            .brochure-btn {
              border-radius: 30px;
              margin-top: 10px;
            }
          }
        `}
      </style>
    </>
  );
}

export default Navbar;
