import React from 'react';
import './App.css';
import Nav from './components/nav';
import Menu from './components/menu';
import Home from './components/home';

function App() {
  return (
    <div className="App">
        <Nav/>
        <Menu />
        <Home />

    </div>
  );
}

export default App;
