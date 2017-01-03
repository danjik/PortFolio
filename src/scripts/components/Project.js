import React from 'react'
import Paper from 'material-ui/Paper'
import { Link } from 'react-router'

import '../../styles/project.css'

const Project = React.createClass({
  render() {
    const paperStyle = {
      height: 200,
      maxWidth: 800,
      margin: 16,
      textAlign: 'center',
      backgroundColor : "#DDD",
    }
    return (
      <div className="project-panel">
        <div className="flex-center projects-list">
          <Paper style={ paperStyle } zDepth={ 4 } rounded={ false } >
            <div className="project-logo project-calculator"></div>
            <div className="project-content">
              <div className="flex-center project-content-title">Cryptographic calculator</div>
              <div className="project-content-text">
                <div>
                  <span className="title-bold">Team</span>
                  <span>5 persons</span>
                </div>
                <div>
                  <span className="title-bold">Release date</span>
                  <span>End of January</span>
                </div>
                <div>
                  <span className="title-bold">Technology</span>
                  <span>C / C++ / Qt</span>
                </div>
                <div>
                  <span className="title-bold">Subject</span>
                  <span>
                    In order to make easier the cryptographic functions, we
                    were asked to build an application. The project has
                    to propose an IHM allowing functions to encrypt/decrypt
                    (RSA,AES,DES...), hash and sign a message.
                  </span>
                </div>
              </div>
            </div>
          </Paper>
          <Paper style={ paperStyle } zDepth={ 4 } rounded={ false } >
            <div className="project-logo project-report"></div>
            <div className="project-content">
              <div className="flex-center project-content-title">Cryptographic report</div>
              <div className="project-content-text">
                <div>
                  <span className="title-bold">Team</span>
                  <span>2 persons</span>
                </div>
                <div>
                  <span className="title-bold">Release date</span>
                  <span>Early February</span>
                </div>
                <div>
                  <span className="title-bold">Technology</span>
                  <span>Raspbian</span>
                </div>
                <div>
                  <span className="title-bold">Subject</span>
                  <span>
                    Based on papers written by specialists, we were
                    asked to write a report on the subject "Side Channel Attack"
                  </span>
                </div>
              </div>
            </div>
          </Paper>
          <Paper style={ paperStyle } zDepth={ 4 } rounded={ false } >
            <div className="project-logo project-raspberry"></div>
            <div className="project-content">
              <div className="flex-center project-content-title">
                Communication between Raspberry pi 3
              </div>
              <div className="project-content-text">
                <div>
                  <span className="title-bold">Team</span>
                  <span>2 persons</span>
                </div>
                <div>
                  <span className="title-bold">Release date</span>
                  <span>Middle of February</span>
                </div>
                <div>
                  <span className="title-bold">Technology</span>
                  <span>Raspbian</span>
                </div>
                <div>
                  <span className="title-bold">Subject</span>
                  <span>After see how a Raspberry pi 3 works,
                  we were asked to build a communication application
                  between 2 devices
                  </span>
                </div>
              </div>
            </div>
          </Paper>
          <Paper style={ paperStyle } zDepth={ 4 } rounded={ false } >
            <div className="project-logo project-binary"></div>
            <div className="project-content">
              <div className="flex-center project-content-title">
                Binary attack
              </div>
              <div className="project-content-text">
                <div>
                  <span className="title-bold">Team</span>
                  <span>2 persons</span>
                </div>
                <div>
                  <span className="title-bold">Release date</span>
                  <span>Early January</span>
                </div>
                <div>
                  <span className="title-bold">Technology</span>
                  <span>Raspbian</span>
                </div>
                <div>
                  <span className="title-bold">Subject</span>
                  <span>
                    After spend a week to learn how we could attack some c functions,
                    we were asked to build our own binary attack
                  </span>
                </div>
              </div>
            </div>
          </Paper>
          <Paper style={ paperStyle } zDepth={ 4 } rounded={ false } >
            <div className="project-logo project-password"></div>
            <div className="project-content">
              <div className="flex-center project-content-title">
                CAS authentification
              </div>
              <div className="project-content-text">
                <div>
                  <span className="title-bold">Team</span>
                  <span>4 persons</span>
                </div>
                <div>
                  <span className="title-bold">Release date</span>
                  <span>Middle of January</span>
                </div>
                <div>
                  <span className="title-bold">Technology</span>
                  <span>C</span>
                </div>
                <div>
                  <span className="title-bold">Subject</span>
                  <span>
                    After looking on existing authentification technology, we wrote 2 cookbook per
                    persons in order to build our own CAS authentification
                  </span>
                </div>
                <div>
                  <span className="title-bold">Download : </span>
                  <Link to="static/media/Cookbook_Oauth_Taillefer.pdf" target="_blank"
                    className="project-download">
                      <span>
                        Cookbook Oauth
                      </span>
                  </Link>
                  <Link to="static/media/Cookbook_Radius_Taillefer.pdf" target="_blank"
                   className="project-download">
                      <span>
                        Cookbook Radius
                      </span>
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
export default Project
