import React from 'react';


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