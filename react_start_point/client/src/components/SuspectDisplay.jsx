var React = require('react');


var SuspectDisplay = React.createClass({

  


render: function(){
      return(
        <div className='suspectdisplay'>
   
          <img src={this.props.pic} height='42' width='42'></img>
          <ul>
            <li>Name: {this.props.name}</li>
            <li>D.o.b: {this.props.dob}</li>
            <li>Hair Color: {this.props.hair_color}</li>
            <li>Shoe size: {this.props.shoe_size}</li>
            <li>Blood type: {this.props.bloodtype}</li>
          </ul>
        </div>
        )
    }
  })

module.exports = SuspectDisplay;

