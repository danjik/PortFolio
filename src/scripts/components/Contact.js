import React from 'react'
import ActionRoom from 'material-ui/svg-icons/action/room'
import ActionDescription from 'material-ui/svg-icons/action/description'
import ContentMail from 'material-ui/svg-icons/content/mail'
import { grey800 } from 'material-ui/styles/colors'
import { Link } from 'react-router'

import '../../styles/home.css'

var Contact = React.createClass({
  render() {
    const styleIcons = {
      marginRight : '8px'
    }
    return (
      <div className="contact-panel">
        <div className="flex-center contact-location">
          <Link to="https://goo.gl/maps/AEHDVAdDCZC2" target="_blank"
            className="flex-center pdf-download">
            <ActionRoom style={ styleIcons } color={ grey800 } />
            <span>Limoges</span>
          </Link>
        </div>
        <div className="flex-center contact-email">
        <Link to="mailto:jtaillefer02@gmail.com" target="_blank"
         className="flex-center pdf-download">
          <ContentMail style={ styleIcons } color={ grey800 } />
          <span>Email</span>
          </Link>
        </div>
        <div className="flex-center contact-resume">
          <Link to="src/misc/Resume-Taillefer.pdf" target="_blank"
             className="flex-center pdf-download">
            <ActionDescription style={ styleIcons } color={ grey800 } />
            <span>Resume</span>
          </Link>
        </div>
      </div>
    )
  }
})

export default Contact
