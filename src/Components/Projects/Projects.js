// Dependency Imports
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// CSS Imports
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './Projects.css';

export default class Projects extends Component {
  render() {
    return (
      <div className='projects page'>
        <h1> Projects </h1>
        <div className='projects'>
          <h2> Project 1 </h2>
          <h2> Project 2 </h2>
        </div>
        <Link to='/contact'>
          <button>
            <span>Contact</span>
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
