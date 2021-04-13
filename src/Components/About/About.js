// Dependency Imports
import React, { Component } from 'react';
// CSS Imports
import taylor from '../../Images/Taylor.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './About.css';

export default class About extends Component {
  render() {
    return (
      <div className='about page'>
        <div className='about-content'>
          <img src={taylor} alt='developer'></img>
          <div>
            <h1> Hi, I'm Taylor </h1>
            <p>
              {' '}
              Originally a server in the restaurant industry, I wanted something
              more for my life than living paycheck to paycheck. In 2019, one of
              the guests that I served told me all about his career in
              development and told me that I could start a lucrative career in
              development without a college education, I was immediately
              intrigued. We kept in contact and he provided me resources to
              begin my development journey. I've been hooked ever since.{' '}
            </p>
            <p>
              {' '}
              I still remember the moment that I completed my first application.
              It felt so good to finally complete something on my own! It has
              been a tough journey, but it has been very fun and rewarding. I
              intend to develop for the rest of my life. I am looking forward to
              collaborating with a team of amazing programmers to build awesome
              things.
            </p>{' '}
            <p>
              {' '}
              In the brief moments that I'm not coding, I love to spend time
              with my wife, Sarah, and our two dogs, Kent, and Laney. I also
              enjoy gaming with my friends, video editing, and learning about
              all things space and technology. My desire would be to provide
              websites for people. I really enjoy the creative part of making a
              website. I suppose in the future, I would love to be making
              websites and applications pertaining to space and technology for
              people.
            </p>
          </div>
        </div>
        <div className='tech'>
          <div className='design'>
            <span>
              <FontAwesomeIcon className='tech-icons' icon='pencil-alt' />{' '}
            </span>
            <h2> Designer</h2>
            <h4> Design Tools </h4>
            <p> Balsamiq Wireframes </p>
            <p> Trello </p>
            <p> GIMP 2.0 </p>
            <p> Pen and Paper </p>
          </div>
          <div className='fullstack'>
            <span>
              <FontAwesomeIcon className='tech-icons' icon='code' />{' '}
            </span>
            <h2> Full Stack Development </h2>
            <h4> Languages </h4>
            <p> HTML, CSS, JavaScript, C# </p>
            <h4> Other </h4>
            <p> React, NodeJS, Express.js, contextAPI,</p>
            <p> PostgreSQL, MongoDB, Jest, Chai, Postman, DBeaver </p>
            <p> Heroku, Vercel </p>
          </div>
        </div>
      </div>
    );
  }
}
