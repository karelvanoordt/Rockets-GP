import React from 'react';
import { useSelector } from 'react-redux';
import '../styling/missionsProfile.css';

const RocketProfile = () => {
  const rockets = useSelector((state) => state.rocketsReducer);
  const rocketsFiltered = rockets.filter((rocket) => rocket.reserved === true);
  const norockets = rocketsFiltered.length <= 0;

  return (
    <div className="Pmission">
      <section className="content">
        <h1 className="Pheader">My rockets</h1>
        { norockets
            && <p>NO JOINED rockets</p>}
        <ul>
          {rocketsFiltered.map((rocket) => (
            <li className="Pname" key={rocket.id}>{rocket.rocket_name}</li>
          ))}
        </ul>
      </section>
    </div>
  );
};
export default RocketProfile;
