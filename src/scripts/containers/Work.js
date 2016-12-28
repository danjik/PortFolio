import React from 'react'

import NavBar from '../components/NavBar'
import Footer from '../components/Footer'

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

        </div>
        <Footer/>
      </div>
    )
  }
})

export default Work
