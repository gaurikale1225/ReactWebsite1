import React from "react";

function Footer() {
  return (
    <>
      <footer className="bg-success text-white pt-5 pb-3">
        <div className="container">
          <div className="row">
            {/* Contact Us */}
            <div className="col-md-3 mb-4">
              <h5 className="fw-bold mb-3">Contact Us</h5>
              <p>
                <i className="bi bi-telephone-fill me-2"></i>
                9423390308, 9420950022
              </p>
              <p>
                <i className="bi bi-envelope-fill me-2"></i>
                sales@virtualwhiteflame.com
              </p>
            </div>

            {/* About Us */}
            <div className="col-md-3 mb-4">
              <h5 className="fw-bold mb-3">About Us</h5>
              <ul className="list-unstyled">
                <li>Vision & Mission</li>
                <li>Company History</li>
                <li>FAQ'S</li>
                <li>Blogs</li>
                <li>Feedback</li>
                <li>Terms & Condition</li>
                <li>Privacy & Policy</li>
              </ul>
            </div>

            {/* Get In Touch */}
            <div className="col-md-4 mb-4">
              <h5 className="fw-bold mb-3">Get In Touch</h5>
              <p>
                <i className="bi bi-geo-alt-fill me-2"></i>
                Flat no.2, Plot No.1, Pushkar Apartment, Savedi, Pipeline Road,
                Ahmednagar 414003
              </p>
              <p>
                <i className="bi bi-envelope-fill me-2"></i>
                operation.virtualwhiteflame@gmail.com
              </p>
            </div>

            {/* Quick Links */}
            <div className="col-md-2 mb-4">
              <h5 className="fw-bold mb-3">Quick Link</h5>
              <div className="d-flex gap-3 fs-4">
                <a href="#" className="text-white">
                  <i className="bi bi-facebook"></i>
                </a>
                <a href="#" className="text-white">
                  <i className="bi bi-instagram"></i>
                </a>
                <a href="#" className="text-white">
                  <i className="bi bi-linkedin"></i>
                </a>
                <a href="#" className="text-white">
                  <i className="bi bi-youtube"></i>
                </a>
              </div>
            </div>
          </div>

         

          {/* Footer Bottom */}
          <div className="text-center border-top border-light  bg-dark mt-4 pt-3 p-2">
            <small>
              © Copyright 2025{" "}
              <span className="text-warning fw-semibold">
                Virtual White Flame PVT. LTD.
              </span>{" "}
              All rights reserved.
            </small>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;