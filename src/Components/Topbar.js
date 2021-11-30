import React from 'react';
import useStyles from './styles';
import { Link, Redirect } from 'react-router-dom';

function Home() {
  const classes = useStyles();
  return (
    <>
      <div className={classes.nav}>
        {/* <div>
          {' '}
          <Link to='/'>
            <span>Home</span>
          </Link>
        </div> */}
        <div>
          <Link to='/Business'>
            <span>Business News</span>
          </Link>
        </div>
        <div>
          <Link to='/crime'>
            <span>Crime News</span>
          </Link>
        </div>
        <div>
          {' '}
          <Link to='/entertainment'>
            <span>Entertainment News</span>
          </Link>
        </div>
        <div>
          {' '}
          <Link to='/fashion'>
            <span>Fashion News</span>
          </Link>
        </div>
        <div>
          {' '}
          <Link to='/international'>
            <span>International News</span>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Home;
