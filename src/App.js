import logo from './logo.svg';
import './App.css';
import { useState, useEffect} from 'react';

function App() {
  console.log("rendered");
  const[text,setText] = useState('home');
  // below useEffect executes only when first time component rendered
  // useEffect(()=>{console.log("button is clicked")},[]);
  //  this useEffect executes only when text get change  
  useEffect(()=>{console.log("button is clicked")},[text]);

  return (
    <div className="App">
      <button onClick={()=>{setText('home')}}>Home</button>
      <button onClick={()=>{setText('about')}}>About</button>
      <h1>{text}</h1>
    </div>
  );
}

export default App;
