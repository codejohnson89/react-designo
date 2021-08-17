import React from 'react';

const Oval = () => {

    const styles = {
        "backgroundColor": "#f1f3f5",
        "opacity" : "0.5",
        "borderRadius" : "297px 297px 297px 0px",
        "height" : "594px",
        "width": "1006px",
        "position": "absolute",
        "top" : "505px",
        "zIndex" : "-1"
    }

    return (
        <div className="oval-circle" style={styles}></div>
    )
}

export default Oval;