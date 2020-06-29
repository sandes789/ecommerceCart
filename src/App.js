import React from 'react';
import './App.css';
import DataContextProvider from './context/DataContext';
import Card from './components/Card'
import AddItems from './components/AddItems';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <DataContextProvider>
          <Card/>
          <AddItems/>
        </DataContextProvider>
      </header>
    </div>
  );
}

export default App;
