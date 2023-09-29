import React from 'react';
import NewsItem from './NewsItem';
import '../styles/NewsList.css';

const NewsList = ({ articles }) => {
    return (
        <div className="news-list">
            {articles.map((article) => (
                <NewsItem key={article.publishedAt} article={article} />
            ))}
        </div>
    );
};

export default NewsList;
