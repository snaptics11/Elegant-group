import React from 'react';
import './Amenities.css'; 
import amphitheatreIcon from '../../assets/amenities1.jpg'; 
import boxCricketIcon from '../../assets/amenities2.jpg';
import basketBallIcon from '../../assets/amenities3.jpg';
import boxFootBallIcon from '../../assets/amenities4.jpg';
import btRoadsIcon from '../../assets/amenities5.jpg';
import cctvSurveillanceIcon from '../../assets/amenities6.jpg';
import cyclingtrackIcon from "../../assets/amenities7.jpg"
import ArcIcon from "../../assets/amenities8.jpg";
import KidsplayareaIcon from "../../assets/amenities9.jpg";
import MultipurposestadiumIcon from "../../assets/amenities10.jpg";
import PlayzoneIcon from "../../assets/amenities11.jpg";
import SandvolleyballIcon from "../../assets/amenities12.jpg";
import SkatingrinkIcon from "../../assets/amenities13.jpg";
import TenniscourtIcon from "../../assets/amenities15.jpg";
import WatertankIcon from "../../assets/amenities16.jpg";

const Amenities = () => {
    const amenitiesData = [
        { icon: amphitheatreIcon, title: 'AMPHITHEATRE' },
        { icon: boxCricketIcon, title: 'BOX CRICKET' },
        { icon: basketBallIcon, title: 'BASKET BALL' },
        { icon: boxFootBallIcon, title: 'BOX FOOT BALL' },
        { icon: btRoadsIcon, title: 'BT ROADS' },
        { icon: cctvSurveillanceIcon, title: 'CC TV SURVEILLANCE' },
        { icon: cyclingtrackIcon, title: 'CYCLING TRACK' },
        { icon: ArcIcon, title: 'ENTRANCE ARC' },
        { icon: KidsplayareaIcon, title: 'KIDS PLAY AREA' },
        { icon: MultipurposestadiumIcon, title: 'MULTIPURPOSE STADIUM' },
        { icon: PlayzoneIcon, title: 'PLAYZONE' },
        { icon: SandvolleyballIcon, title: 'SAND VOLLEY BALL' },
        { icon: SkatingrinkIcon, title: 'SKATING RINK' },
        { icon: TenniscourtIcon, title: 'TENNIS COURT' },
        { icon: WatertankIcon, title: 'WATER TANK' },
    ];

    return (
        <div id='Amenities'>
        <div className="amenities-section" style={{ paddingTop:'90px' }}>
            <div className="container">
                <h2 className="text-center mb-4">AMENITIES</h2>
                <p className="text-center mb-5">Unparalleled Amenities, Elevating Your Lifestyle to Extraordinary Heights!</p>
                <div className="row justify-content-center">
                    {amenitiesData.map((amenity, index) => (
                        <div key={index} className="col-md-4 col-sm-6 mb-4">
                            <div className="amenity-card">
                                <img src={amenity.icon} alt={amenity.title} className="amenity-icon" />
                                <p className="amenity-title">{amenity.title}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
        </div>
    );
};

export default Amenities;