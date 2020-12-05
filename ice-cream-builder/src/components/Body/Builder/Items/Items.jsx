import React from 'react';
import Item from './Item/Item';

function Items({ items, add, remove, scoops }) {
  const flavors = Object.keys(items);
  return (
    <ul>
      {flavors.map((flavor) => (
        <Item key={flavor} name={flavor} add={add} remove={remove} scoops={scoops} />
      ))}
    </ul>
  );
}

export default Items;
