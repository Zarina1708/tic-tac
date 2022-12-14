import React from 'react';
import ReactDOM from 'react-dom/client';
import MyInfo from './App';
// import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <MyInfo name = "Zarina" />
  </React.StrictMode>
);

