const GET_MISSIONS = 'spaceHub/api/GET_MISSIONS';


const initialState = [];

export const getMissions = (payload) => ({
    type: GET_MISSIONS,
    payload,
  });

export const getMISSIONS = () => async (dispatch) => {
    console.log('hello');
    const missions = await fetch('https://api.spacexdata.com/v3/missions')
      .then((response) => response.json());
    const ID = Object.keys(missions);
    const missionsArr = [];
    ID.map((key) => missionsArr.push({
      key: key,
      id: missions[key].mission_id,
      title: missions[key].mission_name,
      category: missions[key].manufacturers,
      description: missions[key].description,
      reserved: true,
    }));
    dispatch(getMissions(missionsArr));
   };

const missionsReducer = (state = initialState, action) => {
    switch (action.type) {
      case GET_MISSIONS:
            return action.payload;
      default:
        return state;
    }
  };
  
  export default missionsReducer;