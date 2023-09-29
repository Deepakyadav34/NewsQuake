import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import NewsList from '../components/NewsList';
import Loader from '../components/Loader';
import api from '../services/api';

const Category = () => {
    const { category } = useParams();
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchArticles = async () => {
            try {
                const response = await api.get('/top-headlines', {
                    params: {
                        country: 'in',
                        category,
                        pageSize: 10,
                    },
                });
                setArticles(response.data.articles);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching articles:', error);
            }
        };

        fetchArticles();
    }, [category]);

    return (
        <div>
            <h1>{category} News</h1>
            {loading ? <Loader /> : <NewsList articles={articles} />}
        </div>
    );
};

export default Category;
