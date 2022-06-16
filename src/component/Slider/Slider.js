import React from "react";
import "./Slider.css";


function Slider(){
    return(
<div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
  <div className="carousel-item active">
      <img src="https://images-eu.ssl-images-amazon.com/images/G/31/AmazonVideo/2021/X-site/SingleTitle/JayeshbhaiJordaar/3000x1200_Hero-Tall_NP._CB634520229_.jpg" class="d-block w-100" alt=""/>
    </div>
    <div className="carousel-item active">
      <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/June2022GW/New_FDFO_Stripe/SBI/Shoes_Deals/pc-shoes_english_3000xx._CB634741518_.jpg" class="d-block w-100" alt=""/>
    </div>
    <div class="carousel-item">
      <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img19/AmazonPay/Avatar/PC_Hero_3000x1200._CB643589305_.jpg" class="d-block w-100" alt=""/>
    </div>
    <div class="carousel-item">
      <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/audio/mi/june/3000x1200_Mi_music_week_june_2022._CB634935831_.jpg" class="d-block w-100" alt=""/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
    )
}
export default Slider;