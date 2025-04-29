import React from 'react'

const PageTitle = (props) => {
  return (
    <h2 className={props.classes} style={{color:"green"}}>{props.title}</h2>
  )
}

export default PageTitle