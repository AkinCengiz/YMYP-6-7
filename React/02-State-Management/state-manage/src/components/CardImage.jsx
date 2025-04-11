import React from 'react'

function CardImage(props) {
  return (
    <>
        <img src={props.imageUrl} className="card-img-top" alt="..." />
    </>
  )
}

export default CardImage