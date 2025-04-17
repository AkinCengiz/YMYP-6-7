import { useEffect, useState } from 'react'
import './App.css'

function App() {
 const [first,setFirst] = useState(0);
 const [second, setSecond] = useState(0)

 //1. Kullanım
 useEffect(() => {
  console.log("\n1-Komponent ilk yüklendiğinde ve komponentte herhangi bir değişiklik olduğunda çalışır...");
 })
//2. Kullanım
 useEffect(() => {
  console.log("2-Komponent ilk yüklendiğinde çalışır...")
 },[])

 //3. Kullanım
 useEffect(() => {
  console.log("3-Komponent ilk yüklendiğinde ve first state değeri her değiştiğinde çalışır...")
 },[first]);

 //3. Kullanım
useEffect(() => {
  console.log("4-Komponent ilk yüklendiğinde ve second state değeri her değiştiğinde çalışır...")
},[second])
//4. Kullanım
useEffect(() => {
  console.log("5-Komponent ilk yüklendiğinde ve first veya second state değeri her değiştiğinde çalışır...")
},[first,second]);

  return (
    <>
      <h1>Use Effect</h1>
      <div id="first">
        <h2>First : {first}</h2>
        <button onClick={() => setFirst(first + 1)}>First Increment</button>
      </div>
      <div id="second">
        <h2>Second : {second}</h2>
        <button onClick={() => setSecond(second + 1)}>Second Increment</button>
      </div>
    </>
  )
}

export default App
