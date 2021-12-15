import PropTypes from 'prop-types';

export default function Rocket({ rocket }) {
  return (
    <div className="rocket-container">
      <div className="rocket-img-col">
        <div className="rocket-img-cont">
          <img className="rocket-img" src={rocket.flickr_images[0]} alt="SpaceX rocket" />
        </div>
      </div>

      <div className="rocket-info-col">
        <h2 className="rocket-title">{rocket.rocket_name}</h2>
        <p className="rocket-description">
          <span className="rocket-reserved" />
          {rocket.description}
        </p>
        <button className="rocket-reserve-btn" type="submit">Reserve Rocket</button>
      </div>
    </div>
  );
}

Rocket.propTypes = {
  rocket: PropTypes.string.isRequired,
};
