import React, { Component } from 'react';
import brush from './brush_header.png';
import brush_point from './brush_point.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faFacebookF } from '@fortawesome/free-brands-svg-icons'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header-container">
            <div className="App-header">
                <div className="title">
                  <img src={brush} className="App-logo" alt="logo" />
                  <h2>Old Fashion Cleaning</h2>
                </div>
                <div className="contact">
                   <code><a href="tel:414-587-8088"><FontAwesomeIcon icon={faPhone} /> 414-587-8088</a></code>
                   <code><a href="mailto:todd@oldfashioncleaning.org"><FontAwesomeIcon icon={faEnvelope} /> todd@oldfashioncleaning.org</a></code>
                   <code><a href="https://www.facebook.com/Todd-Pomerenke-Old-Fashion-Cleaning-198493246828195"><FontAwesomeIcon icon={faFacebookF}/> Old Fashion Cleaning</a></code>
                </div>
            </div>
        </div>
        <div className="App-image">
            <img src={brush_point} className="quote-image" alt="" />
            <blockquote className="quote">I want to be... YOUR CLEANER!!<span>-Todd Pomerenke</span></blockquote>
        </div>
        <div className="divider"></div>
        <div className="services-offered">
            <div className="services-image-container">
                <div className="services-image"></div>
            </div>
            <div className="services-description">
                <p>Services Offered:</p>
                <ul>
                  <li>Residential & Commerical Cleaning</li>
                  <li>Pressure Washing</li>
                  <li>Virus Disinfecting</li>
                  <li>Apartment Move-out Cleaning & Common Hallways</li>
                  <li>Basement Web Cleaning</li>
                  <li>Garage & Basement Cleaning</li>
                  <li>Furniture Vaccumed & Moved</li>
                  <li>Organic Cleaning Available</li>
                  <li>Hand Cleaned Flooring</li>
                </ul>
            </div>
        </div>
        <div className="divider"></div>
        <div className="skills">
            <div className="skills-description">
                <p>Details:</p>
                <ul>
                  <li>20 Years Experience</li>
                  <li>One man team & I Clean the Old Fashion Way</li>
                  <li>Very Detailed</li>
                  <li>Great Reviews & References</li>
                  <li>Honest, Reasonable, Reliable</li>
                  <li>Flat Rate (No Cancellation Charges or Fees)</li>
                  <li>Flexible Hours & Cleaning Details</li>
                  <li>Your Chemicals or Mine</li>
                  <li>Own Cleaning Supplies & Equipment</li>
                  <li>Truck Available for Light Moving & Decluttering</li>
                </ul>
            </div>
            <div className="skills-image-container">
                <div className="skills-image"></div>
            </div>
        </div>
        <div className="divider"></div>
        <div className="reviews">
            <blockquote className="quote">Todd has been my cleaning guy for almost 10 years. You couldn't ask for a better cleaner or a more honest person to come into your home.<span>-Judy M</span></blockquote>
            <blockquote className="quote">Todd was referred to me by Frisia day, and has done great work at my home for over two years!<span>-Carol K</span></blockquote>
            <blockquote className="quote">Excellent cleaning company. Despite my dog doing his best to leave orders in my house. Todd always finds a way to leave my house tidy and smelling fresh. That same dog of mine is allergic to dust mites Todd has made his life that much more pleasant with his cleaning. Would recommend to anybody.<span>-Marteze M</span></blockquote>
        </div>
        <div className="divider"></div>
        <div className="footer"></div>
        <div className="divider"></div>
      </div>
    );
  }
}

export default App;
