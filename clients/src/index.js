import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App'
import clients from './clients'

ReactDOM.render(<App clients={clients}/>, document.getElementById('root'));