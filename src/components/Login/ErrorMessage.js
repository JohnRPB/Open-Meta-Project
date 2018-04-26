import React, {PropTypes} from 'react';
import {Alert} from 'reactstrap';

const ErrorMessage = ({errors}) => {
  if (Object.keys(errors).length === 0) {
    return null;
  }

  console.log("------------------- START errors -------------------");
  console.log(errors);
  console.log("-------------------- END errors --------------------");
  

  let keys = Object.keys(errors);
  return (
    <div>
    {keys.map((key, idx) => {
      return (
        <Alert color="danger">{`${errors[key]}`}</Alert>
      )
    })
    }
      <br />
    </div>
  );
};

ErrorMessage.defaultProps = {
  errors: {},
};

export default ErrorMessage;
