import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';

var data = [
    {
        id: 1,
        srcUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2000px-React-icon.svg.png',
        title: 'React',
        subtitle: 'Создание первого приложения'
    },
    {
        id: 2,
        srcUrl: 'https://angular.io/assets/images/logos/angular/angular.svg',
        title: 'Angular 2+',
        subtitle: 'Это Angular детка!'
    }
]

ReactDOM.render(<App heroes={data} />, document.getElementById('root'));

