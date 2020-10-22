import React, { useEffect, useState, useRef } from 'react';
import { getMenuItem, putMenuItem } from './../data/iceCreamData';
import useUniqueIds from '../hooks/useUniqueIds';
import LoadingMessage from '../structure/LoadingMessage';
import IceCreamImage from './iceCreamImage';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';
import '../styles/form-spacer.scss';

const EditIceCream = ({ match, history }) => {
  const [menuItem, setMenuItem] = useState({
    iceCream: {},
    price: '0.00',
    inStock: true,
    quantity: '0',
    description: '',
  });

  const [isloading, setIsloading] = useState(false);
  const isMounted = useRef(true);
  const [descriptionid, quantityid, inStockid, priceid] = useUniqueIds(4);

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

  const onChangeHandle = e => {
    let newMenuItemData = {
      ...menuItem,
      [e.target.name]:
        e.target.type === 'checkbox' ? e.target.checked : e.target.value,
    };

    if (e.target.name === 'quantity') {
      newMenuItemData.inStock = e.target.value !== '0';
    }

    if (e.target.name === 'inStock' && !e.target.checked) {
      console.log('inStock: I am now shoing');
      newMenuItemData.quantity = '0';
    }

    setMenuItem(newMenuItemData);
  };

  const onSubmitHandler = e => {
    e.preventDefault();
    const { description, iceCream, id, inStock, price, quantity } = menuItem;
    const submitItem = {
      description,
      iceCream: { id: iceCream.id },
      id,
      inStock,
      price: parseFloat(price),
      quantity: parseInt(quantity),
    };

    putMenuItem(submitItem).then(() => {
      history.push('/');
    });
  };

  return (
    <main>
      <Helmet>
        <title>Edit ice-Cream | Ice Cream</title>
      </Helmet>
      <h2 className="main-heading">Edit ice-Cream</h2>
      <LoadingMessage message="Loading Ice Cream" isloading={isloading} />
      {!isloading && (
        <div className="form-frame">
          <div className="image-container">
            <IceCreamImage iceCreamID={menuItem.iceCream.id} />
          </div>
          <div className="form-container">
            <dl>
              <dt>Name: </dt>
              <dd>{menuItem.iceCream.name}</dd>
            </dl>
            <form onSubmit={onSubmitHandler}>
              <label htmlFor={descriptionid}>Description:</label>
              <textarea
                name="description"
                rows="3"
                value={menuItem.description}
                onChange={onChangeHandle}
                id={descriptionid}
              />

              <label htmlFor={inStockid}>In Stock:</label>
              <div className="checkbox-wrapper">
                <input
                  type="checkbox"
                  name="inStock"
                  checked={menuItem.inStock}
                  onChange={onChangeHandle}
                  id={inStockid}
                />
                <div className="checkbox-wrapper-checked" />
              </div>

              <label htmlFor={quantityid}>quantity:</label>
              <select
                name="quantity"
                value={menuItem.quantity}
                onChange={onChangeHandle}
                id={quantityid}
              >
                <option value="0">0</option>
                <option value="10">10</option>
                <option value="20">20</option>
                <option value="30">30</option>
                <option value="40">40</option>
                <option value="50">50</option>
              </select>

              <label htmlFor={priceid}>Price:</label>
              <input
                type="number"
                step="0.01"
                name="price"
                value={menuItem.price}
                onChange={onChangeHandle}
                id={priceid}
              />

              <div className="button-container">
                <button className="ok">Save</button>
              </div>
            </form>
          </div>
        </div>
      )}
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
