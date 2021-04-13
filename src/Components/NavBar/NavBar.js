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
        <div className='nav-list'>
          <Link className='prev-home' to='/'>
            <div className='nav-btn'>
              <button>
                <FontAwesomeIcon
                  className='home-btn'
                  style={{ fontSize: '30px' }}
                  icon='home'
                />{' '}
              </button>
            </div>
          </Link>

          <Link to='/about'>
            <div className='nav-btn'>
              <button>
                <FontAwesomeIcon
                  className='about-btn not-home'
                  style={{ fontSize: '30px' }}
                  icon='user-tie'
                />{' '}
              </button>
            </div>
          </Link>

          <Link to='/projects'>
            <div className='nav-btn'>
              <button>
                <FontAwesomeIcon
                  className='proj-btn not-home'
                  style={{ fontSize: '30px' }}
                  icon='project-diagram'
                />{' '}
              </button>
            </div>
          </Link>

          <Link to='/contact'>
            <div className='nav-btn'>
              <button>
                <FontAwesomeIcon
                  className='contact-btn not-home'
                  style={{ fontSize: '30px' }}
                  icon='envelope'
                />{' '}
              </button>
            </div>
          </Link>
        </div>
      </div>
    );
  }
}
