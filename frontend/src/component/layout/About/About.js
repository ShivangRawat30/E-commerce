import React from 'react';
import './aboutSection.css';
import { Button, Typography, Avatar } from '@material-ui/core';
import LinkIcon from '@mui/icons-material/Link';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import photo from '../../../Photo.png';
const About = () => {
  const visitInstagram = () => {
    window.location = 'https://www.instagram.com/shivangrawat__/';
  };
  return (
    <div className="aboutSection">
      <div></div>
      <div className="aboutSectionGradient"></div>
      <div className="aboutSectionContainer">
        <Typography component="h1">About Us</Typography>

        <div>
          <div>
            <Avatar
              style={{ width: '10vmax', height: '10vmax', margin: '2vmax 0' }}
              src={photo}
              alt="Founder"
            />
            <Typography>Shivang Rawat</Typography>
            <Button onClick={visitInstagram} color="primary">
              Visit Instagram
            </Button>
            <span>
              I have a passion for creating high-quality code, and I'm dedicated
              to writing clean, efficient, and maintainable code that can easily
              be adapted and expanded upon in the future. my knowledge of
              various npm libraries and tools, enables me to integrate various
              features and functionalities into the applications with ease.
            </span>
          </div>
          <div className="aboutSectionContainer2">
            <Typography component="h2">Our Brands</Typography>
            <a
              href="https://portfolio-weld-three-33.vercel.app/"
              target="blank"
            >
              <LinkIcon className="youtubeSvgIcon" />
            </a>

            <a href="https://www.linkedin.com/in/shivangrawat30/h" target="blank">
              <LinkedInIcon className="instagramSvgIcon" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
