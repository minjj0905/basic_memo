import { all, fork } from 'redux-saga/effects';
import axios from 'axios';

import memoSaga from './memo';
import { apiUrl } from './api.config';

axios.defaults.baseURL = apiUrl;
axios.defaults.withCredentials = true;

export default function* rootSaga() {
  yield all([fork(memoSaga)]);
}
