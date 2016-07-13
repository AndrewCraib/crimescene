var React = require('react');
var SuspectDisplay = require('./SuspectDisplay.jsx');


var SuspectBox = React.createClass({

  render: function(){

    var allSuspects = this.props.displaySuspects.map(function(suspect){
      return <SuspectDisplay 
      key={suspect.id}
      pic={suspect.pic}
      name={suspect.name}
      dob={suspect.dob}
      hair_color={suspect.hair_color}
      shoe_size={suspect.shoe_size}
      bloodtype={suspect.bloodtype}
      />
    });
    return (
      <div className="suspectbox" className='alignment' >
      <h1>SUSPECTS FILES</h1>
        <section>
          {allSuspects}
        </section>
     </div>
    )
  } 
});

module.exports = SuspectBox;