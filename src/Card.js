import React from 'react';

function Card(props) {
    return(

        <div className="card text-center border-0" style={{"width": "20em"}} id="card">
            <img src={props.imageUrl} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                <p className="card-text">{props.description}</p>
            </div>
        </div>
    )
};


export default Card;