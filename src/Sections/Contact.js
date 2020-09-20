import React from "react";
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import EmailIcon from '@material-ui/icons/Email';
import "./styles/Contact.css"

function Contact() {
  return(
      <div className={"main-content"}>
        <h3>{`<Contact/>`}</h3>
        <p>Feel free to reach out to me for a chat anytime!</p>
        <a href={"https://www.linkedin.com/in/jameszleong/"} target={"_blank"} rel={"noopener noreferrer"}>
          <LinkedInIcon className={"contact-icon"}></LinkedInIcon>
        </a>
        <a href={"https://github.com/JamesLeong98"} target={"_blank"} rel={"noopener noreferrer"}>
          <GitHubIcon className={"contact-icon"}></GitHubIcon>
        </a>
        <a href={"https://www.facebook.com/jameszleong/"} target={"_blank"} rel={"noopener noreferrer"}>
          <FacebookIcon className={"contact-icon"}></FacebookIcon>
        </a>
        <a href={"mailto:james.leong@duke.edu"} target={"_blank"} rel={"noopener noreferrer"}>
          <EmailIcon className={"contact-icon"}></EmailIcon>
        </a>
      </div>
  )
}

export default Contact;