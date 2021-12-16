import MissionProfile from '../components/missionProfile';
import RocketProfile from '../components/rocketProfile';
import '../styling/Profile.css';

function Profile() {
  return (
    <div className="profiles-con">
      <MissionProfile />
      <RocketProfile />
    </div>
  );
}

export default Profile;
