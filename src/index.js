import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Main from './views/mainView';
import GetPathView from './views/getPathView';
import ReportView from './views/reportView';
import PostBoardView from './views/postBoardView';
import PostView from './views/postView';
import './styles/comment.scss';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div className='frame'>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/getPath" element={<GetPathView />} />
                <Route path="/report" element={<ReportView />} />
                <Route path="/postBoard" element={<PostBoardView />} />
                <Route path="/:postId" element={<PostView />} />
            </Routes>
        </BrowserRouter>
    </div>
  </React.StrictMode>
);

reportWebVitals();
