import React from 'react'

import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import Contact from '../components/Contact'
import Achievement from '../components/Achievement'

import '../../styles/home.css'

var Home = React.createClass({
  getInitialState() {
    return ({
    })
  },
  render() {

    return (
      <div className="wrapper">
        <NavBar tabs="home"/>
        <div className="home-panel">
          <div className="overlay"></div>
          <div className="flex-center home-presentation">
            <span className="home-name">Jordan Taillefer</span>
            <span className="home-job">Developer | Security Analyst</span>
            <Contact/>
          </div>
        </div>
        <Achievement/>
        <Footer/>
      </div>
    )
  }
})

export default Home
