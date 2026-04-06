import React from "react";


export default function About() {
  return (
    <section className="about-section py-5">
      <div className="
      container">
        <div className="row align-items-center gy-4">
          
         
        <div className="col-lg-6">
  <img 
    src="/img/About.jpg" 
    className="img-fluid w-100" 
    alt="About" 
    style={{ objectFit: "cover", height: "100%" }}
  />
</div>


         
          <div className="col-lg-6">
            <p className="text-success fw-bold">About Us</p>
            <h2 className="text-warning fw-bold">Virtual White Flame PVT. LTD.</h2>
            <p className="mt-3">
              Virtual White Flame PVT. LTD. is a leading manufacturer & supplier of 
              Biomass Briquettes/Biomass Pellets covering major regions of India. The 
              company was established in 2013 under the name Seva Bio Brikets with a 
              mixed management team. All directors have over 12 years of business experience. 
              We convert industrial, agriculture, and forestry waste into solid fuel to meet 
              market demand and improve customer service.
            </p>
            <button className="btn btn-success mt-3">READ MORE</button>
          </div>

        </div>
      </div>
    </section>
  );
}
