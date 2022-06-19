import { all, fork } from 'redux-saga/effects';
import axios from 'axios';

import memoSaga from './memo';

axios.defaults.baseURL = 'http://127.0.0.1:8000/api';
axios.defaults.withCredentials = true;

export default function* rootSaga() {
  yield all([fork(memoSaga)]);
}
