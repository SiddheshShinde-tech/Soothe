import React from 'react';
import ReactDOM from 'react-dom';
import './index-assessment.css';
import App from './App-assessment';
import * as serviceWorker from './serviceWorker';
import AppTwo from './App-assessment-two';

// ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

function index()
{
    return (<div><App/></div>)
}

export default index;