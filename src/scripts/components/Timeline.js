import React from 'react'
import Paper from 'material-ui/Paper'

import '../../styles/timeline.css'

var Timeline = React.createClass({
  render() {
  const paperStyle = {
    width: 480,
    textAlign: 'center',
    backgroundColor : "white",
    display: 'inline-block',
    zIndex : 2
  }
    return(
      <div className="flex-center timeline-panel">
        <Paper style={ paperStyle } zDepth={ 4 } rounded={ false }>
          <div className="timeline-card">
            <div className="timeline-card-title">End-of-course internship</div>
            <div className="timeline-card-location">Lorem ipsum dolor sit amet.</div>
            <div className="timeline-card-experience">
              I'm currently looking for an internship on security
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
              Lorem ipsum dolor sit amet, consectetur adipisicing elit,
              sed do eiusmod tempor incididunt ut labore et dolore magna
              aliqua. Ut enim ad minim veniam, quis nostrud exercitation
              ullamco laboris nisi ut aliquip ex ea commodo consequat.
              sunt in culpa qui officia deserunt mollit anim id est laborum.
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
              Because of his satisfaction, my supervisor offered
              to continue my work for the rest of the summer
            </div>
          </div>
        </Paper>
        <div className="flex-center timeline-transition timeline-transition-after"/>
        <div className="flex-center timeline-transition timeline-transition-before"/>
        <Paper style={ paperStyle } zDepth={ 4 } rounded={ false }>
          <div className="timeline-card">
            <div className="timeline-card-title">DUT Informatique</div>
            <div className="timeline-card-location">IUT du Limousin, Limoges, France</div>
            <div className="timeline-card-experience">
              Because of his satisfaction, my supervisor offered
              to continue my work for the rest of the summer
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
              Because of his satisfaction, my supervisor offered
              to continue my work for the rest of the summer
            </div>
          </div>
        </Paper>
      </div>
    )
  }
})

export default Timeline
