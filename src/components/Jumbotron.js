import React from 'react';


const Jumbotron = (props) => {
    const { mImage, mHeight } = props;

    let styles = {
        "backgroundImage": `url(${mImage})`,
        "height": `${mHeight}`,
    }
    return (
        <div className="jumbotron" style={styles}>{props.children}</div>
    )
}

export default Jumbotron;