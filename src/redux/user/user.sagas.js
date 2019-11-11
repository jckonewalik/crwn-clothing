import UserActionsType from './user.types';
import {
  signInFailure,
  signInSuccess,
  signOutFailure,
  signOutSuccess,
} from './user.actions';
import { takeLatest, all, put, call } from 'redux-saga/effects';
import {
  auth,
  googleProvider,
  createUserProfileDocument,
  getCurrentUser,
} from '../../firebase/firebase.utils';

function* googleSignIn() {
  try {
    const { user } = yield auth.signInWithPopup(googleProvider);
    yield getSnapshotFromUserAuth(user);
  } catch (error) {
    put(signInFailure(error));
  }
}

function* userAndPasswordSignIn({ payload: { email, password } }) {
  try {
    const { user } = yield auth.signInWithEmailAndPassword(email, password);
    yield getSnapshotFromUserAuth(user);
  } catch (error) {
    put(signInFailure(error));
  }
}

function* getSnapshotFromUserAuth(userAuth, additionalData) {
  const userRef = yield call(createUserProfileDocument, userAuth, additionalData);
  const snapshot = yield userRef.get();
  yield put(signInSuccess({ id: snapshot.id, ...snapshot.data() }));
}

export function* isUserAuthenticated() {
  try {
    const userAuth = yield getCurrentUser();
    if (!userAuth) return;
    yield getSnapshotFromUserAuth(userAuth);
  } catch (error) {
    yield put(signInFailure(error));
  }
}

export function* signOut() {
  try {
    yield auth.signOut();
    yield put(signOutSuccess());
  } catch (error) {
    yield put(signOutFailure(error));
  }
}

export function* onGoogleSignInStart() {
  yield takeLatest(UserActionsType.GOOGLE_SIGN_IN_START, googleSignIn);
}

export function* onSignOutStart() {
  yield takeLatest(UserActionsType.SIGN_OUT_START, signOut);
}

export function* onCheckUserSession() {
  yield takeLatest(UserActionsType.CHECK_USER_SESSION, isUserAuthenticated);
}

export function* onUserAndPasswordSignInStart() {
  yield takeLatest(
    UserActionsType.USER_AND_PASSWORD_SIGN_IN_START,
    userAndPasswordSignIn
  );
}

export default function* userSaga() {
  yield all([
    call(onGoogleSignInStart),
    call(onUserAndPasswordSignInStart),
    call(onSignOutStart),
    call(onCheckUserSession),
  ]);
}
