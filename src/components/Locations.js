import React from 'react';

import uk from '../assets/shared/desktop/illustration-united-kingdom.svg';
import aus from '../assets/shared/desktop/illustration-australia.svg';
import canada from '../assets/shared/desktop/illustration-canada.svg';

import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';


/**
 * The function returns a div with a class of locations-mini locations. Inside the div, there are three
 * divs with a class of location. Each location div has a figure, h3, and a button. The figure has an
 * img tag with a src attribute of either uk, aus, or canada. The h3 has a text of either united
 * kingdom, australia, or canada. The button has a class of btn-custom and a text of see location
 * @returns A div with three divs inside of it. Each div has a figure, h3, and a button.
 */
const Locations = () => {
    return (
        <div className="locations-mini locations">
                <div className="location one">
                    <figure><img src={uk} alt="united kingdom" /></figure>
                    <h3>united kingdom</h3>
                    <Link to="/location"><Button className="btn-custom">see location</Button></Link>
                </div>
                <div className="location two">
                <figure><img src={aus} alt="australia" /></figure>
                    <h3>australia</h3>
                    <Link to="/location"><Button className="btn-custom">see location</Button></Link>
                </div>
                <div className="location three">
                <figure><img src={canada} alt="canada" /></figure>
                    <h3>canada</h3>
                    <Link to="/location"><Button className="btn-custom">see location</Button></Link>
                </div>
            </div>
    )
}

export default Locations;