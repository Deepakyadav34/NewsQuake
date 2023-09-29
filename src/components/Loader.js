import React from 'react';
import { BounceLoader } from 'react-spinners';
import '../styles/Loader.css';

const Loader = () => {
    return (
        <div className="loader">
            <BounceLoader color="#3f51b5" size={60} />
        </div>
    );
};

export default Loader;
