import React from 'react';
import '../styles/NewsItem.css';

const NewsItem = ({ article }) => {
    return (
        <div className="news-item">
            <img src={article.urlToImage} alt={article.title} />
            <div className="news-item-content">
                <h2>{article.title}</h2>
                <p>{article.description}</p>
                <a href={article.url} target="_blank" rel="noopener noreferrer">
                    Read More
                </a>
            </div>
        </div>
    );
};

export default NewsItem;
