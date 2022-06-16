import React from "react";
import "./Card.css";

function Card(props){
    return(
        <div className="card_parent">
        <div class="card" >
          <div class="card_body">
        <p class="card_title" >{props.title}  </p>
      </div>
<div className="Card_image">
      <img src = {props.img1} 
       />
      <img src={props.img2} 
       />
    </div>
    <div className="Card_image">
      <img src={props.img3}
       />
      <img src={props.img4}
       />
    </div>
    </div>
    
    </div>
    )
    }
    export default Card;