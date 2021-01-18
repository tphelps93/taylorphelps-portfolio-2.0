// Dependency Imports
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// CSS Imports
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Contact.css';

export default class Contact extends Component {
  render() {
    return (
      <div className='contact page'>
        <Link to='/projects'>
          <button>
            <span className='prev'>Projects</span>
            <FontAwesomeIcon
              style={{ fontSize: '35px' }}
              icon='angle-double-up'
            />{' '}
          </button>
        </Link>
        <h1> Contact Me </h1>
      </div>
    );
  }
}
