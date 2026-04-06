import React from "react";


export default function Gallery() {
  // You can replace these with your own image URLs
  const images = [
    "/img/About.jpg",
     "/img/img1.jpg",
     "/img/img2.jpg",
     "/img/img3.jpg",
      "/img/About.jpg",
     "/img/img1.jpg",
     "/img/img2.jpg",
     "/img/img3.jpg",
  ];

  return (
    <div className="container py-5">
      <div className="text-center mb-5">
        <h2 className="fw-bold">Our Gallery</h2>
        <p className="text-muted">Explore some of our latest work and memorable moments.</p>
      </div>

      <div className="row g-4">
        {images.map((src, index) => (
          <div key={index} className="col-6 col-md-4 col-lg-3">
            <div className="card border-0 shadow-sm">
              <img
                src={src}
                alt={`Gallery ${index + 1}`}
                className="card-img-top img-fluid rounded"
                style={{ height: "200px", objectFit: "cover" }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}