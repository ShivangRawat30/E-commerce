import React from "react";
import "./Contact.css";
import { Button } from "@material-ui/core";
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';

const Contact = () => {
  return (
    <div className="contactContainer">
      <a className="mailBtn" href="mailto:rawatshivang30@gmail.com">
        <Button className='text-[#f2a60c]'><EmailIcon color="yellow"fontSize="large" className='font:large'/>{" "} rawatshivang30@gmail.com</Button>
      </a>
      <a className="linkedInBtn" href="https://www.linkedin.com/in/shivangrawat30/">
        <Button><LinkedInIcon fontSize="large" /> shivangrawat30</Button>
      </a>
      <a className="twitterBtn" href="https://twitter.com/shivangrawaat">
        <Button><TwitterIcon fontSize="large"/> shivangrawaat</Button>
      </a>
    </div>
  );
};

export default Contact;