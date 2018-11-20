import React from 'react';
import ListItem from './ListItem';
import clients from '../clients'

class AllItems extends React.Component {
    constructor(props){
      super(props)
      this.itemClicked = this.itemClicked.bind(this)
    }

    itemClicked(client) {
      this.props.propsChanged(client)
    }

    render() {
      const content = clients.map( (client, i) => {
          return (
            <ListItem key={i} client={client} itemChanged={this.itemClicked} />
          )
        })
      return(
        <React.Fragment>
          { content }
        </React.Fragment>
      )
   };
};

export default AllItems;
