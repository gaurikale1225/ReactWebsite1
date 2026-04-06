import React from "react";
import About from "./About";
import Contact from "./Contact";
import Process from "./Process";
function Home(){
    return(
        <>
       <div className="conatiner-fluid">
        <div className="row">
            <div className="col-12">
                <div id="carouselExampleIndicators" class="carousel slide">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="./img/img1.jpg" class="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="./img/img2.jpg" class="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="./img/img3.jpg" class="d-block w-100" alt="..."/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
            </div>
        </div>
       </div>
       <style>
  {`
    body {
      overflow-x: hidden;
    }
  `}
</style>
<div className="container-fluid">
    <div className="row">
        <About></About>
    </div>
</div>

<div className="container">
    <div className="row">
        <Process></Process>
    </div>
</div>

<div className="container">
    <div className="row">
        <Contact></Contact>
    </div>
</div>

        </>
    )
}
export default Home;