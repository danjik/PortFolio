import React from 'react'
import Paper from 'material-ui/Paper'
import { Link } from 'react-router'

import '../../styles/production.css'


const Production = React.createClass({
  render() {
    const paperStyle = {
      height: 200,
      maxWidth: 800,
      margin: 16,
      textAlign: 'center',
      backgroundColor : "#DDD",
    }
    return(
      <div className="production">
        <div className="flex-center achievements-title">
          <h1></h1>
        </div>
        <div className="flex-center production-list">
        <Paper style={ paperStyle } zDepth={ 4 } rounded={ false } >
          <div className="production-logo production-mixit"></div>
          <div className="project-content">
            <div className="flex-center project-content-title">Mix it</div>
            <div className="project-content-text">
              <div>
                <span className="title-bold">Technology</span>
                <span>JS ES6 / ReactJS / Youtube API</span>
              </div>
              <div>
                <span className="title-bold">Subject</span>
                <span>
                  I built this project in ReactJS in order to improve my web skills.
                  The application allow the user to add a Youtube playlist, then,
                  it will mix the transition between the music and remove the time without
                  music.
                </span>
              </div>
              <div>
                <span className="title-bold">Link : </span>
                <Link to="http://www.jordantaillefer.com:9000" target="_blank"
                  className="project-download">
                    <span>
                      Try it yourself !
                    </span>
                </Link>
              </div>
            </div>
          </div>
        </Paper>
        <Paper style={ paperStyle } zDepth={ 4 } rounded={ false } >
          <div className="production-logo production-portfolio"></div>
          <div className="project-content">
            <div className="flex-center project-content-title">Portfolio</div>
            <div className="project-content-text">
              <div>
                <span className="title-bold">Technology</span>
                <span>JS ES6 / ReactJS</span>
              </div>
              <div>
                <span className="title-bold">Subject</span>
                <span>
                  Nowadays, there is a lot of way to create your own portfolio.
                  However, I decided to make the task more difficult in order
                  to improve myself by creating my portfolio entirely by myself
                  and that the result corresponds totally to me.
                </span>
              </div>
              <div>
                <span className="title-bold">See it on Github : </span>
                <Link to="https://github.com/danjik/PortFolio" target="_blank"
                  className="project-download">
                    <div className="logo-github"></div>
                </Link>
              </div>
            </div>
          </div>
        </Paper>
        <Paper style={ paperStyle } zDepth={ 4 } rounded={ false } >
          <div className="production-logo production-intelligence"></div>
          <div className="project-content">
            <div className="flex-center project-content-title">Basics of artificial intelligence</div>
            <div className="project-content-text">
              <div>
                <span className="title-bold">Technology</span>
                <span>Java FX</span>
              </div>
              <div>
                <span className="title-bold">Subject</span>
                <span>
                  This project was particularly interesting because artificial
                  intelligence represents a large part of the computing of the
                  future. We had to put in place several algorithms to find the
                   shortest path through an AI.
                </span>
              </div>
              <div>
                <span className="title-bold">Download : </span>
                <Link to="static/media/Rapport_Intelligence_Artificielle_Aragon_Taillefer.pdf" target="_blank"
                  className="project-download">
                    <span>Project Report</span>
                </Link>
                <span className="title-bold">See it on github : </span>
                <Link to="https://github.com/danjik/intelligence-artificielle" target="_blank"
                className="project-download">
                <div className="logo-github"></div>
                </Link>
              </div>
            </div>
          </div>
        </Paper>

        </div>
      </div>
    )
  }
})

export default Production
