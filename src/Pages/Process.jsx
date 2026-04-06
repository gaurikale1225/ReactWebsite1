import React from "react";

export default function Process() {
  const products = [
    { id: 1, name: "Farmers", img: "/img/pro1.jpg" },
    { id: 2, name: "Local Agents", img: "/img/pro2.jpg" },
    { id: 3, name: "Briquettes & Pelletes Manufacturing", img: "/img/pro3.jpg" },
    { id: 4, name: "Boiler Industries", img: "/img/pro4.jpg" },
    
  ];

  return (
    <div className="container py-5">
      <div className="text-center mb-5">
        <h2 className="fw-bold text-warning">Working Process Of Biomass Briquettes</h2>
       
      </div>

      <div className="row g-4">
        {products.map((item) => (
          <div key={item.id} className="col-6 col-md-4 col-lg-3">
            <div className="card border-2-warning shadow-sm text-center h-100 p-2">
              <img
                src={item.img}
                alt={item.name}
                className="card-img-top img-fluid rounded"
                style={{ height: "200px", objectFit: "cover" }}
              />
              <div className="card-body">
                <h5 className="card-title mt-2 text-success">{item.name}</h5>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
