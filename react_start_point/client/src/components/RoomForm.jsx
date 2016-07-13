var React = require('react')

var RoomForm = React.createClass({


  getInitialState: function(){
    return {foundClue: null};
  },

  handleClueChange: function(e){
    this.setState({foundClue: e.target.value});
  },

  handleSubmit: function(e){
    e.preventDefault();
    this.props.onClueSubmit( this.state.foundClue )
  },
  
  render:function(){
    return (
            
      

        )
      }
  })

module.exports = RoomForm