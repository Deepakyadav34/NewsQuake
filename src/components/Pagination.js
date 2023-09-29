import React from 'react';
import '../styles/Pagination.css';

const Pagination = ({ currentPage, totalPages, goToPage, goToPrevPage, goToNextPage }) => {
    return (
        <nav className="pagination">
            <ul>
                <li>
                    <button disabled={currentPage === 1} onClick={goToPrevPage}>
                        Prev
                    </button>
                </li>
            
                <li>
                    <button disabled={currentPage === totalPages} onClick={goToNextPage}>
                        Next
                    </button>
                </li>
            </ul>
        </nav>
    );
};

export default Pagination;
