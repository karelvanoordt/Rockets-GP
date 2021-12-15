const GET_MISSIONS = 'spaceHub/api/GET_MISSIONS';
export const JOIN_MISSION = 'spaceHub/rockets/JOIN_MISSION';
export const CANCEL_MISSION = 'spaceHub/rockets/CANCEL_MISSION';
export const UPDATE_STATUS = 'spaceHub/rockets/UPDATE_STATUS';
const initialState = [];

export const getMissions = (payload) => ({
  type: GET_MISSIONS,
  payload,
});

export const joinMission = (payload) => (
  {
    type: JOIN_MISSION,
    payload,
  }
);

export const cancelMission = (payload) => (
  {
    type: CANCEL_MISSION,
    payload,
  }
);

export const updateStatus = (payload) => (
  {
    type: UPDATE_STATUS,
    payload,
  }
);

let localDATA = [{
  id: '',
  reserved: true,
  status: 'NOT A MEMBER',
  Bg: 'status',
}];

export const getMISSIONS = () => async (dispatch) => {
  if (localStorage.getItem('statusData')) {
    localDATA = JSON.parse(localStorage.getItem('statusData'));
  }
  const missions = await fetch('https://api.spacexdata.com/v3/missions')
    .then((response) => response.json());
  const ID = Object.keys(missions);
  const missionsArr = [];

  function reserveValue(id) {
    const index = localDATA.findIndex((item) => item.id === id);
    if (index !== -1) {
      return localDATA[index].reserved;
    }
    return true;
  }

  function statusValue(reserve) {
    if (reserve) {
      return 'NOT A MEMBER';
    }
    return 'Active MEMBER';
  }

  function BgValue(reserve) {
    if (reserve) {
      return 'status';
    }
    return 'status_2';
  }

  ID.map((key) => missionsArr.push({
    key,
    id: missions[key].mission_id,
    title: missions[key].mission_name,
    category: missions[key].manufacturers,
    description: missions[key].description,
    reserved: reserveValue(missions[key].mission_id),
    status: statusValue(reserveValue(missions[key].mission_id)),
    Bg: BgValue(reserveValue(missions[key].mission_id)),
  }));
  dispatch(getMissions(missionsArr));
};

const missionsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_MISSIONS:
      return action.payload;
    case JOIN_MISSION:
    case CANCEL_MISSION:
      return state.map((mission) => {
        if (mission.id !== action.payload) {
          return mission;
        }
        return { ...mission, reserved: !mission.reserved };
      });
    case UPDATE_STATUS:
      return state.map((mission) => {
        if (mission.id === action.payload) {
          if (mission.status === 'NOT A MEMBER') {
            return { ...mission, status: 'Active MEMBER', Bg: 'status_2' };
          } if (mission.status === 'Active MEMBER') {
            return { ...mission, status: 'NOT A MEMBER', Bg: 'status' };
          }
        }
        return mission;
      });
    default:
      return state;
  }
};

export default missionsReducer;
