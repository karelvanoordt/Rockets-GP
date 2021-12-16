import React from 'react';
import { useSelector } from 'react-redux';
import '../styling/missionsProfile.css';

const MissionProfile = () => {
  const missions = useSelector((state) => state.missionsReducer);
  const missionsFiltered = missions.filter((mission) => mission.reserved === false);
  const noMissions = missionsFiltered.length <= 0;

  return (
    <div className="Pmission">
      <section className="content">
        <h1 className="Pheader">My Missions</h1>
        { noMissions
            && <p>NO JOINED MISSIONS</p>}
        <ul>
          {missionsFiltered.map((mission) => (
            <li className="Pname" key={mission.id}>{mission.title}</li>
          ))}
        </ul>
      </section>
    </div>
  );
};
export default MissionProfile;
