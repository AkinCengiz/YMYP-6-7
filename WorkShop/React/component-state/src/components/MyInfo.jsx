import React from 'react'

function MyInfo() {
  return (
    <div className="w3-container">
    <a
      href="#"
      onclick="w3_close()"
      className="w3-hide-large w3-right w3-jumbo w3-padding w3-hover-grey"
      title="close menu"
    >
      <i className="fa fa-remove" />
    </a>
    <img
      src="/assets/images/avatar_g2.jpg"
      style={{ width: "45%" }}
      className="w3-round"
    />
    <br />
    <br />
    <h4>
      <b>PORTFOLIO</b>
    </h4>
    <p className="w3-text-grey">Template by W3.CSS</p>
  </div>
  )
}

export default MyInfo