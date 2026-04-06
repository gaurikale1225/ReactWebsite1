import React from "react";


export default function Contact() {
  return (
    <div className="container py-5">
      <div className="text-center mb-5">
        <h2 className="fw-bold">Contact Us</h2>
        <p className="text-danger">
          We'd love to hear from you! Please fill out the form below or reach us directly.
        </p>
      </div>

      <div className="row g-4">
        {/* Contact Form */}
        <div className="col-md-7">
          <div className="card shadow-sm p-4 border-2">
            <h1 className="mb-3 text-success">Send Us a Message</h1>
            <form >
              <div className="mb-3">
                <label htmlFor="name" className="form-label">Full Name</label>
                <input type="text" id="name" className="form-control" placeholder="Enter your name" required />
              </div>

              <div className="mb-3">
                <label htmlFor="email" className="form-label">Email</label>
                <input type="email" id="email" className="form-control" placeholder="Enter your email" required />
              </div>

              <div className="mb-3">
                <label htmlFor="message" className="form-label">Message</label>
                <textarea id="message" rows="4" className="form-control" placeholder="Write your message..." required></textarea>
              </div>

              <button type="submit" className="btn btn-warning w-100">
                Send Message
              </button>
            </form>
          </div>
        </div>

        {/* Contact Details */}
        <div className="col-md-5">
          <div className="card shadow-sm p-4 border-0 bg-success">
            <h5 className="mb-3 text-white">Contact Information</h5>
            <ul className="list-unstyled">
              <li className="mb-3 text-white">
                <strong className="text-white">📍 Address:</strong> <br />
                Flat no.2, Plot No.1, Pushkar Appartment, Savedi, Pipeline Road,
              </li>
              <li className="mb-3 text-white">
                <strong>📞 Phone:</strong> <br />
                +91 9420950022
              </li>
              <li className="mb-3 text-white">
                <strong>📧 Email:</strong> <br />
                 sales@virtualwhiteflame.com
              </li>
              <li className="text-white">
                <strong>⏰ Working Hours:</strong> <br />
                Mon - Fri: 9 AM - 6 PM
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}