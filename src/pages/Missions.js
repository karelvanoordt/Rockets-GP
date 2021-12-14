import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getMISSIONS } from '../redux/pages/missions';
import '../styling/missions.css';

function Missions() {  
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
    <th></th>
  </tr>
  {missionslist.map((mission) => (
  <tr>
    <td>{mission.title}</td>
    <td className="m_d">{mission.description}</td>
    <td>
        <label className='status' style={{ textTransform: 'uppercase' }}>Not a member</label>
    </td>
    <td>
        <button className='state'>Join Mission</button>
    </td>
  </tr>
  ))}

</table>
        </div>
    )
}

export default Missions;