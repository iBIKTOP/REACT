import React from 'react'

//пример создания компонента функциональным стилем
var ImageCounter = function (props) {
    return (
        <div>
            <div>{props.count}</div>
            <img width="200" src={props.srcUrl} onClick={props.onCount}></img>
        </div>
    )
}

// это функциональный стиль создания компонента Hero
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

//это создание обычного компонента (есть возможность создавать "состояния - state")
// var Hero = React.createClass({ // <- этот вариант скорее всего устарел
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
                <ImageCounter count={this.state.count} srcUrl={this.props.srcUrl} onCount={this.handleClick} />
                <h1>{this.props.title}</h1>
                <p>{this.props.subtitle}</p>
            </div>
        );
    }
};

class App extends React.Component {
    render() {
        return (
            <div>
                {this.props.heroes.map(function (hero) {
                    return <Hero key={hero.id} srcUrl={hero.srcUrl} title={hero.title} subtitle={hero.subtitle} />
                })}
            </div>
        );
    };
};

export default App;


// ReactDOM.render(React.createElement(Hero), document.getElementById('root')); // или
// ReactDOM.render(<App heroes={data} />, document.getElementById('root'));