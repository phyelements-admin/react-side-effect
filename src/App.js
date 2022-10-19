import logo from './logo.svg';
import './App.css';
import { useState, useEffect} from 'react';
import axios from 'axios';
function Example(props){
  return(
    <>
  <h1>{props.text}</h1>
   {props.children};
  </>
  );
  

}

function App() {
  return (
    <>
    <Example text="Component Composition" >
       
      <h1>Example Child 1</h1>
      <h2>Example Child 2</h2>
    </Example>
    <div className="App">
      <button >Home</button>
      <button >About</button>
    
    </div>
    </>
  );
}

export default App;
