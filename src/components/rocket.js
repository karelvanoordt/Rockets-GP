import PropTypes from 'prop-types';

export default function Rocket({
  RocketId, flickrImages, rocketName, description,
}) {
  return (
    <div key={RocketId} className="rocket-container">
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
        <button className="rocket-reserve-btn" type="submit">Reserve Rocket</button>
      </div>
    </div>
  );
}

Rocket.propTypes = {
  RocketId: PropTypes.string.isRequired,
  flickrImages: PropTypes.string.isRequired,
  rocketName: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};
