import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { bookRocket, cancelRocket, updateStatus } from '../redux/pages/rockets';

export default function Rocket({
  RocketId, flickrImages, rocketName, description, rocketReserved,
}) {
  const dispatch = useDispatch();

  function eventHandler(e) {
    const btn = e.target.className;
    const { id } = e.target;

    if (btn === 'Rbadge') {
      dispatch(bookRocket(RocketId));
      dispatch(updateStatus(RocketId));
      let arr = [];
      const obj = {
        id: RocketId,
        reserved: true,
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
    } else if (btn === 'Rbadge_2') {
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
      return <button type="button" id={RocketId} className="Rbadge_2" onClick={eventHandler}>Cancel Reservation</button>;
    }
    return <button type="button" id={RocketId} className="Rbadge" onClick={eventHandler}>Reserve Rocket</button>;
  }

  function addBadge(rocketReserved) {
    if (rocketReserved === true) {
      return <div className="rckt-res-badge">Reserved</div>;
    }
    return '';
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
          <span className="rocket-reserved">{addBadge(rocketReserved, description)}</span>
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
  rocketReserved: PropTypes.bool.isRequired,
};
