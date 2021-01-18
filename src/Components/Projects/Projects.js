// Dependency Imports
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// CSS Imports
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import gym from '../../Images/gym.jpg';
import dog from '../../Images/dog.jpg';
import calc from '../../Images/calc.jpg';
import './Projects.css';

export default class Projects extends Component {
  render() {
    return (
      <div className='projects-page page'>
        <Link to='/about'>
          <button>
            <span className='prev'>About</span>
            <FontAwesomeIcon
              style={{ fontSize: '35px' }}
              icon='angle-double-up'
            />{' '}
          </button>
        </Link>
        <h1> Projects </h1>

        <div className='projects'>
          <div className='proj'>
            <div className='proj-content'>
              <a target='_blank' href='https://hollywoof.xyz/'>
                <img className='proj-img' src={dog} alt='hollywoof'></img>{' '}
                <div className='proj-overlay'>
                  <h2 className='proj-title'> HollyWoof </h2>
                  <p className='proj-desc'>
                    {' '}
                    HollyWoof is an application that aims to prepare dog owners
                    in the event of a dog barking on screen.
                  </p>
                </div>
              </a>
              <div className='proj-links'>
                <a target='_blank' href='https://github.com/tphelps93/hollywoof-client'> Client Repo </a>
                <a target='_blank' href='https://github.com/tphelps93/hollywoof-server'> Server Repo </a>
                <h2> Technologies </h2>
                <div className='technologies'>
                  <div className='row front'>
                    <h4> FrontEnd </h4>
                    <p> React </p>
                  </div>
                  <div className='row back'>
                    <h4> Backend </h4>
                    <p> NodeJS </p>
                    <p> Express.js </p>
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
                href='https://strong-at-every-size-frontend.tphelps93.vercel.app/'
              >
                <img className='proj-img' src={gym} alt='saes'></img>{' '}
                <div className='proj-overlay'>
                  <h2 className='proj-title'> Strong At Every Size </h2>
                  <p className='proj-desc'>
                    {' '}
                    A personal training website that allows users to create an
                    account, login, purchase items from the store, and keep up
                    to date with news and promotions.
                  </p>
                </div>
              </a>
              <div className='proj-links'>
                <a target='_blank' href='https://github.com/tphelps93/strong-at-every-size'> Client Repo </a>
                <a target='_blank' href='https://github.com/tphelps93/strong-at-every-size-api'> Server Repo </a>
                <h2> Technologies </h2>
                <div className='technologies'>
                  <div className='row front'>
                    <h4> FrontEnd </h4>
                    <p> React </p>
                  </div>
                  <div className='row back'>
                    <h4> Backend </h4>
                    <p> NodeJS </p>
                    <p> Express.js </p>
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
                href='https://tphelps93.github.io/simpleCalculator/'
              >
                <img className='proj-img' src={calc} alt='calculator'></img>{' '}
                <div className='proj-overlay'>
                  <h2 className='proj-title'> JavaScript Calculator </h2>
                  <p className='proj-desc'>
                    {' '}
                    A simple, yet functional calculator web-application made
                    with JavaScript. Complete with all the basic operations.
                  </p>
                </div>
              </a>
              <div className='proj-links'>
                <a target='_blank' href='https://github.com/tphelps93/simpleCalculator'> Client Repo </a>
                <h2> Technologies </h2>
                <div className='technologies'>
                  <div className='row front'>
                    <h4> FrontEnd </h4>
                    <p> HTML </p>
                    <p> CSS </p>
                    <p> JavaScript </p>
                  </div>
                  <div className='row back'>
                    <h4> Backend </h4>
                    <p> None </p>
                  </div>
                  <div className='row server'>
                    <h4> Server </h4>
                    <p> None </p>
                  </div>
                  <div className='row test'>
                    <h4> Testing </h4>
                    <p> None </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
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
