import React from 'react';
import {connect} from 'react-redux';
import {startLogin} from '../actions/auth';

const LoginPage = (props) => {
  const onClick = () => {
    // props.startLogin();
  }

  return (
    <div className="box-layout">
      <div className="box-layout__box">
        <h1 className="box-layout__title">Blog App</h1>
        <p>Tell Your Unique Storsy</p>
        <button className="button" onClick={onClick} >Login with Google</button>
      </div>
    </div>
  )
}

const mapDispatchToProps = (dispatch) => ({
    startLogin: () => dispatch(startLogin()) // Connects to firebase auth system
  })

export default connect(undefined, mapDispatchToProps)(LoginPage);