import React from 'react';
import { Link } from 'react-router-dom';


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