import React from "react"
import Card from "./components/Card";
import List from "./components/List";
import Custom from "./components/Custom";

function App() {
  const name = "Akın Cengiz";
  return (
    <>
      <Custom />
      <br /><hr /><br />
      <h1 className="bg-dark">Merhaba React</h1>
      <h2 className="bg-danger">{15*4}</h2>
      <input type="text"/>
      <p style={{backgroundColor : "red",fontSize:"18px"}}>{name} Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut error at officiis recusandae suscipit molestias illum sint explicabo beatae veritatis.</p>
      <p>Son Yazdığım Paragrafg Elementi</p>
      <Card/>
      <List />
    </>

  )
}

export default App
