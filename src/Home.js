import React from "react";
import "./Home.css";
import Products from "./Products";
import BannerImage from "./Images/bannerImage03.jpg";

function Home() {
  return (
    <div className='home'>
      <img src={BannerImage} className='home_image' alt='Banner-Image'></img>
      <h2>Top Sold</h2>
      <hr />
      <div className='home_row'>
        <Products
          title='HP VH240a 23.8-inch Full HD 1080p IPS LED Monitor with Built-in Speakers and VESA Mounting  (1KL30AA) - Black'
          price='23'
          rating={2}
          image='https://images-na.ssl-images-amazon.com/images/I/31PTviHMeUL._AC_US160_.jpg'
        />
        <Products
          title='Acer Aspire 5 Slim Laptop, 15.6 inches Full HD IPS Display, AMD Ryzen 3 3200U, Vega 3 Graphics, 4GB DDR4, 128GB SSD, Backlit Keyboard, Windows 10 in S Mode, A515-43-R19L, Silver'
          price='500'
          rating={5}
          image='https://images-na.ssl-images-amazon.com/images/I/71vvXGmdKWL._AC_SX450_.jpg'
        />
      </div>
      <div className='home_row'>
        <Products
          title='HP 63 | Ink Cartridge | Black | F6U62AN'
          price='20.89'
          rating={4}
          image='https://images-na.ssl-images-amazon.com/images/I/71Z6MFsuQ7L._AC_SY355_.jpg'
        />
        <Products
          title='Energizer AA Batteries (48 Count), Double A Max Alkaline Battery'
          price='19.95'
          rating={3}
          image='https://images-na.ssl-images-amazon.com/images/I/81S%2BpX7uujL._AC_SX679_.jpg'
        />
        <Products
          title='Apple EarPods with Lightning Connector - White'
          price='17.50'
          rating={4}
          image='https://images-na.ssl-images-amazon.com/images/I/41wYbyr3LLL._AC_SX466_.jpg'
        />
      </div>
      <div className='home_row'>
        <Products
          title='OontZ Angle 3 (3rd Gen) - Bluetooth Portable Speaker, Louder Volume, Crystal Clear Stereo Sound, Rich Bass, 100 Ft Wireless Range, Microphone, IPX5, Bluetooth Speakers by Cambridge Sound Works (Black)'
          price='25.99'
          rating={4}
          image='https://images-na.ssl-images-amazon.com/images/I/71evtyMeLiL._AC_SL1500_.jpg'
        />
      </div>
    </div>
  );
}

export default Home;
