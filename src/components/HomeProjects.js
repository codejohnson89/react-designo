import React from 'react';
import { Link } from 'react-router-dom';


/**
 * This function returns a div with an id of homeProjects, which contains a row div with three link
 * components, each of which contains a div with a class of design, which contains a div with a class
 * of text-container, which contains an h2 and a p
 * @returns A div with the id of homeProjects.
 */
const HomeProjects = () => {
    return (
        <div id="homeProjects">
            <div className="row">
                <Link to="/webdesign" className="web"><div className="design"><div className="text-container"><h2>web design</h2><p>view projects</p></div></div></Link>
                <Link to="/appdesign" className="app"><div className="design"><div className="text-container"><h2>app design</h2><p>view projects</p></div></div></Link>
                <Link to="/graphicdesign" className="graphic"><div className="design"><div className="text-container"><h2>grapic design</h2><p>view projects</p></div></div></Link>
            </div>
        </div>
    )
}


export default HomeProjects;