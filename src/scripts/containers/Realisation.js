import React from 'react'

import NavBar from '../components/NavBar'
import Footer from '../components/Footer'

import Production from '../components/Production'

import '../../styles/realisation.css'

var Realisation = React.createClass({
  getInitialState() {
    return ({
    })
  },
  render() {
    return (
      <div className="wrapper">
        <NavBar tabs="project"/>
          <div className="realisation-panel">
            <div className="overlay-realisation"></div>
            <div className="flex-center home-presentation">
              <span className="home-name">You want to see my personal project ?</span>
            </div>
          </div>
          <Production/>
        <Footer/>
      </div>
    )
  }
})

export default Realisation
