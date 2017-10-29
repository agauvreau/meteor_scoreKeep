import React from 'react';
import Player from './Player';
import PropTypes from 'prop-types';

export default class PlayerList extends React.Component {
    renderPlayers() {
        if (this.props.players.length === 0){
            return (
            <div className="item"><p className='item__message'>There are no players in the database. Add some!</p></div>
            )
        } else {
        return this.props.players.map((player) => {
            return <Player key={player._id} player={player}/>
        });
    }
    }
    render () {
        return (
            <div> 
                {this.renderPlayers()}
            </div>

        )
    }
};

PlayerList.PropTypes = {
    players: PropTypes.array.isRequired
}