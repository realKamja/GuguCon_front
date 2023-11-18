import { useState, useEffect, useRef } from 'react';

function Map() {
    const mapRef = useRef();
    const [markers, setMarkers] = useState([]);
    const { naver } = window;
    
    useEffect(() => {
        
        // 지도 초기 설정. getCurrentPosition(사용자정보를 받아온 경우, 받아오지 못한 경우)
        let mapOptions;
        navigator.geolocation.getCurrentPosition((pos) => {
            mapOptions = {
                center: new naver.maps.LatLng(pos.coords.latitude, pos.coords.longitude),
                zoom: 16,
                zoomControl: true,
                zoomControlOptions: {
                  position: naver.maps.Position.TOP_RIGHT,
                },
            }
        });
        const map = new naver.maps.Map(mapRef.current, mapOptions);
        
        // TODO 서버에 요청하는 get 함수로 대체
        setMarkers([
            new naver.maps.Marker({
                map: map,
                position: new naver.maps.LatLng(37.4526437, 126.49236),
            }),
            new naver.maps.Marker({
                map: map,
                position: new naver.maps.LatLng(37.4768068, 126.4847975),
            }),
            new naver.maps.Marker({
                map: map,
                position: new naver.maps.LatLng(37.4988237, 126.4960839),
            }),
            new naver.maps.Marker({
                map: map,
                position: new naver.maps.LatLng(37.8928822, 127.7343884),
            }),
        ]);
    }, []);
    return(
        <div className='mapContainer' ref={mapRef}></div>
    );
}

export default Map;