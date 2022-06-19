import { all, fork, put, takeLatest, call } from 'redux-saga/effects';
import axios from 'axios';
import camelize from 'camelize';

import {
  ADD_MEMO_REQUEST,
  ADD_MEMO_SUCCESS,
  ADD_MEMO_FAILURE,
  LOAD_MEMO_REQUEST,
  LOAD_MEMO_SUCCESS,
  LOAD_MEMO_FAILURE,
  UPDATE_MEMO_REQUEST,
  UPDATE_MEMO_SUCCESS,
  UPDATE_MEMO_FAILURE,
  DESTROY_MEMO_REQUEST,
  DESTROY_MEMO_SUCCESS,
  DESTROY_MEMO_FAILURE,
  LOAD_MEMOLIST_REQUEST,
  LOAD_MEMOLIST_SUCCESS,
  LOAD_MEMOLIST_FAILURE,
} from 'reducers/memo';

const memoLoadAPI = id => axios.get(`/memo/${id}`);
function* memoLoad(action) {
  try {
    const result = yield call(memoLoadAPI, action.id);
    yield put({
      type: LOAD_MEMO_SUCCESS,
      data: camelize(result.data),
    });
  } catch (err) {
    yield put({
      type: LOAD_MEMO_FAILURE,
      error: err.response.data,
    });
  }
}
function* watchMemoLoad() {
  yield takeLatest(LOAD_MEMO_REQUEST, memoLoad);
}

const memoAddAPI = data => axios.post('/memo', data);
function* memoAdd(action) {
  try {
    const result = yield call(memoAddAPI, action.data);
    yield put({
      type: ADD_MEMO_SUCCESS,
      data: camelize(result.data),
    });
  } catch (err) {
    yield put({
      type: ADD_MEMO_FAILURE,
      error: err.response.data,
    });
  }
}
function* watchMemoAdd() {
  yield takeLatest(ADD_MEMO_REQUEST, memoAdd);
}

const memoUpdateAPI = (id, data) => axios.put(`/memo/${id}/`, data);
function* memoUpdate(action) {
  try {
    const result = yield call(memoUpdateAPI, action.id, action.data);
    yield put({
      type: UPDATE_MEMO_SUCCESS,
      data: camelize(result.data),
    });
  } catch (err) {
    yield put({
      type: UPDATE_MEMO_FAILURE,
      error: err.response.data,
    });
  }
}
function* watchMemoUpdate() {
  yield takeLatest(UPDATE_MEMO_REQUEST, memoUpdate);
}

const memoDestroyAPI = id => axios.delete(`/memo/${id}`);
function* memoDestroy(action) {
  try {
    const result = yield call(memoDestroyAPI, action.id);
    yield put({
      type: DESTROY_MEMO_SUCCESS,
      data: camelize(result.data),
    });
  } catch (err) {
    yield put({
      type: DESTROY_MEMO_FAILURE,
      error: err.response.data,
    });
  }
}
function* watchMemoDestroy() {
  yield takeLatest(DESTROY_MEMO_REQUEST, memoDestroy);
}

const memoListLoadAPI = () => axios.get('/memo');
function* memoListLoad() {
  try {
    const result = yield call(memoListLoadAPI);
    yield put({
      type: LOAD_MEMOLIST_SUCCESS,
      data: camelize(result.data),
    });
  } catch (err) {
    yield put({
      type: LOAD_MEMOLIST_FAILURE,
      error: err.response.data,
    });
  }
}
function* watchMemoListLoad() {
  yield takeLatest(LOAD_MEMOLIST_REQUEST, memoListLoad);
}

export default function* memo() {
  yield all([
    fork(watchMemoLoad),
    fork(watchMemoAdd),
    fork(watchMemoUpdate),
    fork(watchMemoDestroy),
    fork(watchMemoListLoad),
  ]);
}
