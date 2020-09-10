import React from "react";
import "./Product.css";

function Products({ id, title, image, price, rating }) {
  return (
    <div className='product'>
      <div className='product_info'>
        <p>{title}</p>
        <p className='product_price'>
          <small>$</small>
          <strong>{price}</strong>
          <div className='product_rating'>
            {Array(rating)
              .fill()
              .map((_) => (
                <p>⭐</p>
              ))}
          </div>
        </p>
      </div>

      <img src={image} className='product_image'></img>
      <button className='AddToCart'>Add to Basket</button>
    </div>
  );
}

export default Products;
