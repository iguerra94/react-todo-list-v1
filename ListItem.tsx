import React = require('react');
import { ListItemProps } from './types';

const ListItem = ({ item, removeItem }: ListItemProps) => {
  return (
    <li className="list-item mt-1 mb-1">
      {item.name} x{item.quantity}
      <button className="ml-1" onClick={() => removeItem(item.id)}>
        Remover
      </button>
    </li>
  );
};

export default ListItem;
