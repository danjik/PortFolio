import React from 'react';
import Paper from 'material-ui/Paper';

import '../../styles/timeline.css';

var Timeline = React.createClass({
  render() {
    const paperStyle = {
      maxWidth: 480,
      textAlign: 'center',
      backgroundColor: 'white',
      display: 'inline-block',
      zIndex: 2
    };
    return (
      <div className="flex-center timeline-panel">
        <div className="presentation-text">Hello! My name is Jordan, I'm currently a French software engineer and I'm 25 years old.</div>
        <div className="presentation-text">
          <p>
            Being a video game player, I began at the age of 14 to take an interest in how i could creating one, which led me to discover the basics of algorithmics and
            programming.
          </p>
          <p>I subsequently decided to pursue my studies in order to cover all the wealth offered by computer science. I am now a software engineer at</p>
        </div>
        <Paper style={paperStyle} zDepth={4} rounded={false}>
          <div className="timeline-card">
            <div className="timeline-card-title">Internship at Excilys</div>
            <div className="timeline-card-experience">
              During my internship, I received two month of Java and modern tools training browsing technologies like JAVA/JEE, Angular, Git, REST, and Docker.
            </div>
          </div>
        </Paper>
        <div className="flex-center timeline-transition timeline-transition-after" />
        <div className="flex-center timeline-date">2017</div>
        <div className="flex-center timeline-transition timeline-transition-before" />
        <Paper style={paperStyle} zDepth={4} rounded={false}>
          <div className="timeline-card">
            <div className="timeline-card-title">Master in computer security</div>
            <div className="timeline-card-location">Faculty of Science and Technology</div>
            <div className="timeline-card-experience">
              I graduated from the FST, during the same time, I create with four other people a student association named "Team Cryptis" to give courses to the first years and
              participate to computer security events.
            </div>
          </div>
        </Paper>
        <div className="flex-center timeline-transition timeline-transition-after" />
        <div className="flex-center timeline-date">2014</div>
        <div className="flex-center timeline-transition timeline-transition-before" />
        <Paper style={paperStyle} zDepth={4} rounded={false}>
          <div className="timeline-card">
            <div className="timeline-card-title">Temporary position at the CPAM</div>
            <div className="timeline-card-location">CPAM, Limoges, France</div>
            <div className="timeline-card-experience">
              <p>In order to validate my DUT Informatique, I was asked to carry out an internship in computer science.</p>
              <p>My subject was to realise an application allowing an employee to build his own official document dynamically.</p>
              <p>Moreover, i had to take back a beginning of application coded in Symfony2.</p>
              <p>After the end of the internship, I was ask to continue on a temporary position to continue and finish the project during the summer.</p>
            </div>
          </div>
        </Paper>
        <div className="flex-center timeline-transition timeline-transition-after" />
        <div className="flex-center timeline-transition timeline-transition-before" />
        <Paper style={paperStyle} zDepth={4} rounded={false}>
          <div className="timeline-card">
            <div className="timeline-card-title">DUT Informatique (Diploma of Higher Education)</div>
            <div className="timeline-card-location">IUT du Limousin, Limoges, France</div>
            <div className="timeline-card-experience">I graduated from the IUT du Limousin in computer science.</div>
          </div>
        </Paper>
      </div>
    );
  }
});

export default Timeline;
