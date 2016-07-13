var React = require('react');

var RoomItem = React.createClass({

  handleClick: function(){
    console.log("clicked", this.props.clue);
    this.props.onClueFound( this.props.clue )
  },

  render: function(){
      return(
        <div className='clues' onClick = {this.handleClick}>
          <input type="image" src={this.props.roomimage} name="item" height='42' width='42'/>
        </div>
        )
    }
  })

module.exports = RoomItem;

