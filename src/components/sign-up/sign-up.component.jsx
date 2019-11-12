import React from 'react'

import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component'
import { signUpStart } from '../../redux/user/user.actions'
import { connect } from 'react-redux'

import { SignUpContainer, TitleStyled } from './sign-up.styles'

class SignUp extends React.Component {
  constructor() {
    super()
    this.state = {
      displayName: '',
      email: '',
      password: '',
      confirmPassword: '',
    }
  }

  handleChange = event => {
    const { name, value } = event.target
    this.setState({
      [name]: value,
    })
  }

  handleSubmit = async event => {
    const { signUpStart } = this.props
    event.preventDefault()
    const { email, password, confirmPassword, displayName } = this.state

    if (password !== confirmPassword) {
      alert("Password don't match")
      return
    }
    signUpStart({ email, password, displayName })
  }

  render() {
    return (
      <SignUpContainer>
        <TitleStyled>I do not have an account</TitleStyled>
        <span>Sign up with your email and password</span>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            name="displayName"
            value={this.state.displayName}
            type="text"
            onChange={this.handleChange}
            label="Display name"
          />
          <FormInput
            name="email"
            type="email"
            value={this.state.email}
            onChange={this.handleChange}
            label="E-mail"
          />
          <FormInput
            name="password"
            type="password"
            value={this.state.password}
            onChange={this.handleChange}
            label="Password"
          />
          <FormInput
            name="confirmPassword"
            type="password"
            value={this.state.confirmPassword}
            onChange={this.handleChange}
            label="Confirm Password"
          />
          <CustomButton>SIGN UP</CustomButton>
        </form>
      </SignUpContainer>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  signUpStart: user => dispatch(signUpStart(user)),
})

export default connect(
  null,
  mapDispatchToProps
)(SignUp)
