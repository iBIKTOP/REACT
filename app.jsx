// var jsx =
//     <div className='container'>
//         <img width="300" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2000px-React-icon.svg.png"></img>
//         <h1>React</h1>
//         <p>Создание первого приложения</p>
//     </div>;


// это функциональный стиль создания компонента в React
// function Hero(props) {
//     let count = 0;
//     function handleClick() {
//         // console.log('Click');
//         count++;
//         console.log(count);
//     }
//     return (
//         <div className='container'>
//             <div>{count}</div>
//             <img width="200" src={props.srcUrl} onClick={handleClick}></img>
//             <h1>{props.title}</h1>
//             <p>{props.subtitle}</p>
//         </div>);
// }

//это создание обычного компонента (есть возможность создавать состояния)
// var Hero = React.createClass({
class Hero extends React.Component {
    constructor(props) {
        super(props);
        this.state = { count: 0 }
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
        this.setState({ count: ++this.state.count });
        console.log(this.state.count);
    }
    render() {
        return (
            <div className='container'>
                <div>{this.state.count}</div>
                <img width="200" src={this.props.srcUrl} onClick={this.handleClick}></img>
                <h1>{this.props.title}</h1>
                <p>{this.props.subtitle}</p>
            </div>
        );
    }
};

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