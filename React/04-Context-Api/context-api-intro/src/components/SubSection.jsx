import React, { useContext } from 'react'
import { ProductContext } from '../contexts/ProductContext'

function SubSection() {
    const {productInfo} = useContext(ProductContext)
  return (
    <h1>{productInfo}</h1>
  )
}

export default SubSection