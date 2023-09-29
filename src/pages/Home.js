import React, { useState, useEffect } from 'react';
import NewsList from '../components/NewsList';
import Loader from '../components/Loader';
import Search from '../components/Search';
import Pagination from '../components/Pagination';
import TrendingNews from '../components/TrendingNews';
import api from '../services/api';

const Home = () => {
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);

    const handleSearch = async (query) => {
        setCurrentPage(1); // Reset to first page when a new search is performed
        fetchArticles(query, 1);
    };

    const fetchArticles = async (query, page) => {
        setLoading(true);
        try {
            const response = await api.get('/everything', {
                params: {
                    q: query,
                    pageSize: 10,
                    page: page,
                },
            });
            setArticles(response.data.articles);
            setTotalPages(Math.ceil(response.data.totalResults / 10));
            setLoading(false);
        } catch (error) {
            console.error('Error fetching articles:', error);
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchArticles('', currentPage);
    }, [currentPage]);

    const goToPage = (page) => {
        setCurrentPage(page);
    };

    const goToPrevPage = () => {
        setCurrentPage((prevPage) => prevPage - 1);
    };

    const goToNextPage = () => {
        setCurrentPage((prevPage) => prevPage + 1);
    };

    return (
        <div>
            <h1>Welcome to the NewsQuake</h1>
            <Search handleSearch={handleSearch} />
            {loading ? (
                <Loader />
            ) : (
                    <>
                        <TrendingNews />
                    <NewsList articles={articles} />
                    <Pagination
                        currentPage={currentPage}
                        totalPages={totalPages}
                        goToPage={goToPage}
                        goToPrevPage={goToPrevPage}
                        goToNextPage={goToNextPage}
                    />
                </>
            )}
        </div>
    );
};

export default Home;
