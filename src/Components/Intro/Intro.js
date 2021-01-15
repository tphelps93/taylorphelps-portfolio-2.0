// Dependency Imports
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// CSS Imports
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Intro.css';

export default class Intro extends Component {
  render() {
    return (
      <div className='intro page'>
        <div className='pulse'></div>
        <div className='wrapper'>
          <div id='stars'></div>
          <div id='stars2'></div>
          <div id='stars3'></div>
        </div>
        <div className='heading'>
          <h1> Taylor Phelps </h1>
          <h2> FullStack Web Developer </h2>
          <Link to='/about'>
            <button>
              <span className='next'>Learn More</span>
              <FontAwesomeIcon
                style={{ fontSize: '35px' }}
                icon='angle-double-down'
              />{' '}
            </button>
          </Link>
        </div>
      </div>
    );
  }
}
