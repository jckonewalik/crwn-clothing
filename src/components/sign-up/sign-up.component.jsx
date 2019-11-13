import React, { useState } from 'react';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { signUpStart } from '../../redux/user/user.actions';
import { connect } from 'react-redux';

import { SignUpContainer, TitleStyled } from './sign-up.styles';

const SignUp = ({ signUpStart }) => {
  const [userCredentials, setCredentials] = useState({
    displayName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const { email, password, confirmPassword, displayName } = userCredentials;

  const handleChange = event => {
    const { name, value } = event.target;
    setCredentials({
      ...userCredentials,
      [name]: value,
    });
  };

  const handleSubmit = async event => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert("Password don't match");
      return;
    }
    signUpStart({ email, password, displayName });
  };

  return (
    <SignUpContainer>
      <TitleStyled>I do not have an account</TitleStyled>
      <span>Sign up with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          name="displayName"
          value={displayName}
          type="text"
          onChange={handleChange}
          label="Display name"
        />
        <FormInput
          name="email"
          type="email"
          value={email}
          onChange={handleChange}
          label="E-mail"
        />
        <FormInput
          name="password"
          type="password"
          value={password}
          onChange={handleChange}
          label="Password"
        />
        <FormInput
          name="confirmPassword"
          type="password"
          value={confirmPassword}
          onChange={handleChange}
          label="Confirm Password"
        />
        <CustomButton>SIGN UP</CustomButton>
      </form>
    </SignUpContainer>
  );
};

const mapDispatchToProps = dispatch => ({
  signUpStart: user => dispatch(signUpStart(user)),
});

export default connect(
  null,
  mapDispatchToProps
)(SignUp);
