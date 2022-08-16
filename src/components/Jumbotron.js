import React from 'react';


/**
 * This function takes in a prop called mImage, and uses it to set the background image of the
 * jumbotron.
 * @param props - This is the object that contains all the properties that were passed to the
 * component.
 * @returns A div with a class of jumbotron and a style of backgroundImage and height.
 */
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