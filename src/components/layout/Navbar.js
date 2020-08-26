import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Navbar = ({ icon, title }) => {
  return (
    <nav className='navbar bg-primary mb-3'>
      <h1 className='text-light'>
        <i className={icon} /> {title}
      </h1>
      <ul className='nav mr-4'>
        <li className='nav-item '>
          <Link to='/' className='nav-link text-light'>
            Home
          </Link>
        </li>
        <li className='nav-item'>
          <Link to='/about' className='nav-link text-light'>
            About
          </Link>
        </li>
      </ul>
    </nav>
  );
};

Navbar.defaultProps = {
  title: 'Github Finder',
  icon: 'fab fa-github',
};

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};

export default Navbar;
