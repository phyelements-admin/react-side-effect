import logo from './logo.svg';
import './App.css';
import { useState, useEffect , useRef} from 'react';

function App() {
  
  const inputRef = useRef(null);
  
  useEffect(()=>{
    inputRef.current.focus();
    
  },[]);
  

  return (
    <div className="App">
      <h1>Welcome to react</h1>
      <input ref={inputRef} type="text" />
      <br/>
      <input type="text" />
    </div>
  );
}

export default App;
