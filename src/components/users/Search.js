import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import GithubContext from '../../context/github/githubContext';

const Search = ({ setAlert }) => {
  const githubContext = useContext(GithubContext);

  const [text, setText] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    if (text === '') {
      setAlert('Please enter something', 'info');
    } else {
      githubContext.searchUsers(text);
      setText('');
    }
  };

  const onChange = (e) => setText(e.target.value);

  return (
    <div>
      <form onSubmit={onSubmit} action='' className=''>
        <input
          type='text'
          name='text'
          className='form-control form-group'
          placeholder='Search Users...'
          value={text}
          onChange={onChange}
        />
        <button type='submit' className='btn btn-dark btn-block mb-3'>
          Search
        </button>
      </form>
      {githubContext.users.length > 0 && (
        <button
          className='btn btn-light btn-block mb-3'
          onClick={githubContext.clearUsers}
        >
          Clear
        </button>
      )}
    </div>
  );
};

Search.propTypes = {
  setAlert: PropTypes.func.isRequired,
};

export default Search;
