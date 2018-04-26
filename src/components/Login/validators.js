import validate from 'validate.js';

const registrationConstraints = {
  userEmail: {
    email: true
  },
  confirmPassHash: {
    equality: "passHash"
  }
}

const loginConstraints = {
  userEmail: {
    email: true
  }
}

export const validateRegistrationError = (form) => {
  console.log("validate form: ", form);
  
  return validate(form, registrationConstraints);
}

export const validateLoginError = (form) => {
  return validate(form, loginConstraints);
}
