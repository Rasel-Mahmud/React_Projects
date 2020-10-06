import React, { useState, useEffect } from 'react';
import Helmet from 'react-helmet';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import IceCreamImage from './iceCreamImage';
import LoadingMessage from './../structure/LoadingMessage';
import { iceCreamMenu } from './../data/iceCreamData';

const IceCreamMenu = ({ history }) => {
  const [menu, setMenu] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let isMonuted = true;
    iceCreamMenu().then(res => {
      if (isMonuted) {
        setMenu(res.data);
        setIsLoading(false);
      }
    });

    // don't understand it clearly (k - unmounted, memory leak, only for api call)
    return () => {
      isMonuted = false;
      console.log('isMonuted false now in cleanup function');
    };
  }, []);

  const onItemClickHandler = to => {
    history.push(to);
  };

  const onClickHandler = e => {
    // This is done to avoid the click handler of the <section>
    // firing and placing two browse entries in browser histrory
    e.stopPropagation();
  };

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
      <LoadingMessage
        isloading={isLoading}
        message="Loading Ice-Cream Menu ..."
      />
      {menu.length > 0 ? (
        <ul className="container">
          {menu.map(
            ({ id, iceCream, inStock, quantity, price, description }) => {
              return (
                <li key={id.toString()}>
                  <section
                    className="card"
                    onClick={() => {
                      onItemClickHandler(`/menu-items/${id}`);
                    }}
                  >
                    <div className="image-container">
                      <IceCreamImage iceCreamID={iceCream.id} />
                    </div>
                    <div className="text-container">
                      <h3>
                        <Link to={`/menu-items/${id}`} onClick={onClickHandler}>
                          {iceCream.name}
                        </Link>
                      </h3>
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
        !isLoading && <p>Sorry No item is available now!!!</p>
      )}
    </main>
  );
};

IceCreamMenu.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }),
};

export default IceCreamMenu;
