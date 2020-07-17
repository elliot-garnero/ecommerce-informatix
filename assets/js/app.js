import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import Paths from './paths/Paths';
import '../css/app.css';

ReactDOM.render(
  <Router>
    <Paths />
  </Router>,
  document.getElementById('root')
);
