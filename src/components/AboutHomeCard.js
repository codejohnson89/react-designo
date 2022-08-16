import React from 'react';


/**
 * This function takes in props and returns a div with a figure and a div with a heading and a
 * paragraph
 * @param props - {
 * @returns A React component
 */
const AboutHomeCard = (props) => {

    const {heading, image, text, altText} = props;

    return (
            <div class="card-custom">
                <figure>
                    <img src={image} alt={altText} />
                </figure>
                <div className="content">
                    <h3>{heading}</h3>
                    <p>{text}</p>
                </div>
            </div>
    )
}

export default AboutHomeCard;