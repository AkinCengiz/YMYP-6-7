import React from 'react'

function Menu() {
  return (
    <div className="w3-bar-block">
            <a
              href="#portfolio"
              onclick="w3_close()"
              className="w3-bar-item w3-button w3-padding w3-text-teal"
            >
              <i className="fa fa-th-large fa-fw w3-margin-right" />
              PORTFOLIO
            </a>
            <a
              href="#about"
              onclick="w3_close()"
              className="w3-bar-item w3-button w3-padding"
            >
              <i className="fa fa-user fa-fw w3-margin-right" />
              ABOUT
            </a>
            <a
              href="#contact"
              onclick="w3_close()"
              className="w3-bar-item w3-button w3-padding"
            >
              <i className="fa fa-envelope fa-fw w3-margin-right" />
              CONTACT
            </a>
          </div>
  )
}

export default Menu