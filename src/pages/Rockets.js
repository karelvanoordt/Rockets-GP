import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getROCKETS } from '../redux/pages/rockets';
import '../styling/rockets.css';

function Rockets() {  
    const rocketslist = useSelector((state) => state.rocketsReducer);
    const dispatch = useDispatch();
  
    useEffect(() => {
      dispatch(getROCKETS());
    }, [dispatch]);

    return (
        <div className="rockets-main">
        {rocketslist.map((rocket) => (
            <div className="rocket-container">
                <div className="rocket-img-col">
                    <div className="rocket-img-cont">
                        <img className="rocket-img" src={rocket.flickr_images[0]} alt="SpaceX rocket"/>
                    </div>
                </div>    
          

                <div className="rocket-info-col">
                    <h2 className="rocket-title">{rocket.rocket_name}</h2>
                    <p className="rocket-description"><span className="rocket-reserved"></span>{rocket.description}</p>
                    <button className="rocket-reserve-btn" type="submit">Reserve Rocket</button>
                </div>


       

            </div>
        
        ))}
        </div>
    )
};
      

export default Rockets;
