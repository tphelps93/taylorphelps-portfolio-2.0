// Dependency Imports
import React, { Component } from 'react';
// CSS Imports
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
          <div id='stars4'></div>
        </div>
        <div className='heading'>
          <h1> Taylor Phelps </h1>
          <h2> FullStack Engineer </h2>
        </div>
      </div>
    );
  }
}
