import React from 'react';
import clients from '../clients';

class ItemCard extends React.Component {
    render() {
        const client = this.props.client
        if (!client) {
          return false
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
