import UserActionsType from './user.types'
import { signInFailure, signInSuccess } from './user.actions'
import { takeLatest, all, put, call } from 'redux-saga/effects'
import {
  auth,
  googleProvider,
  createUserProfileDocument,
} from '../../firebase/firebase.utils'

function* googleSignIn() {
  try {
    const { user } = yield auth.signInWithPopup(googleProvider)
    const userRef = yield call(createUserProfileDocument, user)
    const snapshot = yield userRef.get()
    yield put(signInSuccess({ id: snapshot.id, ...snapshot.data() }))
  } catch (error) {
    put(signInFailure(error))
  }
}

export function* onGoogleSignInStart() {
  yield takeLatest(UserActionsType.GOOGLE_SIGN_IN_START, googleSignIn)
}
