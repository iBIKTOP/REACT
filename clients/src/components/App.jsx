import React from 'react';
import ListItem from './ListItem';
import ItemCard from './ItemCard';
import clients from '../clients';

class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {client: ''}
        this.setClient = this.setClient.bind(this);
    }

    setClient(client){
        this.setState({client: client})
    }
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-4">
                        <div className="list-group">
                            {
                                clients.map(function (client, i) {
                                    return (
                                        <ListItem key={i} client={client} onChange={this.setClient}/>
                                    )
                                }.bind(this))
                            }
                        </div>
                    </div>
                    <div className="col-8">
                        <ItemCard client={this.state.client}/>
                    </div>
                </div>
            </div>
        );
    };
};

export default App;