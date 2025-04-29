import React from 'react'

const BlogImage = (props) => {
  return (
    <figure className="figure w-100">
          <img src={props.image} className="figure-img img-fluid rounded" alt="..." />
          <figcaption className="figure-caption text-end">
            A caption for the above image.
          </figcaption>
        </figure>
  )
}

export default BlogImage