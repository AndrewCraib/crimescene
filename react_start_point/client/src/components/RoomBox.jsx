var React = require('react');
var RoomItem = require('./RoomItem.jsx')

var RoomBox = React.createClass({



  render: function(){

    var allClues = this.props.roomClues.map(function(clue){
      return <RoomItem
        key={clue.id}
        item={clue.item}
        clue={clue}
        roomimage={clue.roomimage}
        onClueFound={ this.props.onClueFound }
      />
  
    }.bind(this))

    return(
      <div className='roombox' >
      <h1>Crime Scene</h1>

        <section>
          {allClues}
        </section>

      </div>
      )

  }

})

module.exports = RoomBox;