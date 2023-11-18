import { useEffect, useState } from 'react';
import axios from 'axios';

import '../styles/getpath.scss';
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
        // 군집 대표 좌표 리스트 서버에서 받아오기
        axios.get('/api/report/location/union')
          .then(res => {
            // 거리를 기준으로 정렬
            res.sort((a, b) => calcDistance(a)-calcDistance(b));
            
            setPath([
                res[0],
                res[1],
            ]);
          }).catch(error => {console.log(error);})
    }, [])

    return (
        <div className='main'>
          <div className='map'>
            <button
              className='show_route'
              onClick={() =>
                window.open(
                  `http://map.naver.com/index.nhn?slng=${path[0].longitude}&slat=${path[0].latitude}&stext=출발지&elng=${path[path.length - 1].longitude}&elat=${path[path.length - 1].latitude}&etext=도착지&menu=route&pathType=3`,
                  '_blank'
                )
              }
            ><svg xmlns="http://www.w3.org/2000/svg" width="88" height="90" viewBox="0 0 88 90" fill="none">
            <path d="M18.3337 33.75V78.75H3.66699V33.75H18.3337ZM33.0003 78.75C31.0554 78.75 29.1901 77.9598 27.8149 76.5533C26.4396 75.1468 25.667 73.2391 25.667 71.25V33.75C25.667 31.6875 26.4737 29.8125 27.8303 28.4625L51.957 3.75L55.8437 7.725C56.8337 8.7375 57.457 10.125 57.457 11.6625L57.347 12.8625L53.8637 30H77.0003C78.9452 30 80.8105 30.7902 82.1858 32.1967C83.561 33.6032 84.3337 35.5109 84.3337 37.5V45C84.3337 45.975 84.1503 46.875 83.8203 47.7375L72.747 74.175C71.647 76.875 69.0437 78.75 66.0003 78.75H33.0003ZM33.0003 71.25H66.1103L77.0003 45V37.5H44.7703L48.9137 17.55L33.0003 33.8625V71.25Z" fill="white"/>
            </svg>
                <br />
              플로깅 경로 생성
            </button>
          </div>
          <div className='info'>
            <input
              type='text'
              className='search'
              placeholder='제목'
            ></input>
            <textarea placeholder='내용을 입력하세요.'></textarea>
          </div>
        </div>
      );
}

export default GetPathView;