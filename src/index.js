import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import timelineFunction from './timeline';
import reportWebVitals from './reportWebVitals';
import Timeline from 'react-image-timeline';
require('./config/timeline.scss');

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Timeline
      events={timelineFunction()}
      reverseOrder={{ reverseOrder: true }}
      // customComponents={{ footer: CustomHeader }}
    />
  </React.StrictMode>
);

reportWebVitals();
