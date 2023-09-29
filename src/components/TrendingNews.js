import React, { useState, useEffect } from 'react';
import '../styles/TrendingNews.css';
import api from '../services/api';

const TrendingNews = () => {
    const [trendingArticles, setTrendingArticles] = useState([]);

    useEffect(() => {
        fetchTrendingArticles();
    }, []);

    const fetchTrendingArticles = async () => {
        try {
            const response = await api.get('/top-headlines', {
                params: {
                    country: 'in',
                    category: 'general',
                    pageSize: 5,
                },
            });
            setTrendingArticles(response.data.articles);
        } catch (error) {
            console.error('Error fetching trending articles:', error);
        }
    };

    return (
        <div className="trending-news">
            <h2>Trending News</h2>
            {trendingArticles.map((article) => (
                <div key={article.url} className="trending-news-item">
                    <img src={article.urlToImage} alt={article.title}
                        style={{
                            width: "auto",
                            height: "200px",
                            objectFit: "cover"
                        }}
                    />

                    <h3>{article.title}</h3>
                    <p>{article.description}</p>
                    <a className="button" href={article.url} target='_blank' rel="noreferrer">View More</a>
                </div>
            ))}
        </div>
    );
};

export default TrendingNews;
