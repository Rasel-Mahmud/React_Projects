import React, { useEffect, useState, useRef } from 'react';
import { getMenuItem } from './../data/iceCreamData';
import LoadingMessage from '../structure/LoadingMessage';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';

const EditIceCream = ({ match, history }) => {
  const [menuItem, setMenuItem] = useState({});
  const [isloading, setIsloading] = useState(false);
  const isMounted = useRef(true);

  useEffect(() => {
    return () => {
      isMounted.current = false;
    };
  }, []);

  useEffect(() => {
    setIsloading(true);
    getMenuItem(match.params.menuItemId)
      .then(({ id, description, iceCream, inStock, price, quantity }) => {
        if (isMounted.current) {
          setMenuItem({
            id,
            description,
            iceCream,
            inStock,
            price: price.toFixed(2),
            quantity: quantity.toString(),
          });
          setIsloading(false);
        }
      })
      .catch(err => {
        if (err.response.status === 404 && isMounted.current) {
          history.replace('/');
        }
      });
  }, [match.params.menuItemId, history]);

  return (
    <main>
      <Helmet>
        <title>Edit ice-Cream | Ice Cream</title>
      </Helmet>
      <h2 className="main-heading">Edit ice-Cream</h2>
      <LoadingMessage message="Loading Ice Cream" isloading={isloading} />
    </main>
  );
};

EditIceCream.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.object.isRequired,
  }),
  history: PropTypes.shape({
    replace: PropTypes.func.isRequired,
  }),
};

export default EditIceCream;
