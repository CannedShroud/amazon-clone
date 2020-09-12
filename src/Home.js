import React from "react";
import "./Home.css";
import homeImage from "./Images/homeImage.jpg";
import Product from "./Product";
import g14Image from "./Images/g14Image.jpg";
import hyperXImage from "./Images/hyperXImage.png";
import ssdImage from "./Images/ssdFile.png";
import ssdImage2 from "./Images/ssdFile2.png";
import headphonesImage from "./Images/headphonesImage.png";
import monitorImage from "./Images/monitorIMage.png";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img src={homeImage} alt="" className="home__image" />
        <div className="home__row">
          <Product
          id={0}
            title='ASUS ROG Zephyrus G14, 14" FHD 120Hz, Ryzen 5 4600HS, GTX 1650Ti 4GB GDDR6 Graphics, Gaming Laptop (8GB/512GB SSD/MS Office 2019/Windows 10/Eclipse Gray/Without Anime Matrix/1.6 Kg), GA401II-HE022TS'
            price={1299.99}
            rating={3}
            image={g14Image}
          />
          <Product
          id={1}
            title="HyperX Kingston Technology Impact 8GB 3200MHz DDR4 CL20 SODIMM Memory HX432S20IB2/8, Black (8GB DDR 4 3200MHZ)"
            price={89.99}
            rating={4}
            image={hyperXImage}
          />
        </div>
        <div className="home__row">
          <Product
          id={2}
            title="XPG Adata ASX6000 Pro 1TB PCIe Gen3x4 M.2 Solid State Drive"
            price={199.99}
            rating={5}
            image={ssdImage}
          />
          <Product
          id={3}
            title="Western Digital WD Blue 2 TB M.2 2280 SATA Internal Solid State Drive (WDS200T2B0B)"
            price={319.99}
            rating={3}
            image={ssdImage2}
          />
          <Product
          id={4}
            title="Bose QuietComfort 35 II Wireless Bluetooth Headphones, Noise-Cancelling, with Alexa Voice Control - Black"
            price={400}
            rating={5}
            image={headphonesImage}
          />
        </div>
        <div className="home__row">
          <Product
          id={5}
            title="Samsung LC49HG90DMUXEN 48.9-inch Ultra Wide Curved Monitor (Black)"
            price={1900}
            rating={4}
            image={monitorImage}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
