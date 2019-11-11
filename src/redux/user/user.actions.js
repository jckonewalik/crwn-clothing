import UserActionsType from './user.types';

export const checkUserSession = () => {
  return {
    type: UserActionsType.CHECK_USER_SESSION,
  };
};

export const userAndPasswordSignInStart = userAuth => {
  return {
    type: UserActionsType.USER_AND_PASSWORD_SIGN_IN_START,
    payload: userAuth,
  };
};

export const googleSignInStart = () => {
  return {
    type: UserActionsType.GOOGLE_SIGN_IN_START,
  };
};

export const signInSuccess = user => {
  return {
    type: UserActionsType.SIGN_IN_SUCCESS,
    payload: user,
  };
};

export const signInFailure = error => {
  return {
    type: UserActionsType.SIGN_IN_FAILURE,
    payload: error,
  };
};

export const signOutStart = () => {
  return {
    type: UserActionsType.SIGN_OUT_START,
  };
};

export const signOutSuccess = () => {
  return {
    type: UserActionsType.SIGN_OUT_SUCCESS,
  };
};

export const signOutFailure = error => {
  return {
    type: UserActionsType.SIGN_OUT_FAILURE,
    payload: error,
  };
};
