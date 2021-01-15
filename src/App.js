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
  constructor(props) {
    super(props);
    this.state = {
      prevDepth: this.getPathDepth(this.props.location),
    };
  }

  componentWillReceiveProps() {
    this.setState({ prevDepth: this.getPathDepth(this.props.location) });
  }

  getPathDepth(location) {
    let pathArr = location.pathname.split('/');
    pathArr = pathArr.filter(n => n !== '');
    return pathArr.length;
  }

  render() {
    const { location } = this.props;
    const currentKey = location.pathname.split('/')[1] || '/';
    const timeout = { enter: 800, exit: 400 };
    return (
      <TransitionGroup component='div' className='App'>
        <CSSTransition
          key={currentKey}
          timeout={timeout}
          classNames='pageSlider'
          mountOnEnter={false}
          unmountOnExit={true}
        >
          <div
            className={
              this.getPathDepth(location) - this.state.prevDepth >= 0
                ? 'left'
                : 'right'
            }
          >
            <Switch location={location}>
              <Route exact path='/' component={Intro} />
              <Route path='/about' component={About} />
              <Route path='/projects' component={Projects} />
              <Route path='/contact' component={Contact} />
            </Switch>
          </div>
        </CSSTransition>
      </TransitionGroup>
    );
  }
}

export default withRouter(App);
