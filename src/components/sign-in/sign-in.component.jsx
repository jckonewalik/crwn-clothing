import React, { useState } from 'react';

import { SignInContainer, TitleStyled, ButtonsContainer } from './sign-in.styles';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { connect } from 'react-redux';
import {
  googleSignInStart,
  userAndPasswordSignInStart,
} from '../../redux/user/user.actions';

const SignIn = ({ userAndPasswordSignInStart, googleSignInStart }) => {
  const [userCredentials, setUserCredentials] = useState({
    email: '',
    password: '',
  });

  const { email, password } = userCredentials;

  const handleChange = event => {
    const { name, value } = event.target;
    setUserCredentials({ ...userCredentials, [name]: value });
  };

  const handleSubmit = async event => {
    event.preventDefault();
    userAndPasswordSignInStart({ email, password });
  };

  return (
    <SignInContainer>
      <div>
        <TitleStyled>I already have an account</TitleStyled>
        <span>Sign in with your email and password</span>
      </div>
      <form onSubmit={handleSubmit}>
        <FormInput
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
          label="E-mail"
        />
        <FormInput
          type="password"
          name="password"
          label="Password"
          value={password}
          onChange={handleChange}
        />
        <ButtonsContainer>
          <CustomButton type="submit">SIGN IN</CustomButton>
          <CustomButton type="button" isGoogleSignIn onClick={googleSignInStart}>
            SIGN IN WITH GOOGLE
          </CustomButton>
        </ButtonsContainer>
      </form>
    </SignInContainer>
  );
};

const mapDispatchToProps = dispatch => ({
  googleSignInStart: () => dispatch(googleSignInStart()),
  userAndPasswordSignInStart: userAuth => dispatch(userAndPasswordSignInStart(userAuth)),
});

export default connect(
  null,
  mapDispatchToProps
)(SignIn);
