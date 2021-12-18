import React = require('react');
import { render } from 'react-dom';
import './style.css';
import TodoList from './TodoList';
import { Item } from './types';

const App = () => {
  const inputRef = React.useRef(null);
  const [items, setItems] = React.useState<Array<Item>>([]);
  return (
    <div>
      <h1>Todo App v1.0</h1>
      <div className="input-container">
        <input ref={inputRef} type="text" placeholder="Nuevo item..." />
        <button className="ml-2">Agregar</button>
      </div>
      <TodoList {...items} />
    </div>
  );
};

render(<App />, document.getElementById('root'));
