import React from 'react'
import Paper from 'material-ui/Paper'

import '../../styles/timeline.css'

var Timeline = React.createClass({
  render() {
  const paperStyle = {
    maxWidth: 480,
    textAlign: 'center',
    backgroundColor : "white",
    display: 'inline-block',
    zIndex : 2
  }
    return(
      <div className="flex-center timeline-panel">
        <div className="presentation-text">
          Hello! My name is Jordan, I'm currently a French student and I have 23 years old.
        </div>
        <div className="presentation-text">
          Being a video game player, I began at the age of 14 to take an
          interest in how i could creating one, which led me to discover
          the basics of algorithmics and programming. I subsequently decided
          to pursue my studies in order to cover all the wealth offered by
          computer science. I am now in 2nd year of Master in Computer Cryptography.
        </div>
        <Paper style={ paperStyle } zDepth={ 4 } rounded={ false }>
          <div className="timeline-card">
            <div className="timeline-card-title">End-of-course internship of the Master</div>
            <div className="timeline-card-experience">
              I'm currently looking for an internship on security.
            </div>
          </div>
        </Paper>
        <div className="flex-center timeline-transition timeline-transition-after"/>
        <div className="flex-center timeline-date">2017</div>
        <div className="flex-center timeline-transition timeline-transition-before"/>
        <Paper style={ paperStyle } zDepth={ 4 } rounded={ false }>
          <div className="timeline-card">
            <div className="timeline-card-title">Master in computer security</div>
            <div className="timeline-card-location">Faculty of Science and Technology</div>
            <div className="timeline-card-experience">
              I'm currently studying at Faculty of Science and Technology of Limoges
            </div>
          </div>
        </Paper>
        <div className="flex-center timeline-transition timeline-transition-after"/>
        <div className="flex-center timeline-date">2014</div>
        <div className="flex-center timeline-transition timeline-transition-before"/>
        <Paper style={ paperStyle } zDepth={ 4 } rounded={ false }>
          <div className="timeline-card">
            <div className="timeline-card-title">Temporary position at the CPAM</div>
            <div className="timeline-card-location">CPAM, Limoges, France</div>
            <div className="timeline-card-experience">
              Because of his satisfaction, my supervisor offered
              to continue my work for the rest of the summer
            </div>
          </div>
        </Paper>
        <div className="flex-center timeline-transition timeline-transition-after"/>
        <div className="flex-center timeline-transition timeline-transition-before"/>
        <Paper style={ paperStyle } zDepth={ 4 } rounded={ false }>
          <div className="timeline-card">
            <div className="timeline-card-title">Internship at the CPAM</div>
            <div className="timeline-card-location">CPAM, Limoges, France</div>
            <div className="timeline-card-experience">
              In order to validate my DUT Informatique, I was asked
              to carry out an internship in computer science.
              My subject was to realise an application allowing a
              user to build his own official document dynamically.
              Moreover, i had to take back a beginning of application coded in Symfony2.
            </div>
          </div>
        </Paper>
        <div className="flex-center timeline-transition timeline-transition-after"/>
        <div className="flex-center timeline-transition timeline-transition-before"/>
        <Paper style={ paperStyle } zDepth={ 4 } rounded={ false }>
          <div className="timeline-card">
            <div className="timeline-card-title">DUT Informatique (Diploma of Higher Education)</div>
            <div className="timeline-card-location">IUT du Limousin, Limoges, France</div>
            <div className="timeline-card-experience">
              I graduated from the IUT du Limousin in computer science.
            </div>
          </div>
        </Paper>
        <div className="flex-center timeline-transition timeline-transition-after"/>
        <div className="flex-center timeline-date">2011</div>
        <div className="flex-center timeline-transition timeline-transition-before"/>
        <Paper style={ paperStyle } zDepth={ 4 } rounded={ false }>
          <div className="timeline-card">
            <div className="timeline-card-title">Baccalauréat Scientifique (French national high diploma)</div>
            <div className="timeline-card-location">Lycée Turgot, Limoges, France</div>
            <div className="timeline-card-experience">
              I graduated from the Lycée Turgot.
            </div>
          </div>
        </Paper>
      </div>
    )
  }
})

export default Timeline
