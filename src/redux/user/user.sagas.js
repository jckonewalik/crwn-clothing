import UserActionsType from './user.types';
import { signInFailure, signInSuccess } from './user.actions';
import { takeLatest, all, put } from 'redux-saga/effects';
import { auth, googleProvider } from '../../firebase/firebase.utils';

function* googleSignIn() {
  try {
    const { user } = yield auth.signInWithPopup(googleProvider);
    console.log(user);
  } catch (error) {
    put(signInFailure(error));
  }
}

export function* onGoogleSignInStart() {
  yield takeLatest(UserActionsType.GOOGLE_SIGN_IN_START, googleSignIn);
}
