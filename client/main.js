import React from 'react';
import ReactDOM from 'react-dom';
import {Meteor} from 'meteor/meteor';

import {Tracker} from 'meteor/tracker';
import {Players, calculatePlayerPositions} from './../imports/api/players';
import App from './../imports/ui/App';

Meteor.startup( () => {
  Tracker.autorun(() =>{
    //sort score -1 sorts descending. 
    let players = Players.find({}, {sort: {score: -1}}).fetch();
    let title = 'Score Keep';
    let positionPlayers = calculatePlayerPositions(players)
    //TitleBar refers to the UI folder in imports (a UI folder is convention for UI components)
   
    ReactDOM.render(<App title={title} players={positionPlayers}/>, document.getElementById('app'));
  });
});

  