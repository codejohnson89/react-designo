import React from 'react';


const Card = (props) => {

    const { image, altText, heading, text } = props;

    return (
        <>
        <div class="card">
            <img src={image} className="card-img-top" alt={altText}/>
            <div class="card-body">
                <h3 class="card-title">{heading}</h3>
                <p class="card-text">{text}</p>
            </div>
        </div>
        </>
    )
}


export default Card;