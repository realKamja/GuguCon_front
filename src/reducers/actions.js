import * as types from './actionTypes'; //액션 코드로 가져온다.

export const _setCoor = (lat, lng) => {
    return {
        type: types._SETCOOR,
        lat: lat,
        lng: lng,
    };
};
export const _setMap = data => {
    return {
        type: types._SETMAP,
        data,
    };
};
