import React from "react";
import "./CheckoutProduct.css";
import * as MdIcons from "react-icons/md";
import * as AiIcons from "react-icons/ai";

function CheckoutProduct({ id, title, image, price, rating }) {
  return (
    <div className='CheckoutProduct'>
      <img src={image} className='CheckoutProduct_image'></img>

      <div>
        <div className='CheckoutProduct_title'>
          <h3>{title}</h3>
        </div>
        <div className='CheckoutProduct_price'>
          <small>$</small>
          {price}
        </div>
        <div className='CheckoutProduct_rating'>
          {" "}
          {Array(rating)
            .fill()
            .map((_) => (
              <p>⭐</p>
            ))}
        </div>
        <div className='delete_and_increase'>
          <div className='CheckoutProduct_increase_delete_button'>
            <div className='CheckoutProduct_delete'>
              <MdIcons.MdDelete />
            </div>
            <div className='CheckoutProduct_quantity'>
              <span>0</span>
            </div>
            <div className='CheckoutProduct_increase'>
              <AiIcons.AiOutlinePlus />
            </div>
          </div>
          <button className='Delete_product'>Delete</button>
        </div>
      </div>
    </div>
  );
}

export default CheckoutProduct;
