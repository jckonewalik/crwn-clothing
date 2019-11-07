import { all, call } from 'redux-saga/effects';

import { onFetchCollectionsStart } from './shop/shop.sagas';
import { onGoogleSignInStart } from './user/user.sagas';

export default function* rootSaga() {
  yield all([call(onFetchCollectionsStart), call(onGoogleSignInStart)]);
}
