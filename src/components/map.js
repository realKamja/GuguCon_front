import { useRef, useState, useEffect } from 'react';

import './styles/map.scss';

function Map() {
    const { naver } = window;
    const [map, setMap] = useState();
    const mapRef = useRef();

    /**
     * 지도 초기 설정 함수
     * 지도를 보여주는 기준점, 줌 정도 설정
     * 
     * @param {*} lat 위도
     * @param {*} lon 경도
     * @param {*} zoom 줌 정도
     */
    function initMap(lat, lon, zoom){
        var mapOptions = {
            center: new naver.maps.LatLng(lat, lon),
            zoom: zoom
        }
        console.log(mapOptions);
        setMap(new naver.maps.Map(mapRef.current, mapOptions));
    };
    useEffect(() => {
        console.log('start');
        // 지도 초기 설정
        navigator.geolocation.getCurrentPosition((pos) => {
            initMap(pos.coords.latitude, pos.coords.longitude, 10);
        });
    }, []);

    return(
        <div className='mapContainer' ref={mapRef}></div>
    );
}

export default Map();
