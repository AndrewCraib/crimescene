var React = require('react');

var ClueDisplay = React.createClass({

  render:function(){
    return(
      <div className='alignment'> 
       <h1>CLUE</h1>
        <h3>{ this.props.selectedClue.question }</h3>  
        <section>
        <img src={ this.props.selectedClue.clueimage} height='400' width='300'></img>
        </section>
      </div>
    )
  }
});

module.exports = ClueDisplay;