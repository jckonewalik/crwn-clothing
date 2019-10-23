import React from 'react'
import './sign-up.styles.scss'
import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component'
import { auth, createUserProfileDocument } from '../../firebase/firebase.utils'

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
    event.preventDefault()
    const { email, password, confirmPassword, displayName } = this.state

    if (password !== confirmPassword) {
      alert("Password don't match")
      return
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(email, password)
      await createUserProfileDocument(user, { displayName })

      this.setState({
        displayName: '',
        email: '',
        password: '',
        confirmPassword: '',
      })
    } catch (error) {
      console.error('Error to create the user', error.message)
    }
  }

  render() {
    return (
      <div className="sign-up">
        <h1>I do not have an account</h1>
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
      </div>
    )
  }
}

export default SignUp
