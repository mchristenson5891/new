import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import userService from '../../utils/userService'
import { Input, Button, Login } from './style'

class LoginForm extends Component {
  state = {
    email: '',
    pw: ''
  };

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  }
  handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await userService.login(this.state);
      this.props.handleSignupOrLogin();
      this.setState({
        email: '',
        pw: ''
      })
      this.props.history.push('/')
    } catch (err) {

      alert('Invalid Credentials!');
      console.log(err)
    }
  }

  render() {
    return (
      <>
        <Login className="form-horizontal" onSubmit={this.handleSubmit} >
          <Input type="email" className="form-control" placeholder="Email" value={this.state.email} name="email" onChange={this.handleChange} />
          <Input type="password" className="form-control" placeholder="Password" value={this.state.pw} name="pw" onChange={this.handleChange} />
          <div style={{ display: 'flex', width: '100%' }}>
            <div style={{ alignSelf: 'center' }}>
              <div>Don't have an account?</div>
              <p style={{ margin: 0 }}>Sign Up <span onClick={this.props.doHandleToggle} style={{ color: 'dodgerblue', cursor: 'pointer' }}>Here</span></p>
            </div>
            <Button color={'dodgerblue'} type='submit' style={{ display: 'block' }}>Submit</Button>
          </div>
        </Login>
      </>
    );
  }
}

export default LoginForm;