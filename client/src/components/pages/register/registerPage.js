import React, { Component } from 'react'
import logo from './../../../common/user.png' // relative path to image 
import InputTextField from './../../../common/InputTextField';
import { connect } from 'react-redux';
import { registerUser } from './../../../actions/auth';
import PropTypes from 'prop-types';
import Checkbox from '@material-ui/core/Checkbox';
require('./registerPage.css');
class RegisterPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      password2: '',
      errors: {},
      oncheck: true,
    }
  }
  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    })
  }
  onSubmitRegister = (e) => {
    e.preventDefault();
    const newUser = ({
      username: this.state.username,
      password: this.state.password,
      password2: this.state.password2,
    })
    this.props.registerUser(newUser , this.props.history);
  }
  handleChangeCheckbox = name => event => {
    this.setState({ [name]: event.target.checked });
  };
  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
        this.setState({ errors: nextProps.errors });
    }
  }
  componentDidMount() {
    if (this.props.auth.isAuthenticated) {
        this.props.history.push('/');
    }
  }
  render() {
    const { errors } = this.state;
    return (
      <div className="registerBox">
        <div className="glass">
          <img src={logo} style={{ width: '100px' }} className="user" />
          <h1 className="caption_login">Sign up Here</h1>
          <form onSubmit={this.onSubmitRegister}>
            <InputTextField
              name="username"
              value={this.state.username}
              placeholder="Username"
              type="text"
              onChange={this.onChange}
              icon="fa fa-user"
              error={errors.username}
            />
            <InputTextField
              name="password"
              value={this.state.password}
              placeholder="Password"
              type="password"
              onChange={this.onChange}
              icon="fa fa-lock"
              error={errors.password}
            />
            <InputTextField
              name="password2"
              value={this.state.password2}
              placeholder="Password accept"
              type="password"
              onChange={this.onChange}
              icon="fa fa-unlock-alt"
              error={errors.password2}
            />
            <div className="box">
              <p>1. Không được sử dụng trang web cho mục đích xấu</p>
              <p>2. Bình luận vừa phải, không được quá lời</p>
              <p>3. Mọi vị phạm sẽ bị khóa tài khoản</p>
            </div>
            <Checkbox
              checked={this.state.oncheck}
              onChange={this.handleChangeCheckbox('oncheck')}
              value="oncheck"
              color="primary"
            />
            <span style={{ verticalAlign: 'middle', textDecoration: 'underline' }}>I accept and I would like to register</span>
            <input type="submit"
              value="Register"
              style={{ marginTop: '15px' }}
              disabled={!this.state.oncheck}
            />
          </form>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
    auth : state.auth,
    errors : state.auth.errors,
})
export default connect(mapStateToProps, { registerUser })(RegisterPage);
