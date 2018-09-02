import React, { Component } from 'react'
import $ from 'jquery';
import { connect } from 'react-redux';
import { logoutUser } from './../../../actions/auth';
import PropTypes from 'prop-types';
import {
  Link,
} from 'react-router-dom';

require('./nav.css');
class Nav extends Component {
  componentDidMount() {
    $('.toggle').click(function () {
      $('ul.menu_ul').toggleClass('active');
    })
  }
  onLogout = () => {
    this.props.logoutUser();
  }
  render() {
    const { auth } = this.props;
    const authLink = (
      <ul className="menu_ul">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/profile">Profile</Link>
        </li>
        <li>
          <a href="" onClick={this.onLogout}>Logout</a>
        </li>
      </ul>
    )
    const guestLink = (
      <ul className="menu_ul">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/register">Register</Link>
        </li>
      </ul>
    )
    return (
      <section>
        <header>
          <div style={{ float: 'left' }}></div>
          <div className="toggle">
            <span></span>
          </div>
          {auth.isAuthenticated ? authLink : guestLink}
        </header>
      </section>
    )
  }
}
Nav.propTypes = {
  logoutUser: PropTypes.func.isRequired,
}
const mapStateToProps = (state) => ({
  auth: state.auth,
})
export default connect(mapStateToProps, { logoutUser })(Nav);