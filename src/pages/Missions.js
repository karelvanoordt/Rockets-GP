import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getMISSIONS } from '../redux/pages/missions';
import Mission from '../components/mission';
import '../styling/missions.css';

function DisplayMissions() {
  const missionslist = useSelector((state) => state.missionsReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMISSIONS());
  }, [dispatch]);

  return (
    <div className="con">
      <table>
        <tr>
          <th>Mission</th>
          <th>Description</th>
          <th>Status</th>
        </tr>
        {missionslist.map((mission) => (
          <Mission
            key={mission.id}
            id={mission.id}
            status={mission.status}
            title={mission.title}
            description={mission.description}
            reserved={mission.reserved}
            Bg={mission.Bg}
          />
        ))}
      </table>
    </div>
  );
}

export default DisplayMissions;
