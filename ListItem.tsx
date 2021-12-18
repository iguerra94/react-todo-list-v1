import React = require('react');
import { Item } from './types';

const ListItem = (item: Item, ) => {
  return <li>{item.name}</li>;
};

export default ListItem;
