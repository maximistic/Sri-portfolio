import React from 'react';

const WorksItems = ({ item }) => {
    const handleDemoClick = () => {
        // Update this URL to match where the HTML file is being served from
        window.location.href = '/NotFoundPage/NotFoundPage.html';
    };

    return (
        <div className="work__card" key={item.id}>
            <img src={item.image} alt="" className="work__img"></img>
            <h3 className="work__title">{item.title}</h3>
            <a href="#" className="work__button" onClick={handleDemoClick}>
                Demo <i className="bx bx-right-arrow-alt work__button-icon"></i>
            </a>
        </div>
    );
};

export default WorksItems;
