import React, { useEffect, Fragment, useContext } from 'react';
import Spinner from '../layout/Spinner';
import Repos from '../repos/Repos';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import GithubContext from '../../context/github/githubContext';

const User = ({ getUserRepos, repos, match }) => {
  const githubContext = useContext(GithubContext);
  const { getUser, loading, user } = githubContext;

  useEffect(() => {
    getUser(match.params.login);
    getUserRepos(match.params.login);
    // eslint-disable-next-line
  }, []);

  const {
    name,
    avatar_url,
    location,
    bio,
    blog,
    company,
    login,
    html_url,
    followers,
    following,
    public_repos,
    public_gists,
    hireable,
  } = user;

  if (loading) {
    return <Spinner />;
  }

  return (
    <Fragment>
      <div className='d-flex align-items-center'>
        <Link to='/' className='btn btn-light mr-3'>
          Back to search
        </Link>
        Hireable{' '}
        {hireable ? (
          <i className='fas fa-check text-success ml-2' />
        ) : (
          <i className='fas fa-times-circle text-danger ml-2' />
        )}
      </div>
      <div className='card p-4 mt-3'>
        <div className='row'>
          <div className='col-6 text-center'>
            <img
              src={avatar_url}
              alt='profile pic'
              className='rounded-circle d-block mx-auto'
              style={{ width: '150px' }}
            />
            <h1>{name}</h1>
            <p>Location {location}</p>
          </div>
          <div className='col-6'>
            {bio && (
              <Fragment>
                <h3>Bio</h3>
                <p>{bio}</p>
              </Fragment>
            )}
            <a href={html_url} className='btn btn-dark btn-sm my-1'>
              Visit Github Profile
            </a>
            <ul className='list-group list-group-flush'>
              <li className='list-group-item'>
                {login && (
                  <Fragment>
                    <strong>Username: </strong>
                    {login}
                  </Fragment>
                )}
              </li>

              <li className='list-group-item'>
                {company && (
                  <Fragment>
                    <strong>Company: </strong>
                    {company}
                  </Fragment>
                )}
              </li>

              <li className='list-group-item'>
                {blog && (
                  <Fragment>
                    <strong>Website: </strong>
                    {blog}
                  </Fragment>
                )}
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* End first card */}

      <div className='d-flex justify-content-center border rounded my-2 p-2'>
        <div className='badge badge-primary mx-2'>Followers: {followers}</div>
        <div className='badge badge-success mx-2'>Following: {following}</div>
        <div className='badge badge-danger mx-2'>
          Public Repos: {public_repos}
        </div>
        <div className='badge badge-dark mx-2'>
          Public Gists: {public_gists}
        </div>
      </div>
      <Repos repos={repos} />
    </Fragment>
  );
};

User.propTypes = {
  repos: PropTypes.array.isRequired,

  getUserRepos: PropTypes.func.isRequired,
};

export default User;
