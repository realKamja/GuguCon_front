import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Map from '../components/Map';
import PloggingInterface from '../components/PloggingInterface';
import '../styles/main.scss';



function Main() {
    const navigator = useNavigate();

    return (
        <div className='main'>
            <Map />
            <PloggingInterface />
        </div>
    );
}

export default Main;