import logo from './logo.svg';
import './App.css';
import { useState, useEffect} from 'react';
import Component1 from './components/Component1';

function App() {
  

  return (
    <div className="App">
      <h1>App Component</h1>
      <Component1>
      <h1>child Component(Component 1)</h1> 
      <h1>child Component(Component 2)</h1> 
      </Component1>
    </div>
  );
}

export default App;
