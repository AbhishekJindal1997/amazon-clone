import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import * as BiIcons from "react-icons/bi";
import * as FaIcons from "react-icons/fa";
import * as CgIcons from "react-icons/cg";

function Header() {
  return (
    <div>
      <nav className='header'>
        {/* Navigation */}
        <FaIcons.FaBars className='header_nav' />

        {/* logo */}
        <Link to='/login'>
          <img
            className='header_logo'
            src='http://pngimg.com/uploads/amazon/amazon_PNG11.png'
          />
        </Link>

        {/* Link to sign in*/}
        <div className='header_signIn_cart'>
          <Link to='/login' className='header_signIn'>
            <span>Sign In</span>
          </Link>

          {/* Cart  */}
          <span className='header_itemCount'>0</span>
          <CgIcons.CgShoppingCart className='header_cartIcon' />
        </div>
      </nav>

      <div className='searchBar'>
        <input
          type='text'
          className='searchBar_searchInput'
          placeholder='Search Amazon'
        />
        <BiIcons.BiSearchAlt2 className='searchBar_searchIcon' />
      </div>

      <div className='hot_topics'>
        <Link>
          <span>Lists</span>
        </Link>
        <Link>
          <span>Best Sellers</span>
        </Link>
        <Link>
          <span>Whole Foods</span>
        </Link>
        <Link>
          <span>Deals</span>
        </Link>
        <Link>
          <span>Video</span>
        </Link>
      </div>
    </div>
  );
}

export default Header;
