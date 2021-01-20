// Dependency Imports
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// CSS Imports
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import gym from '../../Images/gym.jpg';
import dog from '../../Images/dog.jpg';
import calc from '../../Images/calc.jpg';
import book from '../../Images/books.jpg';
import './Projects.css';

export default class Projects extends Component {
  render() {
    return (
      <div className='projects-page page'>
        <Link className='prev-about' to='/about'>
          <button>
            <FontAwesomeIcon style={{ fontSize: '35px' }} icon='user-tie' />{' '}
          </button>
        </Link>
        <h1> Projects </h1>

        <div className='projects'>
          <div className='proj'>
            <div className='proj-content'>
              <a target='_blank' rel='noreferrer' href='https://hollywoof.xyz/'>
                <img className='proj-img' src={dog} alt='hollywoof'></img>{' '}
                <div className='proj-overlay'>
                  <h2 className='proj-title'> HollyWoof </h2>
                  <p className='proj-desc'>
                    HollyWoof is an application that aims to prepare dog owners
                    in the event of a dog barking on screen. I built this
                    because my dogs bark whenever a dog barks on screen.
                  </p>
                </div>
              </a>
              <div className='proj-links'>
                <a
                  target='_blank'
                  rel='noreferrer'
                  href='https://github.com/tphelps93/hollywoof-client'
                >
                  {' '}
                  Client Repo{' '}
                </a>
                <a
                  target='_blank'
                  rel='noreferrer'
                  href='https://github.com/tphelps93/hollywoof-server'
                >
                  {' '}
                  Server Repo{' '}
                </a>
                <h2> Technologies </h2>
                <div className='technologies'>
                  <div className='row front'>
                    <h4> FrontEnd </h4>
                    <p> React </p>
                  </div>
                  <div className='row back'>
                    <h4> Backend </h4>
                    <p> NodeJS </p>
                    <p> Express </p>
                  </div>
                  <div className='row server'>
                    <h4> Server </h4>
                    <p> PostgreSQL </p>
                    <p> Knex </p>
                  </div>
                  <div className='row test'>
                    <h4> Testing </h4>
                    <p> Jest </p>
                    <p> Chai </p>
                    <p> Mocha </p>
                    <p> Postman </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className='proj'>
            <div className='proj-content'>
              <a
                target='_blank'
                rel='noreferrer'
                href='https://strong-at-every-size-frontend.tphelps93.vercel.app/'
              >
                <img className='proj-img' src={gym} alt='saes'></img>{' '}
                <div className='proj-overlay'>
                  <h2 className='proj-title'> Strong At Every Size </h2>
                  <p className='proj-desc'>
                    A personal training website that allows users to create an
                    account, login, purchase items from the store, and keep up
                    to date with news and promotions. I built this to help my
                    wife build up her client base for her personal training
                    business.
                  </p>
                </div>
              </a>
              <div className='proj-links'>
                <a
                  target='_blank'
                  rel='noreferrer'
                  href='https://github.com/tphelps93/strong-at-every-size'
                >
                  {' '}
                  Client Repo{' '}
                </a>
                <a
                  target='_blank'
                  rel='noreferrer'
                  href='https://github.com/tphelps93/strong-at-every-size-api'
                >
                  {' '}
                  Server Repo{' '}
                </a>
                <h2> Technologies </h2>
                <div className='technologies'>
                  <div className='row front'>
                    <h4> FrontEnd </h4>
                    <p> React </p>
                  </div>
                  <div className='row back'>
                    <h4> Backend </h4>
                    <p> NodeJS </p>
                    <p> Express </p>
                  </div>
                  <div className='row server'>
                    <h4> Server </h4>
                    <p> PostgreSQL </p>
                    <p> Knex </p>
                  </div>
                  <div className='row test'>
                    <h4> Testing </h4>
                    <p> Jest </p>
                    <p> Chai </p>
                    <p> Mocha </p>
                    <p> Postman </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className='proj'>
            <div className='proj-content'>
              <a
                target='_blank'
                rel='noreferrer'
                href='https://bookmarks-client-ioreslwa1.vercel.app/'
              >
                <img className='proj-img' src={book} alt='bookmark'></img>{' '}
                <div className='proj-overlay'>
                  <h2 className='proj-title'> Bookmark </h2>
                  <p className='proj-desc'>
                    {' '}
                    A simple bookmark application that allows users to keep
                    track of favorited websites. I built this for a more
                    customized way to keep track of favorited websites.
                  </p>
                </div>
              </a>
              <div className='proj-links'>
                <a
                  target='_blank'
                  rel='noreferrer'
                  href='https://github.com/thinkful-ei-shark/react-bookmarks-app-Taylor'
                >
                  {' '}
                  Client Repo{' '}
                </a>
                <a
                  target='_blank'
                  rel='noreferrer'
                  href='https://github.com/tphelps93/bookmarks-api'
                >
                  {' '}
                  Server Repo{' '}
                </a>
                <h2> Technologies </h2>
                <div className='technologies'>
                  <div className='row front'>
                    <h4> FrontEnd </h4>
                    <p> React </p>
                  </div>
                  <div className='row back'>
                    <h4> Backend </h4>
                    <p> NodeJS </p>
                    <p> Express </p>
                  </div>
                  <div className='row server'>
                    <h4> Server </h4>
                    <p> PostgreSQL </p>
                    <p> Knex </p>
                  </div>
                  <div className='row test'>
                    <h4> Testing </h4>
                    <p> Jest </p>
                    <p> Chai </p>
                    <p> Mocha </p>
                    <p> Postman </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Link className='next-contact' to='/contact'>
          <button className='next-btn'>
            <FontAwesomeIcon style={{ fontSize: '35px' }} icon='envelope' />{' '}
          </button>
        </Link>
      </div>
    );
  }
}
