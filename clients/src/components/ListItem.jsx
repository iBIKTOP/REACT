import React from 'react'

class ListItem extends React.Component {
    constructor(props){
        super(props);
        this.onClickItem = this.onClickItem.bind(this);
    }
    onClickItem(e){
        e.preventDefault();
        this.props.onChange(this.props.client);
    }
    render() {
        console.log(this.props.client);
        return (
            <button type="button" className="list-group-item list-group-item-action" onClick={this.onClickItem}>
                <img className="avatar" src={this.props.client.general.avatar} alt='img'></img>
                {this.props.client.general.firstName}
            </button>
        );
    };
}

export default ListItem;