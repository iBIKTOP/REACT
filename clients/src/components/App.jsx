import React from 'react';
import ListItem from './ListItem';
import ItemCard from './ItemCard';
import clients from '../clients';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = { list: clients, client: '' }
        this.setClient = this.setClient.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    setClient(client) {
        this.setState({ client: client })
    }
    onChange(e) {
        let newList = clients.filter(function (client) {
            return client.general.firstName.toLowerCase().indexOf(e.target.value.toLowerCase()) !== -1;
        });
        this.setState({ list: newList });
    }
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-4">
                        <div className="list-group">
                            <input type="text" className="form-control" id="example" placeholder="Search..." onChange={this.onChange}></input>
                            {
                                this.state.list.map(function (client, i) {
                                    return (
                                        <ListItem key={i} client={client} onChange={this.setClient} />
                                    )
                                }.bind(this))
                            }
                        </div>
                    </div>
                    <div className="col-8">
                        <ItemCard client={this.state.client} />
                    </div>
                </div>
            </div>
        );
    };
};

export default App;