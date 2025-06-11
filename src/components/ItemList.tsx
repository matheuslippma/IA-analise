import React, { useState } from 'react';

const ItemList: React.FC = () => {
  const [items, setItems] = useState<string[]>([]);
  const [newItem, setNewItem] = useState<string>('');

  const addItem = () => {
    if (newItem.trim() === '') return;
    setItems([...items, newItem]);
    setNewItem('');
  };

  return (
    <div>
      <h2>Lista de Itens</h2>
      <input
        type="text"
        placeholder="Novo item"
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
      />
      <button onClick={addItem}>Adicionar</button>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default ItemList;
