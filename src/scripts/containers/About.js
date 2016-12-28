import React from 'react'
import NavBar from '../components/NavBar'
import Timeline from '../components/Timeline'
import Footer from '../components/Footer'

import '../../styles/about.css'

var About = React.createClass({
  getInitialState() {
    return ({
    })
  },
  render() {
    return (
      <div className="wrapper">
        <NavBar tabs="about"/>
        <div className="about-panel">
          <div className="overlay-about"></div>
          <div className="flex-center about-presentation">
            <span className="about-welcome">Welcome to my life</span>
            <span className="about-tell">I'll tell you more about me</span>
            <span className="about-cite">
              Don't be just focus on the solution
              but also why there is a problem
            </span>
          </div>
        </div>
        <Timeline/>
        <Footer/>
      </div>
    )
  }
})

export default About
