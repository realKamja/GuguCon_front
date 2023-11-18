import { useEffect, useRef } from 'react';
import axios from 'axios';

function Map() {
    const mapRef = useRef();
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

        // 위치 정보 받아 오기
        axios.get('/api/report/getAllLocations')
            .then(res => {
                for(var i=0; i<res.length; i++){
                    new naver.maps.Marker({
                        map: map,
                        position: new naver.maps.LatLng(res[i].latitude, res[i].longitude),
                    })
                }
            }).catch( error => {console.log(error);})
    }, []);
    return(
        <div className='mapContainer' ref={mapRef}></div>
    );
}

export default Map;