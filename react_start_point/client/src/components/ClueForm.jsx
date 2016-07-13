var React = require('react');

var ClueForm = React.createClass({

  getInitialState: function(){
    return {answer: ''};
  },

  handleAnswerChange: function(e){
    this.setState({answer: e.target.value});
  },

  handleSubmit: function(e){
    e.preventDefault();
    console.log('click')
    //if answer is correct
    this.props.onClueSubmit( this.state.answer )
    // otherwise can just tell them it's not
  },
  
  render:function(){
    return (
      <form className='form' onSubmit={this.handleSubmit}>
        <input
          type="text"
          placeholder="Your answer"
          value={this.state.answer}
          onChange={this.handleAnswerChange}
        />
        <input type="submit" value="Submit Answer"/>
        </form>
        )
      }
  })

module.exports = ClueForm;
