import React from 'react';


/**
 * It returns a div with the className of mapContainer locations, which contains three divs with the
 * className of singleMap, which contains a div with the className of contact, which contains an h1,
 * which contains the text "canada", and a div with the className of contact-info, which contains two
 * divs with the className of left and right, which contain a p with the className of office, which
 * contains the text "Designo Central Office", and a p, which contains the text "3886 Wellington
 * Street", and a p, which contains the text "Toronto, Ontario M9C 3J5", and a p with the className of
 * phone, which contains the text "Contact", and a p, which contains the text "P : +1 253-863-8967",
 * and a p, which contains the text "M : contact@designo.co", and a div with the className of map one
 * @returns A div with the className of mapContainer locations.
 */
const Location = () => {
    return (
        <>
            <div className="mapContainer locations">
                <div className="singleMap">
                    <div className="contact">
                        <h1>canada</h1>
                        <div className="contact-info">
                            <div className="left">
                                <p className="office">Designo Central Office</p>
                                <p>3886 Wellington Street</p>
                                <p>Toronto, Ontario M9C 3J5</p>
                            </div>
                            <div className="right">
                            <p className="phone">Contact</p>
                                <p>P : +1 253-863-8967</p>
                                <p>M : contact@designo.co</p>
                            </div>
                        </div>
                    </div>
                    <div className="map one"></div>
                </div>
                <div className="singleMap reverse">
                <div className="map two"></div>
                    <div className="contact">
                        <h1>Australia</h1>
                        <div className="contact-info">
                            <div className="left">
                            <p className="office">Designo AU Office</p>
                                <p>19 Balonne Street</p>
                                <p>New South Wales 2443</p>
                            </div>
                            <div className="right">
                            <p className="phone">Contact</p>
                                <p>P : (02) 6720 9092</p>
                                <p>M : contact@designo.au</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="singleMap">
                    <div className="contact">
                        <h1>United Kingdom</h1>
                        <div className="contact-info">
                            <div className="left">
                            <p className="office">Designo UK Office</p>
                                <p>13 Colorado Way</p>
                                <p>Rhyd-y-fro SA8 9GA</p>
                            </div>
                            <div className="right">
                            <p className="phone">Contact</p>
                                <p>P : 078 3115 1400</p>
                                <p>M : contact@designo.uk</p>
                            </div>
                        </div>
                    </div>
                    <div className="map three"></div>
                </div>
            </div>
        </>
    )
}

export default Location;