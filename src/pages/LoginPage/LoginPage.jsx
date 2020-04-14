import React, { Component } from 'react';

import Button from '../../components/Utilities/Button'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCocktail } from '@fortawesome/free-solid-svg-icons'

import LoginForm from '../../components/LoginForm/LoginForm'
import SignupForm from '../../components/SignupForm/SignupForm'

import {
  FormInput,
  Form,
  Container,
  FormContainer,
  OverlayContainer,
  Overlay,
  OverlayPanel,
  OverlayLeft,
  OverlayRight
} from './style'

class LoginPage extends Component {
  state = {
    isLoginForm: true
  }
  doHandleToggle = () =>
    this.setState({ isLoginForm: !this.state.isLoginForm })


  render() {
    const { isLoginForm } = this.state
    // const isLoginForm = this.state.isLoginForm
    return (
      <>
        <Container className={`${isLoginForm ? "" : "right-panel-active "}`} >
          <FormContainer className="sign-up-container">
            <Form>
              <h1>Create Account</h1>
              <FormInput type="text" placeholder="Name" />
              <FormInput type="email" placeholder="Email" />
              <FormInput type="password" placeholder="Password" />
              <Button onClick={this.doHandleToggle}>Sign Up</Button>
            </Form>
          </FormContainer>
          <FormContainer className="sign-in-container">
            <Form>
              <h1>Sign in</h1>
              <FormInput type="email" placeholder="Email" />
              <FormInput type="password" placeholder="Password" />
              <a href="#">Forgot your password?</a>
              <Button onClick={this.doHandleToggle}>Sign In</Button>
            </Form>
          </FormContainer>
          <OverlayContainer className="overlay-container">
            <Overlay className="overlay">
              <OverlayPanel className="overlay-left">
                <h1>Welcome Back!</h1>
                <p>To keep connected with us please login with your personal info</p>
                <Button onClick={this.doHandleToggle} className="ghost" id="signIn">Sign In</Button>
              </OverlayPanel>
              <OverlayPanel className="overlay-right">
                <h1>Hello, Friend!</h1>
                <p>Enter your personal details and start journey with us</p>
                <Button onClick={this.doHandleToggle} className="ghost" id="signUp">Sign Up</Button>
              </OverlayPanel>
            </Overlay>
          </OverlayContainer>
        </Container>
      </>
      // <Background>
      //   <Container>
      //     {
      //       isLoginForm
      //         ? <FormContainer>
      //           <LoginForm
      //             handleSignupOrLogin={this.props.handleSignupOrLogin}
      //             doHandleToggle={this.doHandleToggle}
      //           />
      //         </FormContainer>
      //         : <SignupContainer>
      //           <SignupForm
      //             handleSignupOrLogin={this.props.handleSignupOrLogin}
      //             doHandleToggle={this.doHandleToggle}
      //           />
      //         </SignupContainer>
      //     }


      //     {/* <OverlayContainer>
      //   </OverlayContainer> */}
      //   </Container>
      // </Background>
    );
  }
}

export default LoginPage;