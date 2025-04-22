import React, { useContext } from 'react'
import Card from './Card'
import { ProductContext } from '../contexts/ProductContext'

const CardList = () => {
  //  const [products, setProducts] = useState([
  //       {id : 1, name : "Bilgisayar",price : 15000},
  //       {id : 2, name : "Cep Telefonu",price : 12000},
  //       {id : 3, name : "Televizyon",price : 10000},
  //       {id : 4, name : "Klavye",price : 500}
  //   ]);
  const {products} = useContext(ProductContext)
  return (
    <section className='card-list'>
      {
        products.map(product => <Card key={product.id} product={product} />)
      }
    </section>
  )
}

export default CardList