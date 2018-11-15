import React from 'react'


class ItemCard extends React.Component {
    render() {
        console.log(this.props.item);
        return (
            <div className="card">
                <img className="card-img-top" src={this.props.item.general.avatar} alt="Card cap" />
                <div className="card-body">
                    <p className="card-text">{this.props.item.general.firstName} {this.props.item.general.lastName}</p>
                </div>
            </div>
        )
    }
}

export default ItemCard;