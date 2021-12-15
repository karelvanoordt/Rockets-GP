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
        <Rocket key={rocket.id} rocket={rocket} />
      ))}
    </div>
  );
}

export default Rockets;
