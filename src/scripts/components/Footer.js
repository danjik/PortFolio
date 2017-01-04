import React from 'react'
import ActionRoom from 'material-ui/svg-icons/action/room'
import ContentMail from 'material-ui/svg-icons/content/mail'
import { white } from 'material-ui/styles/colors'

const Footer = React.createClass({
  render() {
    const styleIcons = {
      marginRight : '8px'
    }
    return(
      <div className="wrapper-footer">
        <div className="footer">
          <div className="flex-center part-footer part-footer-left">
            <div>
              <h1>Contact</h1>
              <div className="contact-information">
                <ContentMail style={ styleIcons } color={ white } />
                <span>jtaillefer02@gmail.com</span>
              </div>
              <div className="contact-information">
                <ActionRoom style={ styleIcons } color={ white } />
                <span>Limoges</span>
              </div>
            </div>
          </div>
          <div className="flex-center part-footer part-footer-right">
            <div>
              <div className="contact-information">
                <span>Jordan Taillefer</span>
              </div>
              <div className="contact-information">
                <span>&#169; 2017</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
})

export default Footer
