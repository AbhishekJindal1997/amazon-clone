import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import * as BiIcons from "react-icons/bi";
import * as FaIcons from "react-icons/fa";
import * as CgIcons from "react-icons/cg";
import { useStateValue } from "./StateProvider";

function Header() {
  const [{ basket }] = useStateValue();
  console.log(basket);
  return (
    <div>
      <nav className='header'>
        {/* Navigation */}
        <FaIcons.FaBars className='header_nav' />

        {/* logo */}
        <Link to='/'>
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
          <span className='header_itemCount'>{basket?.length}</span>
          <Link to='/checkout'>
            <CgIcons.CgShoppingCart className='header_cartIcon' />
          </Link>
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
        <Link to='#'>
          <span>Lists</span>
        </Link>
        <Link to='#'>
          <span>Best Sellers</span>
        </Link>
        <Link to='#'>
          <span>Whole Foods</span>
        </Link>
        <Link to='#'>
          <span>Deals</span>
        </Link>
        <Link to='#'>
          <span>Video</span>
        </Link>
      </div>
    </div>
  );
}

export default Header;

// const textDecoration = () =>{
//   text-decoration:'none';
// }
