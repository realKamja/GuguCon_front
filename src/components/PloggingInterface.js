import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './styles/ploggingInterface.scss';


function PloggingInterface() {
    const navigator = useNavigate();
    const [spots, setSpots] = useState(0);
    const [isOpen, setIsOpen] = useState(true);

    const upSpots = () => {
        if (spots !== 5) setSpots(spots + 1);
    };

    const downSpots = () => {
        if (spots !== 0) setSpots(spots - 1);
    };

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const _openInterface = () => {
        return (
            <div className='ploggingInterfaceBody'>
                <div className='para'>
                    <span className='small_txt'>나 하나쯤...?</span>
                    <br />
                    <span className='big_txt'>아니, 나부터!</span>
                </div>
                <div className='ploggingInfo'>
                    <div className='toGetPath'>
                        <div className='spotCountContainer'>
                            <span>플로깅 루트 추천</span>
                            <div className='spotCtrl'>
                                <span>{spots}개</span>
                                <div className='spotBtn'>
                                    <button id='upBtn' onClick={upSpots}>
                                        ▴
                                    </button>
                                    <button id='downBtn' onClick={downSpots}>
                                        ▾
                                    </button>
                                </div>
                                <button id='goGetPath' onClick={() => navigator('/getPath')}>
                                    GO
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className='greenButton'>
                    <button className='report' onClick={() => {navigator('/report')}}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="70" height="72" viewBox="0 0 70 72" fill="none">
                            <path d="M21.875 0V4H0V12H4.375V64C4.375 66.1217 5.29687 68.1566 6.93782 69.6569C8.57876 71.1571 10.8044 72 13.125 72H56.875C59.1956 72 61.4212 71.1571 63.0622 69.6569C64.7031 68.1566 65.625 66.1217 65.625 64V12H70V4H48.125V0H21.875ZM21.875 20H30.625V56H21.875V20ZM39.375 20H48.125V56H39.375V20Z" fill="white"/>
                        </svg>
                        <br/>쓰레기 발견!
                    </button>
                    <button className='postBoard' onClick={() => {navigator('/postBoard')}}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="75" height="69" viewBox="0 0 75 69" fill="none">
                            <path d="M68.2504 11.3675H71.0528C72.0997 11.3675 73.1037 11.7522 73.8439 12.437C74.5841 13.1217 75 14.0505 75 15.0189V40.5782C75 41.5466 74.5841 42.4753 73.8439 43.1601C73.1037 43.8449 72.0997 44.2295 71.0528 44.2295H63.1585L46.6989 22.9203C45.7415 21.6812 44.3894 20.75 42.8316 20.257C41.2738 19.764 39.5884 19.7339 38.0112 20.1709L28.1985 22.8948C26.8335 23.2728 25.3833 23.302 24.0018 22.9793C22.6203 22.6566 21.3589 21.994 20.3516 21.0618L19.195 19.992C18.7821 19.6101 18.466 19.1482 18.2693 18.6396C18.0726 18.1311 18.0004 17.5885 18.0578 17.051C18.1152 16.5134 18.3008 15.9944 18.6012 15.5313C18.9016 15.0681 19.3093 14.6724 19.795 14.3726L41.1136 1.22776C42.3863 0.442388 43.8782 0.015999 45.4079 0.000441463C46.9376 -0.0151161 48.4393 0.380827 49.7303 1.14012L66.1347 10.7979C66.766 11.169 67.5023 11.3666 68.2504 11.3675ZM11.9481 41.6554L5.56944 46.8183C5.1335 47.1719 4.78709 47.6099 4.55483 48.1012C4.32258 48.5926 4.21018 49.1253 4.22563 49.6614C4.24108 50.1975 4.38399 50.7238 4.64422 51.203C4.90444 51.6823 5.27559 52.1026 5.73128 52.4341L26.0197 67.1855C26.4657 67.5103 26.9822 67.7422 27.5339 67.8656C28.0856 67.989 28.6596 68.0008 29.2167 67.9003C29.7738 67.7998 30.3009 67.5893 30.7621 67.2832C31.2233 66.9771 31.6077 66.5826 31.8891 66.1266L34.6679 61.6282C35.4954 60.2885 35.8429 58.7409 35.6607 57.2072C35.4785 55.6736 34.7758 54.2327 33.6535 53.0913L22.9883 42.2359C21.5974 40.8204 19.6617 39.9661 17.5972 39.8569C15.5327 39.7476 13.5043 40.3921 11.9481 41.6517V41.6554ZM19.9174 7.71618H3.94716C2.90031 7.71618 1.89633 8.10087 1.1561 8.78563C0.41586 9.47039 0 10.3991 0 11.3675V38.811C0.00021133 40.2837 0.481783 41.722 1.38151 42.937C1.47721 42.8549 1.57459 42.7746 1.6736 42.696L8.04826 37.533C10.7718 35.3284 14.3217 34.2004 17.9348 34.3916C21.5479 34.5828 24.9356 36.0779 27.3696 38.5554L38.0348 49.4071C39.9977 51.404 41.2267 53.9244 41.5458 56.6072C41.8649 59.2899 41.2576 61.9973 39.8111 64.3411L37.2257 68.5255C38.3411 68.9168 39.5378 69.0692 40.726 68.9711C41.9142 68.8731 43.0629 68.5273 44.0858 67.9596L61.4928 58.2982C61.9595 58.0387 62.3632 57.6928 62.6784 57.2821C62.9936 56.8714 63.2136 56.4048 63.3244 55.9116C63.4353 55.4185 63.4346 54.9095 63.3225 54.4166C63.2104 53.9237 62.9893 53.4576 62.673 53.0475L41.8833 26.1043C41.6439 25.7949 41.306 25.5624 40.9168 25.4393C40.5275 25.3162 40.1064 25.3087 39.7124 25.4179L29.8997 28.1381C27.5109 28.801 24.9726 28.8533 22.5542 28.2896C20.1358 27.7258 17.9275 26.5669 16.1636 24.9359L15.0071 23.866C13.9745 22.9113 13.1837 21.7565 12.6919 20.4849C12.2 19.2133 12.0193 17.8566 12.1628 16.5125C12.3062 15.1685 12.7703 13.8707 13.5216 12.7126C14.2728 11.5546 15.2925 10.5651 16.507 9.8157L19.9174 7.71618Z" fill="white"/>
                        </svg>
                        <br/>
                        같이 플로깅
                    </button>
                    </div>
                </div>
            </div>
        );
    };

    const _rounndedUpperButton = () => {
        return (
            <div className='roundedUpperButtonContainer'>
                <button className='roundedUpperButton' onClick={toggleDropdown} title='pop'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="56" height="3" viewBox="0 0 56 3" fill="none">
                    <path d="M0 1.5C0 0.671573 0.671573 0 1.5 0H54.5C55.3284 0 56 0.671573 56 1.5C56 2.32843 55.3284 3 54.5 3H1.5C0.671574 3 0 2.32843 0 1.5Z" fill="#D9D9D9"/>
                    </svg>
                </button>
            </div>
        );
    
    }

    return (
        <div className={isOpen ? 'ploggingInterface' : 'ploggingInterface close'}>
            {_rounndedUpperButton()}
            {_openInterface()}
        </div>
    );
}

export default PloggingInterface;