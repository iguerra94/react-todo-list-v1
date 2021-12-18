import React = require('react');
import ListItem from './ListItem';
import { Item, TodoListProps } from './types';

function TodoList({ items, updateItems }: TodoListProps) {
  const removeItem = (id: string) => {
    updateItems([...items.filter((item) => item.id !== id)]);
  };

  return (
    <ul className="list">
      {items.length > 0 &&
        items
          .sort((a: Item, b: Item) => b.quantity - a.quantity)
          .map((item) => (
            <ListItem key={item.id} item={item} removeItem={removeItem} />
          ))}
      {!items.length && <p>No hay items agregados :(</p>}
    </ul>
  );
}

export default TodoList;
