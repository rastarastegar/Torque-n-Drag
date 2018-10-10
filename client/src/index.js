import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import LoadingPage from "./components/LoadingPage.js";

ReactDOM.render(<LoadingPage />, document.getElementById('root'));
registerServiceWorker();
