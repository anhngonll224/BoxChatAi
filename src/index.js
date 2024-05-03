import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from "react-router-dom"
import { ConfigProvider } from "antd"


// const root = ReactDOM.createRoot(document.getElementById('root'));
ReactDOM.render(
  <ConfigProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ConfigProvider>,
  document.getElementById("root"),
);


