import React from 'react';
import SearchBar from './components/SearchBar';
import ItemList from './components/ItemsList';
import './Styles/App.css';

const App = () => {
  return (
    <div className="app-container">
      <h1>Item Filter</h1>
      <SearchBar />
      <ItemList />
    </div>
  );
};

export default App;
