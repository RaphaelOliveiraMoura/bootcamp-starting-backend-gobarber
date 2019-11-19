import {all, takeLatest, call, put} from 'redux-saga/effects';
import {Alert} from 'react-native';

import api from '~/services/api';
// import history from '~/services/history';

import {signInRequest, signInSuccess, signFailure} from './actions';

export function setToken({payload}) {
  if (!payload) return;

  const {token} = payload.auth;

  if (token) {
    api.defaults.headers.Authorization = `Bearer ${token}`;
  }
}

export function* singIn({payload}) {
  try {
    const {email, password} = payload;

    const response = yield call(api.post, '/sessions', {
      email,
      password,
    });

    const {token, user} = response.data;

    if (user.provider) {
      Alert.alert(
        'Erro no login',
        'O usuário não pode ser prestador de serviços'
      );
      yield put(signFailure());
      return;
    }

    api.defaults.headers.Authorization = `Bearer ${token}`;

    yield put(signInSuccess(token, user));

    // history.push('Dashboard');
  } catch (error) {
    Alert.alert(
      'Falha na autenticação',
      'Credenciais inválidas, verifique seus dados'
    );
    yield put(signFailure());
  }
}

export function* signUp({payload}) {
  try {
    const {name, email, password} = payload;

    yield call(api.post, '/users', {
      name,
      email,
      password,
      provider: false,
    });

    yield put(signInRequest(email, password));
    // history.push('/');
  } catch (error) {
    Alert.alert(
      'Falha na criação',
      'Erro ao criar usuário, verifique seus dados'
    );
    yield put(signFailure());
  }
}

export function signOut() {
  // history.push('/');
}

export default all([
  takeLatest('persist/REHYDRATE', setToken),
  takeLatest('@auth/SIGN_IN_REQUEST', singIn),
  takeLatest('@auth/SIGN_UP_REQUEST', signUp),
  takeLatest('@auth/SIGN_OUT', signOut),
]);
