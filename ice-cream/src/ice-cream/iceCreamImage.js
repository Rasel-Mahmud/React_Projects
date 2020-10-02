import React from 'react';
import PropTypes from 'prop-types';

const IceCreamImage = ({ iceCreamID }) =>
  iceCreamID != null && (
    <img
      src={`/ice-cream-images/ice-cream-${iceCreamID.toString()}.svg`}
      alt=""
    />
  );

IceCreamImage.propTypes = {
  iceCreamID: PropTypes.number.isRequired,
};

export default IceCreamImage;
