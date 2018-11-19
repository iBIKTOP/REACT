import React from 'react';
import ListItem from './ListItem';
import clients from '../clients'
import ItemCard from './ItemCard';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

class App extends React.Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-4">
                        <div className="list-group">
                            {
                                clients.map(function (client, i) {
                                    return (
                                        <ListItem key={i} client={client} />
                                    )
                                })
                            }
                        </div>
                    </div>
                    <div className="col-8">
                        <Router>
                            <Switch>
                                <Route path="/:firstName" component={ItemCard} />
                            </Switch>
                        </Router>
                    </div>
                </div>
            </div>
        );
    };
};

export default App;