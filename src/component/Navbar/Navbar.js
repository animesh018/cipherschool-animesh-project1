// import React from "react";
// import "./Navbar.css";

// function Navbar() {
  

//   return (
// <div className="navbar">

//      <div className="navbar_container">
//         <div className="navbar_left"><span className="logo"><img src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="Logo"
//         /></span>
//         <p>Hello <br/>Select your address</p>
        
//         </div>
//         <div className="navbar_right">
//           <p>About</p>
//           <p>Tech Stack</p>
//           <p>Experience</p>
//           <p>Projects</p>
//           <p>Resume</p>
//         </div>
//     </div> 
//     <div className="navbar_below">
//       <p> hi i am navbar_below</p>
//     </div>
//     </div>
//   );
// }

// export default Navbar;

import React from "react";
import "./Navbar.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import ShoppingCartOutlined from "@mui/icons-material/ShoppingCartOutlined";

function Header() {  
  return (
    <div className="header">
      
        <img className="header__logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
        />
      

      <div className="header__search">
        <input className="header__searchInput" type="text" />
        <SearchIcon className="header__searchIcon" />
      </div>

      <div className="header__nav">
        
          <div className="header__option">
            <span className="header__optionLineOne">Hello Guest</span>
            <span className="header__optionLineTwo">Sign In</span>
          </div>
        

        
          <div className="header__option">
            <span className="header__optionLineOne">Returns</span>
            <span className="header__optionLineTwo">& Orders</span>
          </div>
        
        

        <div className="header__option">
          <span className="header__optionLineOne">Your</span>
          <span className="header__optionLineTwo">Prime</span>
        </div>

        
          <div className="header__optionBasket">
            <ShoppingCartOutlined />
            <span className="header__optionLineTwo header__basketCount">
              0
            </span>
          </div> 
        
      </div>
    </div>
  );
}

export default Header;
