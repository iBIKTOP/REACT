import React from 'react';
// import clients from '../clients';

class ItemCard extends React.Component {
    render() {
        let client = this.props.client;
        if (client) {
            return (
                <div className="card text-center">
                    <div className="card-header">
                        <img className="card-img" src={client.general.avatar} alt="Card cap" />
                    </div>
                    <div className="card-body">
                        <h3 className="card-title">{client.general.firstName} {client.general.lastName}</h3>
                        <p className="card-text">{client.job.company}</p>
                        <small className="card-text">{client.job.title}</small>
                    </div>
                    <div className="card-footer text-muted">
                        Email: {client.contact.email}<br />
                        Phone: {client.contact.phone}
                    </div>
                </div>
            )
        } else { return <p>Выберете клиента...</p> }

    }
}
export default ItemCard;