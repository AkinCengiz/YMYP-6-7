import { useContext } from "react";
import { ProductContext } from "../contexts/ProductContext";

const Card = ({product,user}) => {
  const {setProductInfo} = useContext(ProductContext);

  const getInfo = () => {
    setProductInfo(product.name);
  }
  return (
    <>
    {
      user ? <div className="card-wrapper">
      <div className='card'>
        <ul className='list-group'>
          <li className="list-group-item">{user.name.firstname}</li>
          <li className="list-group-item">{user.name.lastname}</li>
          <li className="list-group-item">{user.email}</li>
          <li className="list-group-item">{user.username}</li>
        </ul>
      </div>
    </div> : <div className="card-wrapper">
      <div className='card'>
        <ul className='list-group'>
          <li className="list-group-item">Ürün Bilgileri</li>
          <li className="list-group-item">Id : {product.id}</li>
          <li className="list-group-item">Name : {product.name}</li>
          <li className="list-group-item">Price : {product.price}₺</li>
        </ul>
        <button onClick={getInfo}>++</button>
      </div>
    </div>
    }
    </>
    
  )
}

export default Card