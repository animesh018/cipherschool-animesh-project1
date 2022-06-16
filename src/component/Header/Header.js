import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import ReactCountryFlag from "react-country-flag"
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import ShoppingCartOutlined from "@mui/icons-material/ShoppingCartOutlined";

function Header() {
  return (
    <div className="header_Parent">
      <div className="header">

        <div className="header__nav">

        <a href="https://www.amazon.in/"><img className="header__logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
        /></a>

          <div className="header__option">
            <span className="LocationIcon"><LocationOnOutlinedIcon /></span>
          </div>
          <div className="header__option">
            <span className="header__optionLineOne">Deliver to animesh</span>
            <span className="header__optionLineTwo"> Jalandhar 144411</span>
          </div>

          

          <div className="header__search">
            <input className="header__searchInput" type="text" />
            <SearchIcon className="header__searchIcon" />
          </div>

          <div className="header__option"><ReactCountryFlag countryCode="In" svg /></div>

          <div className="header__option">
            <span className="header__optionLineOne">Hello Animesh </span>
            <span className="header__optionLineTwo">Account & Lists</span>
          </div>

          <div className="header__option">
            <span className="header__optionLineOne">Returns</span>
            <span className="header__optionLineTwo">& Orders</span>
          </div>



          <div className="header__optionBasket">
            <ShoppingCartOutlined />
            <span className="header__optionLineTwo header__basketCount">
              5
            </span>
          </div>

        </div>

      </div>
      <div className="header__below">
      
<p>All</p>
        <p>Fresh</p>
        <p>AmazonPay</p>
        <p>Gift Cards</p>
        <p>Buy Again</p>
        <p>Health,Household & Personal care</p>
        <p>Gift Ideas</p>
        <p>Home Improvement</p>
        <p>Amazon Basics</p>
        <span><img className="below__img"
          src="https://images-eu.ssl-images-amazon.com/images/G/31/AmazonVideo/2021/X-site/SingleTitle/JayeshbhaiJordaar/400x39-SWM_179._CB634520229_.jpg"
        /></span>
      </div>

    </div>
  );
}

export default Header;