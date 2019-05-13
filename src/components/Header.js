import React from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';
import { startLogout } from '../actions/auth';

export const Header = (props) => (

  <div className="header">
    <div className="content-container">
      <div className="header__content">
        <Link className="header__title" to="/" activeClassName="is-active">
          <h1>Blog App</h1>
        </Link>
        <Link to="/create"><h2>Create</h2></Link>
        <button className="button button--link" onClick={ () => {
          // props.startLogout();
          }}>Logout</button>
      </div>
    </div>
  </div>
);

const mapDispatchToProps = (dispatch) => ({
  startLogout: () => dispatch(startLogout())
});

export default connect(undefined, mapDispatchToProps)(Header);
