// var jsx =
//     <div className='container'>
//         <img width="300" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2000px-React-icon.svg.png"></img>
//         <h1>React</h1>
//         <p>Создание первого приложения</p>
//     </div>;


// это функциональный стиль создания компонента в React
function Hero(props) {
    return (
        <div className='container'>
            <img width="200" src={props.srcUrl}></img>
            <h1>{props.title}</h1>
            <p>{props.subtitle}</p>
        </div>);
}

// ReactDOM.render(React.createElement(Hero), document.getElementById('root')); // или
ReactDOM.render(
    <div>
        <Hero
            srcUrl='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2000px-React-icon.svg.png'
            title='React'
            subtitle='Создание первого приложения'
        />
        <Hero
            srcUrl='https://angular.io/assets/images/logos/angular/angular.svg'
            title='Angular 2+'
            subtitle='Это Angular детка!'
        />
    </div>,
    document.getElementById('root'));