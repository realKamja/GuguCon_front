import { useEffect, useState } from 'react';

function GetPathView() {
    const [path, setPath] = useState([{latitude: 37.4526437, longitude: 126.49236}]);

    useEffect(() => {
        var lat=37.8864916;
        var lng=127.7364351;
        navigator.geolocation.getCurrentPosition((pos) => {
            lat = pos.coords.latitude;
            lng = pos.coords.longitude;
        });
        let calcDistance = (p) => {
            return Math.sqrt(Math.pow(p.latitude - lat, 2) + Math.pow(p.longitude - lng, 2));
        }
        // TODO 군집 대표 좌표 리스트 서버에서 받아오기
        var coordinates = [
            {latitude: 37.4526437, longitude: 126.49236},
            {latitude: 37.4768068, longitude: 126.4847975},
            {latitude: 37.4988237, longitude: 126.4960839},
        ];
        
        // 거리를 기준으로 정렬
        coordinates.sort((a, b) => calcDistance(a)-calcDistance(b));
        
        setPath([
            coordinates[0],
            coordinates[1],
        ]);
    }, [])

    return(
        <div className="getPath">
            <a 
                href={`http://map.naver.com/index.nhn?slng=${path[0].longitude}&slat=${path[0].latitude}&stext=출발지&elng=${path[path.length-1].longitude}&elat=${path[path.length-1].latitude}&etext=도착지&menu=route&pathType=1`}
                target="_blank"
            >
                    경로링크
            </a>
        </div>
    );
}

export default GetPathView;