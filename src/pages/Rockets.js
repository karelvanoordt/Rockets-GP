import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getROCKETS } from '../redux/pages/rockets';
import Rocket from '../components/rocket';
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
        <Rocket
          key={rocket.id}
          RocketId={rocket.id}
          rocketName={rocket.rocket_name}
          flickrImages={rocket.flickr_images}
          description={rocket.description}
        />
      ))}
    </div>
  );
}

export default Rockets;
