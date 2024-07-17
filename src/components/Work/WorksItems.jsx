import React from 'react';

const WorksItems = ({item}) => {
    return (
        <div className="work__card" key={item.id}>
            <img src={item.image} alt=""></img>
        </div>
    )
} 

export default WorksItems