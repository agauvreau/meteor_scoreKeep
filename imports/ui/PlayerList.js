import React from 'react';
// Flipmove is a third party library for react. Refer to its github page.
//Its easy to use pour the tag containing what you want displayed inside
//a Flipmove tag. Other options are available.
import FlipMove from 'react-flip-move';
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
                
                <FlipMove maintainContainerHeight={true}>
                {this.renderPlayers()}
                </FlipMove>
            </div>
        )
    }
};

PlayerList.PropTypes = {
    players: PropTypes.array.isRequired
}