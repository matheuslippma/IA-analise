# IA-analise

my-app/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Card.tsx
│   │   ├── Counter.tsx
│   │   ├── ItemList.tsx
│   │   └── Login.tsx
│   ├── App.tsx
│   ├── index.tsx
│   └── styles.css
├── package.json
├── tsconfig.json
└── README.md

npx create-react-app my-app --template typescript
cd my-app

import React, { useState } from 'react';

const Counter: React.FC = () => {
  const [count, setCount] = useState<number>(0);

  return (
    <div>
      <h2>Contador: {count}</h2>
      <button onClick={() => setCount(count + 1)}>Incrementar</button>
      <button onClick={() => setCount(count - 1)}>Decrementar</button>
    </div>
  );
};

export default Counter;

src/components/Login.tsx

import React, { useState } from 'react';

const Login: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Email:', email, 'Senha:', password);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>
      <input
        type="email"
        placeholder="E-mail"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <input
        type="password"
        placeholder="Senha"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <button type="submit">Entrar</button>
    </form>
  );
};

export default Login;
src/components/ItemList.tsx

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
src/components/Card.tsx

import React from 'react';

type CardProps = {
  title: string;
  description: string;
  imageUrl?: string;
};

const Card: React.FC<CardProps> = ({ title, description, imageUrl }) => {
  return (
    <div style={{ border: '1px solid #ccc', padding: 16, borderRadius: 8 }}>
      {imageUrl && <img src={imageUrl} alt={title} style={{ width: '100%' }} />}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default Card;
src/App.tsx
import React from 'react';
import Card from './components/Card';
import Counter from './components/Counter';
import ItemList from './components/ItemList';
import Login from './components/Login';

const App: React.FC = () => {
  return (
    <div>
      <h1>Exemplos com React e TypeScript</h1>

      <h2>Componente de Contador</h2>
      <Counter />

      <h2>Componente de Login</h2>
      <Login />

      <h2>Componente de Lista de Itens</h2>
      <ItemList />

      <h2>Componente de Card</h2>
      <Card
        title="Card Exemplo"
        description="Este é um exemplo de card com props!"
        imageUrl="https://via.placeholder.com/150"
      />
    </div>
  );
};

export default App;
src/index.tsx

import React from 'react';
import ReactDOM from 'react-dom';
import './styles.css';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

src/styles.css
body {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 20px;
}

h1 {
  color: #333;
}

h2 {
  margin-top: 20px;
}

button {
  margin-top: 10px;
  padding: 8px 16px;
  background-color: #007bff;
  color: white;
  border: none;
  cursor: pointer;
}

button:hover {
  background-color: #0056b3;
}

npm start

