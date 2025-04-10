import React from "react"
import Deneme from "./Deneme";

function App() {
  const name = "Akın Cengiz";
  return (
    <>
      <h1 className="bg-dark">Merhaba React</h1>
      <h2 className="bg-danger">{15*4}</h2>
      <img src="" alt=""/>
      <input type="text"/>
      <p style={{backgroundColor : "red",fontSize:"18px"}}>{name} Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut error at officiis recusandae suscipit molestias illum sint explicabo beatae veritatis.</p>
      <p>Son Yazdığım Paragrafg Elementi</p>
      <Deneme />
      {/* background-color font-size */}
    </>

  )
}

export default App
