var React = require('react');

var WinChecker = React.createClass({

  getInitialState: function(){
    return({ winCheck: false })
  },

 handleAnswerCheck: function(e){
   this.setState({winCheck: e.target.value});
 },


  handleClick: function(e){
    console.log("clicked", this.props.checkWinner);
    e.preventDefault()
    // this.props.checkWinner( this.props.suspects )
    this.props.checkWinner();
  },

  render: function(){
    return(
      <div>
      <form onSubmit={this.handleClick}>
          <input type="submit" value="Have you Caught the Right Person?"/>
      </form>
      </div>
      )
  }
})

module.exports = WinChecker;