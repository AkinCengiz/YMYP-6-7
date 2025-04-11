import React from 'react'
import Header from './Header'
import PhotoGrid from './PhotoGrid'
import ImageOfMe from './ImageOfMe'
import Contact from './Contact'
import Footer from './Footer'

function PageContent() {
  return (
    <div className="w3-main" style={{ marginLeft: 300 }}>
          {/* Header */}
          <Header/>
          <PhotoGrid />
          <ImageOfMe />
          <Contact />    
          <Footer />
          {/* End page content */}
        </div>
  )
}

export default PageContent