import React from 'react'
import CardList from './CardList'

function Content({productInfo,setProductInfo}) {
  return (
    <main className='main'>
        <CardList productInfo={productInfo} setProductInfo={setProductInfo}/>
    </main>
  )
}

export default Content