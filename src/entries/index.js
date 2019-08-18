import ReactDOM from 'react-dom';
import React from 'react';
import Home from '../apps/containers/Home.jsx';
const app = document.getElementById('app');
const modal = document.getElementById('modal-container');

// ReactDom.render('que voy a renderear', 'donde lo voy a renderear');
ReactDOM.render(<Home />, app);