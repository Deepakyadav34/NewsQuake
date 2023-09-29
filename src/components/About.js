// About.js

import React from 'react';
import '../styles/About.css';

const About = () => {
    return (

        <div className="about-container">
            <div className="about-content">
                <h1>About NewsQuake</h1>
                <p>
                    NewsQuake is a platform that provides users with the latest news articles from various categories such as politics, sports, entertainment, technology, and more. Our goal is to keep users informed and up-to-date with the latest happenings around the world.
                </p>
                <p>
                    This web app is built using React and utilizes the NewsAPI to fetch news data from reliable sources. It also implements various features such as search functionality, pagination, trending news section, and a responsive design to enhance the user experience.
                </p>
                <p>
                    We hope you enjoy using News Web App and find it a valuable source for staying informed about current events and topics of interest.
                </p>
            </div>
        </div>

    );
};

export default About;
