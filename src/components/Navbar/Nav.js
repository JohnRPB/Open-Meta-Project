import React, {Component} from 'react';
import {Dropdown, Menu, Container} from 'semantic-ui-react';
import {NavLink} from 'react-router-dom';
// import {connect} from 'react-redux';
// import {withRouter, Redirect, Switch} from 'react-router';
// import serialize from 'form-serialize';
import InfoModal from './InfoModal';
import createHistory from 'history/createBrowserHistory';

const history = createHistory();

// // Get the current location.
// const location = history.location;

// // Listen for changes to the current location.
// const unlisten = history.listen((location, action) => {
//   // location is an object like window.location
//   console.log(action, location.pathname, location.state);
// });

class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
    };
  }

  handleChange = event => {
    this.setState({value: event.target.value});
    //event.preventDefault();
  };

  handleResultSelect = () => {
    history.push({
      pathname: '/sitesearch',
      search: `?query=${this.state.value}`,
    });
  };

  render() {
    if (this.props.loggedIn) {
      return (
        <Menu fixed="top" inverted>
          <Container>
            <NavLink exact to="/" className="item">
              Open Meta
            </NavLink>
  
            {/* <NavLink to="/dashboard" className="item">
            My Dashboard
          </NavLink> */}
            <NavLink to="/analyses" className="item">
              My Analyses
            </NavLink>
  
            <div className="right menu">
        {/*<Menu.Item>
                <form
                  //action="/sitesearch"
                  className="ui search icon input"
                  onSubmit={this.handleResultSelect}>
                  <input
                    name="query"
                    className="prompt"
                    type="text"
                    placeholder="Search website..."
                    onChange={this.handleChange}
                  />
                  <i className="search icon" />
                </form>
              </Menu.Item>*/}
  
              <Menu.Item>
                <InfoModal />
              </Menu.Item>
              <Dropdown item icon={<i className="user circle outline icon" />}>
                <Dropdown.Menu>
                  <Dropdown.Item>
                    <NavLink to="/profile" style={{color: 'black'}}>
                      ProfilePage
                    </NavLink>
                  </Dropdown.Item>
                  {/* <Dropdown.Item>
                    <NavLink to="/collections/new" style={{ color: "black" }}>
                      Create Collection
                    </NavLink>
                  </Dropdown.Item>
                  <Dropdown.Item>
                    <NavLink to="/selectcollection" style={{ color: "black" }}>
                      Select Collection
                    </NavLink>
                  </Dropdown.Item> */}
                  <Dropdown.Item>
                    <a href="/landing" style={{color: 'black'}}>
                      Sign Out
                    </a>
                    {/* {this.props.session.? (
                      <a href="/landing" style={{ color: "black" }}>
                        Sign Out
                      </a>
                    ) : (
                      <a href="/login" style={{ color: "black" }}>
                        Log In
                      </a>
                    )} */}
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
          </Container>
        </Menu>
      );
    } else {
      return (
        <Menu fixed="top" inverted>
          <Container>
            <NavLink to="/" className="item">
              Open Meta
            </NavLink>
  
            <div className="right menu">
              <NavLink to="/login" className="item">
                Log in
              </NavLink>
              <Menu.Item>
                <InfoModal />
              </Menu.Item>
            </div>
          </Container>
        </Menu>
      );
    }
  }
}

export default Nav;
