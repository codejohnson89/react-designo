import React from 'react';
import { Link } from 'react-router-dom';


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