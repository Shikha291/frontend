import React from 'react'

const ResourceItem = (props) => {
  let {title, imgUrl, url} = props;
  return (
    <div className="my-3">
        <div style={{height: '65vmin'}} className="card">
          <img style={{height: '45vmin'}} src={imgUrl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>            
            <a
              href={url}
              target="_blank"
              rel="noreferrer"
              className="btn btn-sm btn-dark"
            >
              Know more
            </a>
          </div>
        </div>
    </div>
  )
}

export default ResourceItem