import React from 'react'


class ListItem extends React.Component {
    render() {
        // console.log(this.props.client);
        return (
            <button type="button" className="list-group-item list-group-item-action">
                <img className="avatar" src={this.props.client.general.avatar} alt='img'></img>
                {this.props.client.general.firstName}
            </button>
        );
    };
}

export default ListItem;