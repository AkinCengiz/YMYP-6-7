import { useState } from 'react';
import './App.css'
import Card from './components/Card';


function App() {
  const [first,setFirst] = useState(0)
  const [second,setSecond] = useState(0);
  
  // const [cities,setCities] = useState(["İstanbul","Ankara"]);
  // const [firstName,setFirstName] = useState("Akın");
  // const [isActive,setIsActive] = useState(true);
  // const [user,setUser] = useState({firstname : "Akın",lastname : "Cengiz"});
  // function firstIncrement(){
  //   setFirst(first + 1);
  // }
  // function secondIncrement(){
  //   setSecond(second + 1);
  // }
  return (
    <>
      <div id="first">
        <h1>First : {first} </h1>
        <button onClick={() => {setFirst(first + 1)}}>First Increment</button>
      </div>
      <div id="seconst">
        <h1>Second : {second}</h1>
        <button onClick={() => setSecond(second + 1)}>Second Increment</button>
      </div>
      <Card />
    </>
  )
}

export default App
