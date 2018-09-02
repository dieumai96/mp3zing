import React, { Component } from 'react'
import logo from './../../../common/user.png' // relative path to image 
import InputTextField from './../../../common/InputTextField';
import { connect } from 'react-redux';
import { loginUser } from './../../../actions/auth';
import PropTypes from 'prop-types';
require('./loginPage.css');
class LoginPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            errors: {},
        }
    }
    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        })
    }
    onSubmitLogin = (e) => {
        e.preventDefault();
        const newUser = ({
            username: this.state.username,
            password: this.state.password,
        })
        this.props.loginUser(newUser);
    }
    componentWillReceiveProps(nextProps) {
        if (nextProps.auth.isAuthenticated) {
            this.props.history.push('/');
        }
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
            <div className="loginBox">
                <div className="glass">
                    <img src={logo} style={{ width: '100px' }} className="user" />
                    <h1 className="caption_login">Sign in Here</h1>
                    <form onSubmit={this.onSubmitLogin}>
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
                        <input type="submit" value="Login" style={{ marginTop: '15px' }} />
                    </form>
                </div>
            </div>
        )
    }
}
LoginPage.propTypes = {
    loginUser: PropTypes.func.isRequired,
    // errors : PropTypes.object.isRequired, 
}
const mapStateToProps = (state) => ({
    auth: state.auth,
    errors: state.auth.errors,
})
export default connect(mapStateToProps, { loginUser })(LoginPage);
