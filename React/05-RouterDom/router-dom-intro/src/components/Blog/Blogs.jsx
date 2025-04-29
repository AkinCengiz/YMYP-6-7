import React from 'react'
import BlogImage from './BlogImage'
import BlogText from './BlogText'

const Blogs = () => {
  return (
    <div className="blog d-flex p-3">
      <BlogImage  image={`https://picsum.photos/id/${Math.ceil(Math.random() * 250)}/900/600`}/>
      <BlogText />
      </div>
  )
}

export default Blogs