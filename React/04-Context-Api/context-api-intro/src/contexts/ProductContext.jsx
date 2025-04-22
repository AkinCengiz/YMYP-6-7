import React, { createContext, useEffect, useState } from 'react'

const ProductContext = createContext();

function ProductProvider({children}) {
    const [productInfo,setProductInfo] = useState("");
    const [products, setProducts] = useState([]);
    const [counter,setCounter] = useState(0);

  useEffect(() => {
    setProducts([
      {id : 1, name : "Bilgisayar",price : 15000},
      {id : 2, name : "Cep Telefonu",price : 12000},
      {id : 3, name : "Televizyon",price : 10000},
      {id : 4, name : "Klavye",price : 500}
  ])
  },[])

  const values = {
    productInfo,
    setProductInfo,
    products, 
    setProducts,
    counter,
    setCounter
  }
  return (
    <ProductContext.Provider value={values}>
        {children}
    </ProductContext.Provider>
  )
}

export  {ProductContext,ProductProvider}