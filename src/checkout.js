import React from "react";
import Header from "./Header";
import "./checkout.css";
import { useStateValue } from "./StateProvider";
import CheckoutProduct from "./CheckoutProduct";

function Checkout() {
  const [{ basket }] = useStateValue();
  return (
    <div className='checkout'>
      <Header />

      <div className='checkout_subtotal'>
        <h4 className='checkout_subtotal_text'>
          Subtotal (<span>{basket?.length}</span> item):
          <span className='subtotal_amount'>
            $<span> 2.99</span>
          </span>
        </h4>
      </div>

      <div className='checkout_proceed_button'>
        <button className='proceed_button'>Proceed to checkout</button>
      </div>
      <hr />

      <div className='checkout_cartDisplay'>
        {basket?.length === 0 ? (
          <div>
            <h3 className='checkout_products'>Your Shopping Basket is Empty</h3>
          </div>
        ) : (
          <div className='checkout_products'>
            <h3>Your Shopping Basket</h3>
            {basket.map((item) => (
              <CheckoutProduct
                item={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Checkout;
