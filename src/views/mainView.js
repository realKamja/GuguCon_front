import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import '../styles/main.scss';
import Map from '../components/map';

function Main() {
    const navigator = useNavigate();
    const [spots, setSpots] = useState(0);

    const upSpots = () => {
        if(spots!=5)
            setSpots(spots+1);
    }
    const downSpots = () => {
        if(spots!=0)
            setSpots(spots-1);
    }

    return(
        <div className='main'>
            <Map />
            <div className='navi'>
                <div className='para'>
                    <span>나 하나쯤...?</span>
                    <span>아니, 나부터!</span>
                </div>
                <div className='toGetPath'>
                    <span>플로깅스팟수</span>
                    <div className='spotCtrl'>
                        <span>{spots}개</span>
                        <div className='spotBtn'>
                            <button 
                                id='upBtn'
                                onClick={upSpots}
                            >▴</button>
                            <button
                                id='downBtn'
                                onClick={downSpots}
                            >▾</button>
                        </div>
                        <button 
                            id='goGetPath'
                            onClick={() => {navigator('/getPath')}}
                        >
                            GO
                        </button>
                    </div>
                </div>
                <button onClick={() => {navigator('/report')}}/>
                <button onClick={() => {navigator('/postBoard')}}/>
            </div>
        </div>
    );
}

export default Main;