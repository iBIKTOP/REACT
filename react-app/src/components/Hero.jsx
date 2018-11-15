
import React from 'react'
import ImageCounter from './ImageCounter'


//это создание обычного компонента (есть возможность создавать "состояния - state")
// var Hero = React.createClass({ // <- этот вариант скорее всего устарел
class Hero extends React.Component {
    constructor(props) {
        super(props);
        this.state = { count: 0 }
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
        this.setState({ count: this.state.count + 1 });
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

export default Hero;