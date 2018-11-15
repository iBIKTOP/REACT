import React from 'react';
import ListItem from './ListItem';
import clients from '../clients'
import ItemCard from './ItemCard';


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = { item: clients[0] };
        this.press = this.press.bind(this);
    }

    press() {
        // this.setState({ item: clients[index] });
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-4">
                        {/* <ClientsList clients={clients} /> */}
                        <div className="list-group">
                            {
                                clients.map(function (client, i) {
                                    return (
                                        <ListItem client={client} onClick={this.press} />
                                    )
                                })
                            }
                        </div>
                    </div>
                    <div className="col-8">
                        <ItemCard item={this.state.item} />
                    </div>
                </div>
            </div>

        );
    };
};

export default App;