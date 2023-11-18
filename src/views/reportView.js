import axios from 'axios';
import { useNavigate } from 'react-router';

import '../styles/report.scss';

function ReportView() {
    const navi = useNavigate();

    const handleReport = () => {
        var lat=37.8864916;
        var lng=127.7364351;
        navigator.geolocation.getCurrentPosition((pos) => {
            lat = pos.coords.latitude;
            lng = pos.coords.longitude;
        });

        axios.post('/api/report/location', {latitude: lat, longitude: lng})
            .then(() => {
                navi('/');
            })
            .catch(error => {
                console.log(error);
            });
    }

    return(
        <div className="report">
            <img
                id='reportBtn'
                src='/images/reportBtn.png'
                onClick={handleReport}
                alt='신고하기 버튼'
            />
            <ul className='reportIns'>
                <li>버튼을 누르면 현재 쓰레기 위치가 데이터분석을 위해 전송됩니다.</li>
                <li>데이터 분석을 통해 플로깅 경로가 형성됩니다.</li>
            </ul>
        </div>
    );
}

export default ReportView;