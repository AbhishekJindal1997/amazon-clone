import React, { useState } from "react";
import "./Navigation.css";

function Navigation({ sidebar }) {
  return (
    <div>
      <ul className={sidebar ? "navigation active" : "navigation"}>
        <li>
          <strong>Hello, Sign in</strong>
        </li>
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
