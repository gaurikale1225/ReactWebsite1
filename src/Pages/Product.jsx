import React from "react";

export default function Product() {
  const products = [
    { id: 1, name: "Wireless Headphones", img: "/img/pro1.jpg" },
    { id: 2, name: "Smart Watch", img: "/img/pro2.jpg" },
    { id: 3, name: "Bluetooth Speaker", img: "/img/pro3.jpg" },
    { id: 4, name: "Power Bank", img: "/img/pro4.jpg" },
    { id: 5, name: "Gaming Mouse", img: "/img/pro5.jpg" },
    { id: 6, name: "Laptop Backpack", img: "/img/pro6.jpg" },
  ];

  return (
    <div className="container py-5">
      <div className="text-center mb-5">
        <h2 className="fw-bold">Our Products</h2>
        <p className="text-muted">Explore our latest Collection</p>
      </div>

      <div className="row g-4">
        {products.map((item) => (
          <div key={item.id} className="col-6 col-md-4 col-lg-3">
            <div className="card border-0 shadow-sm text-center h-100">
              <img
                src={item.img}
                alt={item.name}
                className="card-img-top img-fluid rounded"
                style={{ height: "200px", objectFit: "cover" }}
              />
              <div className="card-body">
                <h6 className="card-title mt-2">{item.name}</h6>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
