import React from 'react'
import Hero from './Hero'
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