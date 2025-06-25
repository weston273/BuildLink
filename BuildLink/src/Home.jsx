import React from 'react';
import NavBar from './components/NavBar.jsx'
import './Home.css';

function Home() {

    return(
        <>
            < NavBar />
            <div className="heroSection">
                <h2 className="heroTitle">
                    Get Quality Service from Verified Experts!
                </h2>
                <p className="heroText">
                    "Welcome to BuildLink! We turn your visions into reality with our skilled handyman services. From quick repairs to full renovations, our experienced team prioritizes quality and customer satisfaction. Let us handle the heavy lifting—contact us today for a free consultation!
                </p>
            </div>
        </>
    )
}

export default Home;