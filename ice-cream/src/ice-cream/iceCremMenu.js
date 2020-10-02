import React, { useState, useEffect } from 'react';
import Helmet from 'react-helmet';
import { iceCreamMenu } from './../data/iceCreamData';

const IceCreamMenu = () => {
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    let isMonuted = true;
    iceCreamMenu().then(res => {
      if (isMonuted) {
        return setMenu(res.data);
      }
    });

    // don't understand it clearly (k - unmounted, memory leak, only for api call)
    return () => {
      isMonuted = false;
    };
  }, []);

  return (
    <main>
      <Helmet>
        <title>
          See the list below for your favorite ice-cream | ice-Cream
        </title>
      </Helmet>
      <h2 className="main-heading">
        See the list below for your favorite ice-cream
      </h2>
      {menu.length > 0 ? (
        <ul className="container">
          {menu.map(
            ({ id, iceCream, inStock, quantity, price, description }) => {
              return (
                <li key={id.toString()}>
                  <section className="card">
                    <div className="image-container" />
                    <div className="text-container">
                      <h3>{iceCream.name}</h3>
                    </div>
                    <div className="content card-content">
                      <p className="price">{`$${price.toFixed(2)}`}</p>
                      <p className={`stock${inStock ? '' : ' out'}`}>
                        {inStock ? `${quantity} in stock` : `out of stock`}
                      </p>
                      <p className="description">{description}</p>
                    </div>
                  </section>
                </li>
              );
            }
          )}
        </ul>
      ) : (
        <p>Loading....</p>
      )}
    </main>
  );
};

export default IceCreamMenu;
