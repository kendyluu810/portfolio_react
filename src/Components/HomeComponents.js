import React from 'react';
import {FaFacebookF, FaGithub, FaInstagram, FaDribbble} from 'react-icons/fa';

export default function HomeComponents(props) {
   const {home} =props;
   return (
      <div className="typography">
      <h1>
          Hi, I'm <span>{home.text}</span>
      </h1>
      <p>{home.title}</p>
      <div className="icons">
          <a href= {home.link1} className="icon i-facebook">
              <FaFacebookF />
          </a>
          <a href= {home.link2} className="icon i-github">
              <FaGithub />
          </a>
          <a href= {home.link3} className="icon i-instagram">
              <FaInstagram />
          </a>
          <a href= {home.link4} className="icon i-dribbble">
              <FaDribbble />
          </a>
      </div>
  </div>

   );
}

