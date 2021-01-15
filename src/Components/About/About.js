// Dependency Imports
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// CSS Imports
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './About.css';

export default class About extends Component {
  render() {
    return (
      <div className='about page'>
        <h1> About Me </h1>
        <p>
          {' '}
          Originally being a server in the service industry, I wanted something
          more for my life than living paycheck to paycheck. In 2019, one of the
          guests that I served told me all about his career in development and
          told me that I could start a lucrative career in development without a
          college education, I was immediately intrigued. We kept in contact and
          he provided me resources to begin my development journey. I've been
          hooked ever since. I still remember the moment that I completed my
          first application. It felt so good to finally complete something on my
          own! It has been a tough journey, but it has been very fun and
          rewarding. I intend to develop for the rest of my life and cannot wait
          to get working with a team of people to make amazing things. In the
          brief moments that I'm not coding, I love to spend time with my
          fiance, Sarah, and our two dogs, Kent, and Laney. I also enjoy gaming
          with my friends, video editing, and learning about all things space
          and technology. My desire would be to provide websites for people. I
          really enjoy the creative part of making a website. I suppose in the
          future, I would love to be making websites and applications pertaining
          to space and technology for people.
        </p>
        <Link to='/projects'>
            <button>
              <span>Projects</span>
              <FontAwesomeIcon
                style={{ fontSize: '35px' }}
                icon='angle-double-down'
              />{' '}
            </button>
          </Link>
      </div>
    );
  }
}
