import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { joinMission, cancelMission, updateStatus } from '../redux/pages/missions';

export default function Mission({
  id, status, title, description, reserved, Bg,
}) {
  const dispatch = useDispatch();

  function eventHandler(e) {
    const btn = e.target.className;
    const { id } = e.target;

    if (btn === 'state') {
      dispatch(joinMission(id));
      dispatch(updateStatus(id));
      let arr = [];
      const obj = {
        status,
        id,
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
      dispatch(cancelMission(id));
      dispatch(updateStatus(id));
      const arr1 = JSON.parse(localStorage.getItem('statusData'));
      const index = arr1.findIndex((item) => item.id === id);
      arr1.splice(index, 1);
      localStorage.setItem('statusData', JSON.stringify(arr1));
    }
  }

  function addBTN(state) {
    if (state) {
      return <button type="button" id={id} className="state" onClick={eventHandler}>Join Mission</button>;
    }
    return <button type="button" id={id} className="state_2" onClick={eventHandler}>Leave Mission</button>;
  }

  return (
    <tr key={id}>
      <td>{title}</td>
      <td className="m_d">{description}</td>
      <td>
        <p className={Bg}>{status}</p>
      </td>
      <td>
        {addBTN(reserved)}
      </td>
    </tr>
  );
}

Mission.propTypes = {
  id: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  reserved: PropTypes.bool.isRequired,
  Bg: PropTypes.string.isRequired,
};
