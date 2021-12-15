import React from 'react';
import { useDispatch } from 'react-redux';
import { joinMission, cancelMission, updateStatus } from '../redux/pages/missions';

export default function Mission(mission) {
  const dispatch = useDispatch();

  function eventHandler(e) {
    const btn = e.target.className;
    const { id } = e.target;

    console.log(id);

    if (btn === 'state') {
      dispatch(joinMission(mission.mission.id));
      dispatch(updateStatus(mission.mission.id));
      let arr = [];
      const obj = {
        status: mission.mission.status,
        id: mission.mission.id,
        reserved: false,
        bg: 'status_2',
      };
      arr.push(obj);
      if (localStorage.getItem('statusData') !== null) {
        const localArr = JSON.parse(localStorage.getItem('statusData'));
        arr.forEach((item) => {
          localArr.forEach((items) => {
            if (items.id !== item.id) {
              arr.push(items);
            } else {
              arr = arr.filter((ite) => ite.id === item.id);
            }
          });
        });
      }
      localStorage.setItem('statusData', JSON.stringify(arr));
    } else if (btn === 'state_2') {
      dispatch(cancelMission(mission.mission.id));
      dispatch(updateStatus(mission.mission.id));
      const arr1 = JSON.parse(localStorage.getItem('statusData'));
      const index = arr1.findIndex((item) => item.id === id);
      console.log(index);
      arr1.splice(index, 1);
      console.log(arr1);
      localStorage.setItem('statusData', JSON.stringify(arr1));
    }
  }

  function addBTN(state) {
    if (state) {
      return <button id={mission.mission.id} className="state" onClick={eventHandler}>Join Mission</button>;
    }
    return <button id={mission.mission.id} className="state_2" onClick={eventHandler}>Leave Mission</button>;
  }

  return (
    <tr key={mission.mission.id}>
      <td>{mission.mission.title}</td>
      <td className="m_d">{mission.mission.description}</td>
      <td>
        <label className={mission.mission.Bg}>{mission.mission.status}</label>
      </td>
      <td>
        {addBTN(mission.mission.reserved)}
      </td>
    </tr>
  );
}
