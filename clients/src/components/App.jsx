import React from 'react';

import ItemCard from './ItemCard';
import AllItems from './AllItems';

class App extends React.Component {
    constructor(props){
      super(props)
      this.state = {
        visibleItem: ''
      }
      this.dataUpdated = this.dataUpdated.bind(this)
    }

    dataUpdated(client) {
      this.setState({ visibleItem: client })
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-4">
                        <div className="list-group">
                            <AllItems propsChanged={this.dataUpdated} />
                        </div>
                    </div>
                    <div className="col-8">
                      <ItemCard client={ this.state.visibleItem } />
                    </div>
                </div>
            </div>
        );
    };
};

export default App;
