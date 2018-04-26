import React, {PropTypes} from 'react'
import {FormFeedback} from 'reactstrap'

const ValidationErrorMessage = ({message}) => {
  if (!message) {
    return null
  }

  return (
    <div>
    <FormFeedback>{message}</FormFeedback>
    <br />
    </div>
  )
}

//ValidationErrorMessage.propTypes = {
  //message: PropTypes.string,
//}

export default ValidationErrorMessage;
