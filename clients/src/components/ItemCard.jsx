import React from 'react';
import clients from '../clients';

class ItemCard extends React.Component {

    render() {
        let firstName = this.props.match.params.firstName;
        let client;
        for (let i = 0; i < clients.length; i++) {
            if (clients[i].general.firstName === firstName) {
                client = clients[i];
                console.log(client.general.firstName);
                break;
            }
        }
        return (
            <div className="card">
                <img className="card-img-top" src={client.general.avatar} alt="Card cap" />
                <div className="card-body">
                    <p className="card-text">{client.general.firstName} {client.general.lastName}</p>
                </div>
            </div>
        )
    }
}
export default ItemCard;