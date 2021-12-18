import React = require('react');
import { render } from 'react-dom';
import './style.css';
import TodoList from './TodoList';
import { Item } from './types';

import { v4 as uuidv4 } from 'uuid';

const App = () => {
  const inputRef = React.useRef(null);
  const [items, setItems] = React.useState<Item[]>([]);

  const addItem = () => {
    // verificar si el item ya existe en la lista
    const itemsExists = verifyIfItemExistsAlready();

    if (!itemsExists) {
      // agregar nuevo item
      const newItem = {
        id: uuidv4(),
        name: inputRef.current.value,
        quantity: 1,
      };
      setItems([...items, newItem]);
    } else {
      // obtener el item dentro de la lista
      const itemFound = items[getItemIndex(inputRef.current.value)];
      // actualizar propiedad quantity en dicho item
      itemFound.quantity += 1;

      // actualizar lista de items
      const _itemsUpdated = [
        ...items.filter((item) => item.name !== itemFound.name),
        itemFound,
      ];

      setItems(_itemsUpdated);
    }

    // limpiar input
    cleanInput();
  };

  const getItemIndex = (itemName: string) => {
    return items.findIndex((item) => item.name === itemName);
  };

  const verifyIfItemExistsAlready = () => {
    return getItemIndex(inputRef.current.value) !== -1;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const cleanInput = () => {
    inputRef.current.value = '';
  };

  const todoListProps = {
    items,
    updateItems: setItems,
  };

  return (
    <div>
      <h1>Lista de supermercado</h1>
      <form className="mt-1 mb-2" onSubmit={handleSubmit}>
        <input ref={inputRef} type="text" placeholder="Nuevo item..." />
        <button type="submit" className="ml-1" onClick={addItem}>
          Agregar
        </button>
      </form>
      <TodoList {...todoListProps} />
    </div>
  );
};

render(<App />, document.getElementById('root'));
