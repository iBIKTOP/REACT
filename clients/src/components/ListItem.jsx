import React from 'react'
import { NavLink } from 'react-router-dom';

class ListItem extends React.Component {
    render() {
        // console.log(this.props.client);
        return (
            <NavLink to={`/${this.props.client.general.firstName}`} type="button" className="list-group-item list-group-item-action">
                <img className="avatar" src={this.props.client.general.avatar} alt='img'></img>
                {this.props.client.general.firstName}
            </NavLink>
        );
    };
}

export default ListItem;