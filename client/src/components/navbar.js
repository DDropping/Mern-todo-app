import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {
  render() {
    return (
      <div>
        <nav class='navbar navbar-expand-sm navbar-light bg-light'>
          <div className='container'>
            <a class='navbar-brand' href='#'>
              <strong>NAVBAR</strong>
            </a>
            <button
              class='navbar-toggler'
              type='button'
              data-toggle='collapse'
              data-target='#navbarNav'
              aria-controls='navbarNav'
              aria-expanded='false'
              aria-label='Toggle navigation'
            >
              <span class='navbar-toggler-icon' />
            </button>
            <div class='collapse navbar-collapse' id='navbarNav'>
              <ul class='navbar-nav'>
                {/*  David's Link */}
                <li class='nav-item'>
                  <a class='nav-link' href='/todo'>
                    Todo
                  </a>
                </li>
                {/*  Tacho's Link */}
                <li class='nav-item'>
                  <a class='nav-link' href='#'>
                    Features
                  </a>
                </li>
                {/*  Jarren's Link */}
                <li class='nav-item'>
                  <a class='nav-link' href='#'>
                    Pricing
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}
