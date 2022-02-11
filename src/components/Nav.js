import React, { Component } from 'react';
import logo from '../images/logo.svg';
import cartIcon from '../images/cartIcon.svg';


export default class Nav extends Component {
  render() {
    return (
      <>
        <nav className='navbar container mt-4'>
          <div className='d-flex justify-content-between'>
            <div>
              <ul className='list-style d-flex'>
                <li className='space-between'>WOMEN</li>
                <li className='space-between'>MEN</li>
                <li className='space-between'>KIDS</li>
              </ul>
            </div>
            <div>
              <img src={logo} alt='logo' />
            </div>
            <div className='d-flex justify-content-center align-items-center'>
              <select className='space-between'>
                <option value="1">$ USD</option>
                <option value="2">&pound; EUR</option>
                <option value="3"># JPY</option>
              </select>
              <img className='space-between' src={cartIcon} alt='cartIcon' />
            </div>
          </div>
        </nav>

      </>
    );
  }
};
