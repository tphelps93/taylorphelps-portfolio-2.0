// Dependency Imports
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// CSS Imports
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Contact.css';

const initial = {
  name: '',
  email: '',
  message: '',
  nameError: '',
  emailError: '',
  messageError: '',
};
export default class Contact extends Component {
  constructor(props) {
    super(props);
    this.submitForm = this.submitForm.bind(this);
    this.state = {
      status: '',
      initial,
    };
  }

  handleChange = event => {
    const isCheckbox = event.target.type === 'checkbox';
    this.setState({
      [event.target.name]: isCheckbox
        ? event.target.checked
        : event.target.value,
    });
  };

  validate = () => {
    var email_validator_regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    let nameError = '';
    let emailError = '';
    let messageError = '';

    // Name Validation
    if (!this.state.name) {
      nameError = 'Name is required.';
    }

    // Email Validation
    if (!this.state.email) {
      emailError = 'Email is required.';
    }

    if (!email_validator_regex.test(this.state.email)) {
      emailError = 'Email must be a valid format. (eg. test@test.com)';
    }

    // Message Validation
    if (!this.state.message) {
      messageError = 'Message is required.';
    }

    if (nameError || emailError || messageError) {
      this.setState({ nameError, emailError, messageError });
      return false;
    }
    return true;
  };

  submitForm(ev) {
    ev.preventDefault();
    const form = ev.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    const isValid = this.validate();
    if (isValid) {
      xhr.open(form.method, form.action);
      xhr.setRequestHeader('Accept', 'application/json');
      xhr.onreadystatechange = () => {
        if (xhr.readyState !== XMLHttpRequest.DONE) return;
        if (xhr.status === 200) {
          form.reset();
          this.setState({ status: 'SUCCESS' });
        } else {
          this.setState({ status: 'ERROR' });
        }
      };
      xhr.send(data);
    }
  }

  render() {
    const { status } = this.state;
    return (
      <div className='contact page'>
        <Link className='prev-proj' to='/projects'>
          <button>
            <FontAwesomeIcon
              style={{ fontSize: '35px' }}
              icon='project-diagram'
            />{' '}
          </button>
        </Link>

        <form
          onSubmit={this.submitForm}
          action='https://formspree.io/f/moqpreea'
          method='POST'
          className='contact-form'
        >
          <div className='form-title'>Contact Me</div>
          <p className='form-desc'>
            {' '}
            Want to collaborate? Have a job for me? Reach out!{' '}
          </p>
          <div className='form-item'>
            <label className='form-label' htmlFor='name'>
              {' '}
              Name
            </label>
            <input
              onChange={this.handleChange}
              id='name'
              className={`form-input ${
                this.state.nameError ? 'form-input-error' : ''
              }`}
              placeholder='enter your name'
              name='name'
              type='text'
            ></input>
            <span className='form-error'>{this.state.nameError}</span>
          </div>

          <div className='form-item'>
            <label className='form-label' htmlFor='email'>
              {' '}
              Email
            </label>
            <input
              onChange={this.handleChange}
              id='email'
              className={`form-input ${
                this.state.emailError ? 'form-input-error' : ''
              }`}
              placeholder='enter your email'
              name='email'
              type='text'
            ></input>
            <span className='form-error'>{this.state.emailError}</span>
          </div>

          <div className='form-item'>
            <label className='form-label' htmlFor='message'>
              {' '}
              Message{' '}
            </label>
            <textarea
              onChange={this.handleChange}
              id='message'
              className={`form-input ${
                this.state.messageError ? 'form-input-error' : ''
              }`}
              placeholder='enter a message'
              name='message'
              type='text'
            ></textarea>
            <span className='form-error'> {this.state.messageError} </span>
          </div>

          <div className='form-item'>
            <label className='form-label' htmlFor='inquiry'>
              Your Interest
            </label>
            <select
              id='inquiry'
              className='form-input'
              name='inquiry'
              type='text'
            >
              <option> Collaboration </option>
              <option> Recruitment </option>
              <option> Advice </option>
            </select>
          </div>
          <button type='submit'> Submit </button>
          {status === 'SUCCESS' ? (
            <p style={{ color: 'green' }}> Thank you! </p>
          ) : (
            ''
          )}
          {status === 'ERROR' && (
            <p style={{ color: 'red' }}>
              {' '}
              Sorry! There was an error. Try again later.{' '}
            </p>
          )}
        </form>
        <div className='social-links'>
          <h2> Want to know more? </h2>
          <a href='mailto:tphelps1993@gmail.com'> Email </a>
          <a href='https://github.com/tphelps93'> GitHub </a>
          <a href='https://www.linkedin.com/in/taylordev/'> LinkedIn </a>
        </div>
      </div>
    );
  }
}
