import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getMISSIONS } from '../redux/pages/missions';
import Mission from '../components/table';
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
          <th />
        </tr>
        {missionslist.map((mission) => (
          <Mission key={mission.id} mission={mission} />
        ))}
      </table>
    </div>
  );
}

export default DisplayMissions;
