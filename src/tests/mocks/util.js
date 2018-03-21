import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import { ReactWrapper } from 'enzyme';

/* Sets up basic variables to be used by integration tests
 * Params:
 *   reducers: should be an object with all the reducers your page uses
 *   initialRouterState: an optional object to set as the initial state for the router
 * Returns:
 *   an object with the following attributes:
 *     store: the reducer store which contains the main dispatcher and the state
 *     dispatchSpy: a jest spy function to be used on assertions of dispatch action calls
 */
export default function setupIntegrationTest( reducers ) {

  // creating a jest mock function to serve as a dispatch spy for asserting dispatch actions if needed
  const dispatchSpy = jest.fn(() => ({})); 
  const reducerSpy = (state, action) => dispatchSpy(action);
  // applying thunk middleware to the the store
  const emptyStore = applyMiddleware(thunk)(createStore);
  const combinedReducers = combineReducers({
    reducerSpy,
    ...reducers
  });
  // creating the store
  const store = createStore(combinedReducers);

  return { store, dispatchSpy };
}
