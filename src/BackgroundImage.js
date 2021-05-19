import React from 'react';

function BackgroundImage() {
    return (
        <div> 
            <img src='./welcome.jpeg' id="bg" className="position-relative"/>    
            <div className="blur">
                <h3 className="blur-words">Welcome to Blue Dolphin Engagement</h3>
            </div>
        </div>
    )
}

export default BackgroundImage
