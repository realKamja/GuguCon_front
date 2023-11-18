import React from 'react';
import { useRef, useEffect } from 'react';
import { useDispatch } from 'react-redux';


import * as actions from '../reducers/actions';
import './styles/map.scss';

function Map() {
    const dispatch = useDispatch();
    const { naver } = window;
    const mapRef = useRef();

    /**
     * 지도 초기 설정 함수
     * 지도를 보여주는 기준점, 줌 정도 설정
     * 
     * @param {*} lat 위도
     * @param {*} lng 경도
     * @param {*} zoom 줌 정도
     */
    const initMap = (lat, lng, zoom) => {
        var mapOptions = {
            center: new naver.maps.LatLng(lat, lng),
            zoom: zoom,
            zoomControl: true,
            zoomControlOptions: {
              position: naver.maps.Position.TOP_RIGHT,
            },
        }
        dispatch(actions._setMap(actions._setMap, new naver.maps.Map(mapRef.current, mapOptions)));
    };
    useEffect(() => {
        // 지도 초기 설정. getCurrentPosition(사용자정보를 받아온 경우, 받아오지 못한 경우)
        navigator.geolocation.getCurrentPosition((pos) => {
            initMap(pos.coords.latitude, pos.coords.longitude, 16);
        });
    }, []);

    return(
        <div className='mapContainer' ref={mapRef}></div>
    );
}

export default Map;
