import React from 'react';
// import clients from '../clients';

class ItemCard extends React.Component {
    render() {
        // let client;
        if(this.props.client) {
            console.log(this.props.client.general.firstName);
            // for (let i = 0; i < clients.length; i++) {
            //     if (clients[i].general.firstName === this.props.client.general.firstName) {
            //         client = clients[i];
            //         break;
            //     }
            // }
        }
            return (
                <div className="card">
                    <img className="card-img-top" src={this.props.client.general.avatar} alt="Card cap" />
                    <div className="card-body">
                        <p className="card-text">{this.props.client.general.firstName} {this.state.client.general.lastName}</p>
                    </div>
                </div>
            )
    }
}
export default ItemCard;