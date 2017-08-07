import React, { Component } from 'react';
import './Form1.css';

class Form extends Component {
  render() {
    return (
      <form className="Form1">
        <label>
          <p>Name:</p>
          <p>
            <input type="text" />
          </p>
        </label>
        <label>
          <p>Last Name:</p>
          <p>
            <input type="text" />
          </p>
        </label>
      </form>
    );
  }
}

export default Form;