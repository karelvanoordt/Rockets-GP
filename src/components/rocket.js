import React from 'react';
import { useDispatch } from 'react-redux';
import { bookRocket, cancelRocket, updateStatus } from '../redux/pages/rockets';

export default function Rocket({ rocket }) {

    const dispatch = useDispatch();

    function eventHandler(e) {
        const btn = e.target.className;
        const { id } = e.target;

        if (btn === 'state') {
            dispatch(bookRocket(rocket.id));
            dispatch(updateStatus(rocket.id));
            let arr = [];
            const obj = {
                status: rocket.status,
                id: rocket.id,
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
      dispatch(cancelRocket(rocket.id));
      dispatch(updateStatus(rocket.id));
      const arr1 = JSON.parse(localStorage.getItem('statusData'));
      const index = arr1.findIndex((item) => item.id === id);
      arr1.splice(index, 1);
      localStorage.setItem('statusData', JSON.stringify(arr1));
    }
  };

  function addBTN(state) {
    if (state) {
      return <button type="button" id={rocket.id} className="state" onClick={eventHandler}>Reserve Rocket</button>;
    }
    return <button type="button" id={rocket.id} className="state_2" onClick={eventHandler}>Cancel Reservation</button>;
  };

    return (
        <div className="rocket-container">
            <div className="rocket-img-col">
                <div className="rocket-img-cont">
                    <img className="rocket-img" src={rocket.flickr_images[0]} alt="SpaceX rocket"/>
                </div>
            </div>    

            <div className="rocket-info-col">
                <h2 className="rocket-title">{rocket.rocket_name}</h2>
                <p className="rocket-description"><span className="rocket-reserved"></span>{rocket.description}</p>
                <span className="rocket-reserve-btn">{addBTN(rocket.reserved)}</span>
            </div>
        </div>
    )
}