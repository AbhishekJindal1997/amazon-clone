import React from "react";
import Header from "./Header";
import "./checkout.css";
import { useStateValue } from "./StateProvider";

function checkout() {
  // const [{ basket }] = useStateValue();
  return (
    <div className='checkout'>
      <Header />

      <div className='checkout_subtotal'>
        <h4 className='checkout_subtotal_text'>
          Subtotal (<span>0</span> item):
          <span className='subtotal_amount'>
            $<span> 2.99</span>
          </span>
        </h4>
      </div>

      <div className='checkout_proceed_button'>
        <button className='proceed_button'>Proceed to checkout</button>
      </div>

      <div>
        <h1>Testing </h1>
        <h1>Testing </h1>
        <h1>Testing </h1>
        <h1>Testing </h1>
        <h1>Testing </h1>
        <h1>Testing </h1>
        <h1>Testing </h1>
        <h1>Testing </h1>
        <h1>Testing </h1>
        <h1>Testing </h1>
        <h1>Testing </h1>
        <h1>Testing </h1>
        <h1>Testing </h1>
        <h1>Testing </h1>
        <h1>Testing </h1>
        <h1>Testing </h1>
        <h1>Testing </h1>
        <h1>Testing </h1>
        <h1>Testing </h1>
        <h1>Testing </h1>
        <h1>Testing </h1>
        <h1>Testing </h1>
        <h1>Testing </h1>
        <h1>Testing </h1>
        <h1>Testing </h1>
        <h1>Testing </h1>
        <h1>Testing </h1>
        <h1>Testing </h1>
        <h1>Testing </h1>
      </div>
    </div>
  );
}

export default checkout;
