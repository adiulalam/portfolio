// require('dotenv').config();
// import React from 'react';
// import ReactDOM from 'react-dom';
// import Timeline from 'react-image-timeline';
require('./config/timeline.scss');
// const dayjs = require('dayjs');

function timelineFunction() {
  const jsDate = new Date(2022, 5, 11);
  const nowTimestampz = new Date(jsDate).toISOString();
  const nowTimestampzjsDate = new Date(nowTimestampz);
  function tes() {
    const t = console.log('tfff dest');
    return t;
  }

  const openInNewTab = (url) => {
    const newWindow = window.open(url, '_blank', 'noopener,noreferrer');
    if (newWindow) newWindow.opener = null;
  };

  const events = [
    {
      date: new Date(2022, 5, 11),
      // date: dayjs('2019-01-25').format('llll'),
      text: 'Sed leo elit, pellentesque sit amet congue quis, ornare nec lorem.',
      title: 'Cairo, Egypt',
      buttonText: 'Open',
      imageUrl:
        'http://github.com/aaron9000/react-image-timeline/blob/master/src/assets/cairo.jpg?raw=true',
      onClick: () => openInNewTab('https://stackoverflow.com'),
    },
    {
      date: new Date(2023, 5, 11),
      // date: dayjs('2019-01-25').format('llll'),
      text: 'Sed leo elit, pellentesque sit amet congue quis, ornare nec lorem.',
      title: 'Cairo, Egypt',
      //   buttonText: 'Open',
      imageUrl:
        'http://github.com/aaron9000/react-image-timeline/blob/master/src/assets/cairo.jpg?raw=true',
      //   onClick: () => openInNewTab('https://stackoverflow.com'),
    },
  ];

  const test = events.map(({ date, ...rest }) => ({
    date: new Date(date),
    ...rest,
  }));

  console.log(JSON.parse(JSON.stringify(events)));

  //   console.log(now);
  return events;
}

export default timelineFunction;
