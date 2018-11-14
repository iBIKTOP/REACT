var img = React.createElement('img', { width: 300, src: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2000px-React-icon.svg.png" });
var title = React.createElement('h1', null, 'React');
var subtitle = React.createElement('p', null, 'Создание первого приложения');
var container = React.createElement('div', { className: 'container' }, img, title, subtitle);

ReactDOM.render(container, document.getElementById('root'));