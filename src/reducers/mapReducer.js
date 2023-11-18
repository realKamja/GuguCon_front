import * as types from './actionTypes'; //액션 코드로 가져온다.

const map_reducer = {
    lat: 37.8615454,
    lng: 127.6828602,
    map: null
};

export default function postReducer(state = map_reducer, action) {
    switch (action.type) {
        case types._SETCOOR:
            return { ...state, lat: action.lat, lng: action.lng };
        case types._SETMAP:
            return { ...state, map: action.data };
        default:
            return state;
    }
}
