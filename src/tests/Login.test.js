import React from 'react';
import UserFormContainer from 'containers/Login/UserFormContainer';

import sinon from 'sinon';
import axios from 'axios';
import enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';
enzyme.configure({adapter: new Adapter()});

// Integration test setup
import setupIntegrationTest from './mocks/util.js';
import flushAllPromises from './util/flushAllPromises';

// import reducers
import sessionReducer from 'reducers/session';

// Provider
import {Provider} from 'react-redux';

describe('UserForm.js', () => {
  let store, dispatchSpy;
  beforeEach(() => {
    sinon.stub(axios, 'post').returns(
      Promise.resolve({
        data: {
          id: 21,
          message: 'Login Successful',
          token: 'dsadl8493jdsh34kjwsd52',
        },
      }),
    );
    ({store, dispatchSpy} = setupIntegrationTest({session: sessionReducer}));
    console.log(
      '------------------- START store.getState() -------------------',
    );
    console.log(store.getState());
    console.log(
      '-------------------- END store.getState() --------------------',
    );
  });
  afterEach(() => {
    axios.post.restore();
  });
  it('Attaches a user token to the store', async () => {
    const wrapper = enzyme.mount(
      <Provider store={store}>
        <UserFormContainer />
      </Provider>,
    );
    console.log("------------------- START wrapper.debug() -------------------");
    console.log(wrapper.debug());
    console.log("-------------------- END wrapper.debug() --------------------");
    
    let emailInput = wrapper.find('input[name="email"]');
    let passwordInput = wrapper.find('input[name="passHash"]');
    let submitInput = wrapper.find('.login-submit');
    console.log('emailInput.debug(): ', emailInput.debug());
    console.log('passwordInput.debug(): ', passwordInput.debug());
    console.log('submitInput.debug(): ', submitInput.debug());

    // ---------------------------------------------------------
    // User interaction
    // 2018-03-03 15:21
    // ---------------------------------------------------------

    console.log('emailInput.value: ', emailInput.value);
    emailInput.value = '@gmail';
    console.log('emailInput.value: ', emailInput.value);
    passwordInput.value = 'password';

    submitInput.simulate('submit');

    expect(dispatchSpy).toBeCalledWith({
      type: 'ADD_TOKEN',
      data: 'dsadl8493jdsh34kjwsd52',
    });
  });
});
