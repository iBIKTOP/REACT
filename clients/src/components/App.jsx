import React from 'react';


class App extends React.Component {
    render() {
        console.log(this.props.clients);
        return (
            <div>
                {
                    this.props.clients.map(function(client){
                        return (
                            <div>
                                <img width='50' src={client.general.avatar} alt='img'></img>
                                {client.general.firstName}
                            </div>
                        )
                    })
                }
            </div>
        );
    };
};

export default App;