import React from 'react'
import Paper from 'material-ui/Paper'

import '../../styles/achievement.css'

const Achievement = React.createClass({

  render() {
    const paperStyle = {
      height: 400,
      width: 300,
      margin: 32,
      textAlign: 'center',
      backgroundColor : "#DDD",
      display: 'inline-block',
    }
    return(
      <div className="achievements">
        <div className="flex-center achievements-title">
          <h1>Current work</h1>
        </div>
        <div className="flex-center achievements-list">
          <Paper style={ paperStyle } zDepth={ 4 } rounded={ false } >
            <div className="paper-achievement">
              <div className="img-achievement img-calculator"/>
              <div className="content-achievement">
                <div className="flex-center text-achievement-title">
                  <h1>Cryptographic calculator</h1>
                </div>
                <div className="text-achievement">
                  In order to make easier the cryptographic functions, we
                  were asked to build an application.
                </div>
                <div className="text-achievement">
                  The project has
                  to propose an IHM allowing functions to encrypt/decrypt
                  (RSA,AES,DES...), hash and sign a message.
                </div>
              </div>
            </div>
          </Paper>
          <Paper style={ paperStyle } zDepth={ 4 } rounded={ false } >
            <div className="paper-achievement">
              <div className="img-achievement img-mix-it"/>
              <div className="content-achievement">
                <div className="flex-center text-achievement-title">
                  <h1>Mix-it</h1>
                </div>
                <div className="text-achievement">
                  I built this project in ReactJS in order to improve my web skills.
                </div>
                <div className="text-achievement">
                  The application allow the user to add a Youtube playlist, then,
                  it will mix the transition between the music and remove the time without
                  music.
                </div>
              </div>
            </div>
          </Paper>
        </div>
        <div className="flex-center achievements-list">
          <Paper style={ paperStyle } zDepth={ 4 } rounded={ false } >
            <div className="paper-achievement">
              <div className="img-achievement img-report"/>
              <div className="content-achievement">
                <div className="flex-center text-achievement-title">
                  <h1>Cryptographic report</h1>
                </div>
                <div className="text-achievement">
                  Based on papers written by specialists, we were
                  asked to write a report on the subject "Side Channel Attack"
                </div>
                <div className="text-achievement">
                  The goal is to learn a new attack and tell to our classmates what we
                  understood and learnt.
                </div>
              </div>
            </div>
          </Paper>
          <Paper style={ paperStyle } zDepth={ 4 } rounded={ false } >
            <div className="paper-achievement">
              <div className="img-achievement img-react"/>
              <div className="content-achievement">
                <div className="flex-center text-achievement-title">
                  <h1>ReactJS/React Native</h1>
                </div>
                <div className="text-achievement">
                  After trying some web technologies like Symfony2, AngularJS, JQuery,
                  I decided to learn more and master ReactJS and his mobile side React Native
                </div>
              </div>
            </div>
          </Paper>
        </div>
      </div>
    )
  }
})

export default Achievement
