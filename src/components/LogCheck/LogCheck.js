import React from 'react';
import {Redirect} from 'react-router-dom';

const LogCheck = ({token, Target}) => {
  return (<div>
    {!token ? <Redirect to='/login' /> : <Target /> }
  </div>)
}

export default LogCheck
