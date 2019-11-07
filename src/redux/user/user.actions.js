import UserActionsType from './user.types';
export const setCurrentUser = user => {
  return {
    type: UserActionsType.SET_CURRENT_USER,
    payload: user,
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
