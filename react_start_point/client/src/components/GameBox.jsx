var React = require('react');
var _ = require('lodash');


//  REQUIRED COMPONENTS
var ClueForm = require('./ClueForm.jsx');
var ClueDisplay = require('./ClueDisplay.jsx');
var RoomBox = require('./RoomBox.jsx');
var SuspectBox = require('./SuspectBox.jsx');
var SuspectDisplay = require('./SuspectDisplay.jsx');
var RoomItem = require('./RoomItem.jsx');
var WinChecker = require('./WinChecker.jsx');



// SEED DATA
var suspectData = require('../suspect_data.js');
var clueData = require('../clue_data.js');


// *****************************************************************************


var GameBox = React.createClass({

  getInitialState: function(){
    return{ suspects: suspectData, clues: clueData, currentClue:clueData[1], who: undefined }
  },

  componentDidMount: function(){
  this.setState({
       who: _.sample(this.state.suspects)
     });
},

  roomClues: function(clues){
    var allClues = []
    for(var clue of this.state.clues){
      allClues.push(clue)
    }
    console.log("allClues", allClues)
    return allClues
  },

  selectClue: function(item){
    var selectedClues = []
    for(var clue of this.state.clues) {
      if(clue.item === item) {
        selectedClues.push(clue)
      }
    }
    return selectedClues[0]
  },



  displaySuspects: function(suspects){
    var allSuspects = []
    for(var suspect of this.state.suspects){
      if( !suspect.released ){
        allSuspects.push(suspect)
      }
    }
    return allSuspects
  },

  handleClueSubmit: function(answer) {
    console.log('game box got answer', answer)
    let item = this.state.currentClue.item
    console.log('item', item)
    let newSuspects = this.state.suspects.map(function(suspect){
      if( answer !== suspect[ item ].toString() ){
        suspect.released = true
      }
      return suspect;
    })
    this.setState({suspects: newSuspects})

  },

  handleFoundClueSubmit: function(foundClue){
    this.setState({ currentClue: foundClue })
  },

  checkWinner: function(){
    console.log("suspects", this.state.suspects)
    var avaliableSuspect = this.state.suspects.filter(function (suspect) {
      return !suspect.released;
    });
    if(avaliableSuspect.length === 1){
      var suspect = avaliableSuspect[0]
      console.log('user suspect', avaliableSuspect[0]);
      console.log('ai suspect', this.state.who);
      if (suspect.name === this.state.who.name) {
        console.log(suspect.name[0], this.state.who)
        this.setState({ win: <p>You have caught the right person, {suspect.name}</p>})
      } else {
        this.setState({ win:<p>"You've let {suspect.name} off the hook! Ah well, maybe next time!"</p> })
        console.log( "cjhewuwehowerhoweuhr")
      }
      // this.state.suspects.map(function(suspect){
      // if( suspect.name[0] === this.state.who){
      //   console.log(suspect.name[0], this.state.who)
      //   this.setState({ win: <p>You have caught the right person, {suspect.name}</p>})
      //     console.log( "chris")
      //        }
      //        else{
      //         this.setState({ win:<p>"You've let {suspect.name} off the hook! Ah well, maybe next time!"</p> })
      //         console.log( "cjhewuwehowerhoweuhr")
      //        }
      // })
    }
  },

  render: function(){

    return (
    <div>
      {this.state.win}
      <h1>CRIME SCENE</h1>
      <RoomBox roomClues={ this.roomClues(this.state.clues)} onClueFound={this.handleFoundClueSubmit}/>

      <div id="left">
      <SuspectBox displaySuspects={ this.displaySuspects(this.state.suspects)}
      checkWinner={this.state.checkWinner}/>
      </div>

      <div id="right">
      <ClueDisplay selectedClue={ this.state.currentClue }/>
      <ClueForm onClueSubmit={ this.handleClueSubmit }/>
      </div>

      <WinChecker checkWinner={this.checkWinner}/>
      {this.state.win}
    </div>
    )
  }

})

module.exports = GameBox;