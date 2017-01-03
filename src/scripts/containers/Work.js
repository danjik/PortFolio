import React from 'react'

import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import Project from '../components/Project'

import '../../styles/work.css'

var Work = React.createClass({
  getInitialState() {
    return ({
    })
  },
  render() {
    return (
      <div className="wrapper">
        <NavBar tabs="work"/>
          <div className="work-panel">
            <div className="overlay-work"></div>
            <div className="flex-center home-presentation">
              <span className="home-name">Let's have a look on my work</span>
            </div>
          </div>
            <Project/>
        <Footer/>
      </div>
    )
  }
})

export default Work
