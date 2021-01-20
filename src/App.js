// Depndency Imports
import React, { Component } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
// Component Imports
// import Header from './Components/Header/Header';
import Intro from './Components/Intro/Intro';
import Contact from './Components/Contact/Contact';
import About from './Components/About/About';
import Projects from './Components/Projects/Projects';
// CSS Imports
import '../src/Components/FontAwesomeIcons/store';
import './App.css';
import './pageTransitions/slideTransition.css';

class App extends Component {
  render() {
    return (
      <Route
        render={({ location }) => (
          <div className='App'>
            <TransitionGroup>
              <CSSTransition key={location.key} timeout={300} classNames='fade'>
                <Switch location={location}>
                  <Route exact path='/' component={Intro} />
                  <Route path='/about' component={About} />
                  <Route path='/projects' component={Projects} />
                  <Route path='/contact' component={Contact} />
                </Switch>
              </CSSTransition>
            </TransitionGroup>
          </div>
        )}
      ></Route>
    );
  }
}

export default withRouter(App);
