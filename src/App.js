import logo from './logo.svg';
import './App.css';
import { useState, useEffect,useReducer} from 'react';
function changer(state,action) {
  console.log(action);
  switch(action){
    case 'increment':
      return {count:state.count+1};
    case 'decrement':
      return {count:state.count-1};
      
  }
 
  
 

}
function App() {
  console.log("rendered");
  const[no,setNo] = useReducer(changer,{count:0});
  const decrement = ()=>{
    setNo('decrement');

  }
  const increment = ()=>{
    setNo('increment');

  }

  return (
    <div className="App">
      <button  width="200px" onClick={decrement} className="Btn">-</button>
      <span>{no.count}</span>
      <button onClick={increment} className="Btn">+</button>
      
    </div>
  );
}

export default App;
