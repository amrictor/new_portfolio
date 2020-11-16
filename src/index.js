import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HexGrid from './components/HexGrid';
import FishTank from './components/FishTank';

import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import GoogleAnalytics from './components/GoogleAnalytics';

ReactDOM.render(
  <Router>
    <Switch>
        <Route exact path="/" component={App}/>
        <Route path="/hexes" component={HexGrid} />
        <Route path="/fishtank" component={FishTank} />
    </Switch>
    <GoogleAnalytics/>
  </Router>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
