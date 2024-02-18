import React from 'react'

const NewsItem = (props)=> {
        let { title, description, imageUrl, newsUrl, publishDate, author, source} = props;
        return (
            <div>
                <div className="card" style={{ margin: '20px auto' }}>
                    <span style={{left: "91%", zIndex:2}} className="position-absolute top-0 translate-middle badge rounded-pill bg-danger">
                        {source}
                    </span>
                    <div>
                        <img src={imageUrl} className="card-img-top" alt="..." />
                    </div>
                    <div className="card-body">
                        <h5 className="card-title">{title}...</h5>
                        <p className="card-text">{description}...</p>
                        <p className="card-text"><small className="text-body-secondary">by {author? author:"unknown"} {new Date(publishDate).toGMTString()}</small></p>
                        <a href={newsUrl} className="btn btn-dark btn-sm" target='_blank' rel="noreferrer">Read More</a>
                    </div>
                </div>
            </div>
        )
}

export default NewsItem
