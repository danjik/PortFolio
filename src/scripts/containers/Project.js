import React from 'react'

import NavBar from '../components/NavBar'
import Footer from '../components/Footer'

var Project = React.createClass({
  getInitialState() {
    return ({
    })
  },
  render() {
    return (
      <div className="wrapper">
        <NavBar tabs="contact"/>
        <div className="contact-panel">

        </div>
        <Footer/>
      </div>
    )
  }
})

export default Project
