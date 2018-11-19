import 'bootstrap/dist/css/bootstrap.min.css'
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App'
import './style.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

ReactDOM.render(
    <Router>
        <Switch>
            <Route path="/" component={App} />
            {/* <Route component={NotFound} /> */}
        </Switch>
    </Router>,
    document.getElementById('root')
);