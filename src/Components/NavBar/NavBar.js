// Dependency Imports
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// CSS Imports
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './NavBar.css';

export default class NavBar extends Component {
  render() {
    return (
      <div className='nav-bar'>
        <Link to='/about'>
          <div className='nav-btn'>
            <button>
              <FontAwesomeIcon style={{ fontSize: '35px' }} icon='user-tie' />{' '}
            </button>
          </div>
        </Link>
      </div>
    );
  }
}
