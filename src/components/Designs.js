import React from 'react';
import { Link } from 'react-router-dom';


/**
 * This function takes in props and returns a link that contains a div with a background image and a
 * div with a heading and text
 * @param props - This is the props object that is passed to the component.
 * @returns A link to the link prop, with a div with a background image of the image prop, with a div
 * with a h3 of the heading prop and a p of the text prop.
 */
const Designs = (props) => {
    const { heading, text, image, link } = props;

    const styles = {
        "backgroundImage": `url(${image})`
    }

    return (
        <>
        <Link to={link}>
            <div className="card-custom" style={styles}>
                <div className="content">
                    <h3>{heading}</h3>
                    <p>{text}</p>
                </div>
            </div>
        </Link>
        </>
    )
}

export default Designs;