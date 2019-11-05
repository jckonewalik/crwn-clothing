import React from 'react'

import { SignInContainer, TitleStyled, ButtonsContainer } from './sign-in.styles'

import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component'
import { auth, signInWithGoogle } from '../../firebase/firebase.utils'
class SignIn extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      email: '',
      password: '',
    }
  }

  handleChange = event => {
    const { name, value } = event.target
    this.setState({ [name]: value })
  }

  handleSubmit = async event => {
    event.preventDefault()

    const { email, password } = this.state

    try {
      await auth.signInWithEmailAndPassword(email, password)
      this.setState({
        email: '',
        password: '',
      })
    } catch (error) {
      console.error(error.message)
    }
  }

  render() {
    return (
      <SignInContainer>
        <div>
          <TitleStyled>I already have an account</TitleStyled>
          <span>Sign in with your email and password</span>
        </div>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            type="email"
            name="email"
            value={this.state.email}
            onChange={this.handleChange}
            label="E-mail"
          />
          <FormInput
            type="password"
            name="password"
            label="Password"
            value={this.state.password}
            onChange={this.handleChange}
          />
          <ButtonsContainer>
            <CustomButton type="submit">SIGN IN</CustomButton>
            <CustomButton isGoogleSignIn onClick={signInWithGoogle}>
              SIGN IN WITH GOOGLE
            </CustomButton>
          </ButtonsContainer>
        </form>
      </SignInContainer>
    )
  }
}

export default SignIn
