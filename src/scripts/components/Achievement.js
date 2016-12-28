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
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Praesentium nostrum hic alias officiis rerum incidunt. Laboru
                  m, in, illum optio consequuntur quis minus dicta quas t
                  empora eaque amet est ut officiis.
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
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Atque, nostrum, quis. Quasi, eos perspiciatis repellat recusa
                  ndae dicta, pariatur hic voluptas modi, quidem magnam n
                  ulla assumenda officia consectetur facilis magni ipsam!
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
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Accusantium amet iure assumenda nemo libero, maxime officiis
                  perferendis, excepturi possimus similique! Eligendi at
                  itaque sapiente dolorem perferendis eius ratione,
                  voluptate illum.
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
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Optio reiciendis eos nihil dicta libero dolorum, in esse qui
                  ab laborum explicabo ipsam quae necessitatibus soluta i
                  llo maxime expedita nostrum earum.
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
