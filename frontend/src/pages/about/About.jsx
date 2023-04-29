import React from 'react';
import './about.css';
import Arun from '../../../src/assets/images/arun.jpg'
import Sameerul from '../../../src/assets/images/sameerul.jpeg'


export const About = () => {
  return (
    <div className="developers-container">
      <h1 className="title">Our Developers</h1>
      <div className="developer-card">
        <img className="avatar" src={Arun} alt="Developer Avatar" />
        <div className="developer-info">
          <h2 className="name">Arunkumar</h2>
          <p className="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at metus eget felis placerat eleifend. Aenean vel sapien eu nulla consequat vestibulum.</p>
          <div className="social-links">
            <a href="https://github.com/Arunsiva003" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github"></i>
            </a>
            <a href="https://www.linkedin.com/in/arun2003as" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin"></i>
            </a>
          </div>
        </div>
      </div>
      <div className="developer-card">
        <img className="avatar" src={Sameerul} alt="Developer Avatar" />
        <div className="developer-info">
          <h2 className="name">Sameerul hak</h2>
          <p className="description">Sed suscipit risus et vulputate congue. Morbi sit amet sagittis magna. Suspendisse ac est libero. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.</p>
          <div className="social-links">
            <a href="https://github.com/Sameerul-Hak" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github"></i>
            </a>
            <a href="https://www.linkedin.com/in/sameerul-hak-877194249/" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

