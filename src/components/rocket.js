import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { bookRocket, cancelRocket, updateStatus } from '../redux/pages/rockets';

export default function Rocket({
  RocketId, flickrImages, rocketName, description, rocketStatus, rocketReserved,
}) {
  const dispatch = useDispatch();

  function eventHandler(e) {
    const btn = e.target.className;
    const { id } = e.target;

    if (btn === 'state') {
      dispatch(bookRocket(RocketId));
      dispatch(updateStatus(RocketId));
      let arr = [];
      const obj = {
        status: rocketStatus,
        id: RocketId,
        reserved: true,
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
      dispatch(cancelRocket(RocketId));
      dispatch(updateStatus(RocketId));
      const arr1 = JSON.parse(localStorage.getItem('statusData'));
      const index = arr1.findIndex((item) => item.id === id);
      arr1.splice(index, 1);
      localStorage.setItem('statusData', JSON.stringify(arr1));
    }
  }

  function addBTN(state) {
    if (state) {
      return <button type="button" id={RocketId} className="rckt-state" onClick={eventHandler}>Reserve Rocket</button>;
    }
    return <button type="button" id={RocketId} className="rckt-state_2" onClick={eventHandler}>Cancel Reservation</button>;
  }

  return (
    <div className="rocket-container">
      <div className="rocket-img-col">
        <div className="rocket-img-cont">
          <img className="rocket-img" src={flickrImages[0]} alt="SpaceX rocket" />
        </div>
      </div>

      <div className="rocket-info-col">
        <h2 className="rocket-title">{rocketName}</h2>
        <p className="rocket-description">
          <span className="rocket-reserved" />
          {description}
        </p>
        <span className="rocket-reserve-btn">{addBTN(rocketReserved)}</span>
      </div>
    </div>
  );
}

Rocket.propTypes = {
  RocketId: PropTypes.string.isRequired,
  flickrImages: PropTypes.string.isRequired,
  rocketName: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  rocketStatus: PropTypes.string.isRequired,
  rocketReserved: PropTypes.bool.isRequired,
};
