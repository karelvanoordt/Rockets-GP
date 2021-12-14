const rocketsURL = 'https://api.spacexdata.com/v3/rockets';
const GET_ROCKETS = 'spaceHub/api/GET_ROCKETS';

const initialState = [];

export const getRockets = (payload) => ({
    type: GET_ROCKETS,
    payload
});

export const getROCKETS = () => async (dispatch) => {
    const rockets = await fetch(rocketsURL)
        .then((res) => res.json());
    const ID = Object.keys(rockets);
    const rocketsArr = [];
    ID.map((key) => rocketsArr.push({
        key: key,
        rocket_name: rockets[key].rocket_name,
        description: rockets[key].description,
        flickr_images: rockets[key].flickr_images,
        reserved: false,
    }));
    dispatch(getRockets(rocketsArr));
};


const rocketsReducer = (state = initialState, action) => {
    switch (action.type) {
      case GET_ROCKETS:
            return action.payload;
      default:
        return state;
    }
};

export default rocketsReducer;

