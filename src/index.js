import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

// We moved the data from ListContainer to index => so it can be distributed to its children
const fruits = ['Mango', 'Banana', 'Orange', 
                'Apple', 'Pineapple', 'Dates'];

// Pass fruits as props to the App
ReactDOM.render(<App fruits={fruits}/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
