const rocketsURL = 'https://api.spacexdata.com/v3/rockets';
const GET_ROCKETS = 'spaceHub/api/GET_ROCKETS';
const BOOK_ROCKET = 'spaceHub/rockets/BOOK_ROCKET';
const CANCEL_ROCKET = 'spaceHub/rockets/CANCEL_ROCKET';
const UPDATE_STATUS = 'spaceHub/rockets/UPDATE_STATUS';


const initialState = [];

export const getRockets = (payload) => ({
    type: GET_ROCKETS,
    payload
});

export const bookRocket = (payload) => ({
    type: BOOK_ROCKET,
    payload
});

export const cancelRocket = (payload) => ({
    type: CANCEL_ROCKET,
    payload
});

export const updateStatus = (payload) => (
    {
      type: UPDATE_STATUS,
      payload,
    }
  );

let localDATA = [{
    id: '',
    reserved: true,
    status: 'Cancel Reservation',
    Bg: 'status',
}];

export const getROCKETS = () => async (dispatch) => {

    if(localStorage.getItem('statusData')) {
        localDATA = JSON.parse(localStorage.getItem('statusData'));
    }
    const rockets = await fetch(rocketsURL)
        .then((res) => res.json());
    const ID = Object.keys(rockets);
    const rocketsArr = [];

    function reserveValue(id) {
        const index = localDATA.findIndex((item) => item.id === id);
        if (index !== -1) {
            return localDATA[index].reserved;
        }
        return true;
    };

    function statusValue(reserve) {
        if (reserve) {
          return 'Reserve Rocket';
        }
        return 'Cancel Reservation';
    }
    
      function BgValue(reserve) {
        if (reserve) {
          return 'status';
        }
        return 'status_2';
      }

    ID.map((key) => rocketsArr.push({
        key: key,
        rocket_name: rockets[key].rocket_name,
        description: rockets[key].description,
        flickr_images: rockets[key].flickr_images,
        reserved: reserveValue(rockets[key].rocket_id),
        status: statusValue(reserveValue(rockets[key].rocket_id)),
        Bg: BgValue(reserveValue(rockets[key].rocket_id)),

    }));
    dispatch(getRockets(rocketsArr));
};


const rocketsReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ROCKETS:
          return action.payload;
        case BOOK_ROCKET:
        case CANCEL_ROCKET:
          return state.map((rocket) => {
            if (rocket.id !== action.payload) {
              return rocket;
            }
            return { ...rocket, reserved: !rocket.reserved };
          });
        case UPDATE_STATUS:
          return state.map((rocket) => {
            if (rocket.id === action.payload) {
              if (rocket.status === 'Reserve Rocket') {
                return { ...rocket, status: 'Cancel Reservation', Bg: 'status_2' };
              } if (rocket.status === 'Cancel Reservation') {
                return { ...rocket, status: 'Reserve Rocket', Bg: 'status' };
              }
            }
            return rocket;
          });
        default:
          return state;
      }
    };
export default rocketsReducer;

