import React from 'react'

function Overlay() {
  return (
    <div
          className="w3-overlay w3-hide-large w3-animate-opacity"
          onclick="w3_close()"
          style={{ cursor: "pointer" }}
          title="close side menu"
          id="myOverlay"
        />
  )
}

export default Overlay