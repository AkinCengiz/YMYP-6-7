import React from 'react'
import MyInfo from './MyInfo'
import Menu from './Menu'
import SocialIcons from './SocialIcons'

function Sidebar() {
  return (
    <nav className="w3-sidebar w3-collapse w3-white w3-animate-left"
          style={{ zIndex: 3, width: 300 }}
          id="mySidebar">
          <br />
          <MyInfo />
          <Menu />
          <SocialIcons />
        </nav>
  )
}

export default Sidebar