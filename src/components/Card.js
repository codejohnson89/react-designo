import React from 'react';


/**
 * The Card function takes in props and returns a div with an image, heading, and text
 * @param props - This is the props object that is passed to the component.
 * @returns A card with an image, heading, and text.
 */
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