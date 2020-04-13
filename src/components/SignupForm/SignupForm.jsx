import React, { Component } from 'react'
import userService from '../../utils/userService'
import { Input, Button, SignInForm } from './style'
import { withRouter } from 'react-router-dom'

class SignupForm extends Component {
    state = {
        name: '',
        email: '',
        password: '',
    }

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    }

    handleSubmit = async (event) => {
        event.preventDefault();
        try {
            await userService.signup(this.state)
            this.props.handleSignupOrLogin()
            this.props.history.push('/');
        }
        catch (err) {
            console.log(err)
        }
    }

    render() {
        return (
            <>
                <SignInForm onSubmit={this.handleSubmit}>
                    <Input type='text' name='name' placeholder='name' onChange={this.handleChange} />
                    <Input type='email' name='email' placeholder='email' onChange={this.handleChange} />
                    <Input type='password' name='password' placeholder='password' onChange={this.handleChange} />
                    <div style={{ display: 'flex', width: '100%' }}>
                        <div style={{ alignSelf: 'center' }}>
                            <div>Already have an account?</div>
                            <p style={{ margin: 0 }}>Sign In <span onClick={this.props.doHandleToggle} style={{ color: 'dodgerblue', cursor: 'pointer' }}>Here</span></p>
                        </div>
                        <Button color={'dodgerblue'} type='submit' style={{ display: 'block' }}>Submit</Button>
                    </div>

                </SignInForm>

            </>
        )
    }
}

export default withRouter(SignupForm);