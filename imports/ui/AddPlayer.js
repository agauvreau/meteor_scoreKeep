import React from 'react';
import {Players} from './../api/players';


// class names for components should starts with a capital letter 
export default class AddPlayer extends React.Component {
    handleSubmit(e) {
      e.preventDefault();
      // target = form named playerName
      let playerName = e.target.playerName.value;
      if (playerName) {
        e.target.playerName.value = '';
        Players.insert({
          name: playerName,
          score: this.props.score
        });
      }
    }
    render() {
      // the bind() method is used to choose which this is he one we want to use. In this case its the this from handleSubmit, not from render.
      return (
        <div className="item">
            <form className='form' onSubmit={this.handleSubmit.bind(this)}> 
              <input className='form__input' type='text' name='playerName' placeholder='Player Name'/>
              <button className="button">Add Player</button>
            </form>
        </div>
      );     
    }
  }