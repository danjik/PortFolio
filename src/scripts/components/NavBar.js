import React from 'react'

import AppBar from 'material-ui/AppBar'
import FlatButton from 'material-ui/FlatButton'
import { Link } from 'react-router'

const NavBar = React.createClass({
  render() {
    const appBarStyle = {
      backgroundColor: '#222',
    }
    let buttonStyle = {
      color: 'white',
      fontWeight : 'bold',
    }
    let buttonStyleSelected = {
      color: 'white',
      fontWeight : 'bold',
      borderBottom : '4px solid white',
      paddingBottom : '5px'
    }

    return (
      <AppBar
         title="Jordan Taillefer"
         style={ appBarStyle }
         iconElementLeft={<div className="logo"></div>}
         iconElementRight={
             <div>
               <FlatButton
                 labelStyle={ this.props.tabs==="home"
                   ? buttonStyleSelected: buttonStyle }
                 containerElement={<Link to="/" />}
                 label={ 'Home' } />
               <FlatButton
                 labelStyle={ this.props.tabs==="about"
                   ? buttonStyleSelected: buttonStyle }
                 containerElement={<Link to="/about" />}
                 label={ 'About' } />
               <FlatButton
                 labelStyle={ this.props.tabs==="work"
                   ? buttonStyleSelected: buttonStyle }
                 containerElement={<Link to="/work" />}
                 label={ 'Work' } />
               <FlatButton
                 labelStyle={ this.props.tabs==="project"
                   ? buttonStyleSelected: buttonStyle }
                 containerElement={<Link to="/project" />}
                 label={ 'Project' } />
             </div>
           }

        />
    )
  }
})

export default NavBar
