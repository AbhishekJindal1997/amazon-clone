import React, { useState } from "react";
import "./Navigation.css";
import * as AiIcons from "react-icons/ai";

function Navigation({ sidebar, showsidebar }) {
  return (
    <div className={sidebar ? "navigation active" : "navigation"}>
      <div onClick={showsidebar}>
        <AiIcons.AiOutlineClose className='close' />
      </div>
      <strong className='sign_in'>Hello, Sign in</strong>
      <ul onClick={showsidebar}>
        <li>Home</li>
        <li>Account</li>
        <li>Orders</li>
        <li>Buy Again</li>
        <li>Lists</li>
        <li>Customer Service</li>
      </ul>
    </div>
  );
}

export default Navigation;
