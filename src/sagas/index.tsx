import { signUp, signIn, signOut } from '../helpers/firebase';
import { takeEvery } from 'redux-saga/effects';
import { AnyAction } from 'redux';
import actions from '../actions';

function* login(action: AnyAction) {
  const { email, password } = action;
  try {
    const user = yield signIn(email, password);
    actions.loginSuccess({ user });
  } catch (error) {
    console.error(error);
    if (error.code === 'auth/user-not-found') {
      const user = yield signUp(email, password);
      actions.loginSuccess({ user });
    } else {
      actions.loginFail({ error });
    }
  }
}

function* logout() {
  yield signOut();
}

export default function* watchForActions() {
  yield takeEvery('LOGIN', login);
  yield takeEvery('LOGOUT', logout);
}
