import React from 'react'

class ListItem extends React.Component {
    constructor(props){
      super(props)
      this.itemClicked = this.itemClicked.bind(this)
    }

    itemClicked(e) {
      e.preventDefault()
      this.props.itemChanged(this.props.client)
    }

    render() {
        const { firstName, avatar } = this.props.client.general
        return (
            <div className="list-group-item list-group-item-action" onClick={this.itemClicked}>
                <img className="avatar" src={avatar} alt='img'></img>
                { firstName }
            </div>
        );
    };
}

export default ListItem;
