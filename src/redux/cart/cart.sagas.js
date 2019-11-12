import { takeLatest, all, put, call } from 'redux-saga/effects'
import UserActionsType from '../user/user.types'
import { clearCart } from './cart.actions'

function* clearCartOnSignOut() {
  yield put(clearCart())
}

export function* onSignOutSuccess() {
  yield takeLatest(UserActionsType.SIGN_OUT_SUCCESS, clearCartOnSignOut)
}

export default function* cartSagas() {
  yield all([call(onSignOutSuccess)])
}
