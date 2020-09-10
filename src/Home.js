import React from "react";
import "./Home.css";
import Products from "./Products";
import BannerImage from "./Images/bannerImage02.jpg";

function Home() {
  return (
    <div className='home'>
      <img src={BannerImage} className='home_image' alt='Banner-Image'></img>
      <div className='home_row'>
        <Products
          title='ABhishek'
          price='23'
          rating={2}
          image='https://images-na.ssl-images-amazon.com/images/I/31PTviHMeUL._AC_US160_.jpg'
        />
        <Products
          title='ABhishek'
          price='23'
          rating={2}
          image='https://images-na.ssl-images-amazon.com/images/I/31PTviHMeUL._AC_US160_.jpg'
        />
      </div>
      <div className='home_row'>
        <Products
          title='ABhishek'
          price='23'
          rating={2}
          image='https://images-na.ssl-images-amazon.com/images/I/31PTviHMeUL._AC_US160_.jpg'
        />
        <Products
          title='ABhishek'
          price='23'
          rating={2}
          image='https://images-na.ssl-images-amazon.com/images/I/31PTviHMeUL._AC_US160_.jpg'
        />
        <Products
          title='ABhishek'
          price='23'
          rating={2}
          image='https://images-na.ssl-images-amazon.com/images/I/31PTviHMeUL._AC_US160_.jpg'
        />
      </div>
      <div className='home_row'>
        <Products
          title='ABhishek'
          price='23'
          rating={2}
          image='https://images-na.ssl-images-amazon.com/images/I/31PTviHMeUL._AC_US160_.jpg'
        />
      </div>
    </div>
  );
}

export default Home;
