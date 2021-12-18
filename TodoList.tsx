import React = require('react');
import ListItem from './ListItem';
import { Item } from './types';

function TodoList(items: Array<Item>) {
  return (
    <div>
      <ul>
        {items.map((item) => (
          <ListItem key={item.id} {...item} />
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
