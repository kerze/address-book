import { call, put, takeLatest } from 'redux-saga/effects';
// import { push } from 'react-router-redux';
import axios from 'axios';
import * as types from '../actions/actionType';

import { fillAddressList, changeFilterWatcher } from '../actions/session';

// GET ADDRESS LIST--------------------------------------------------
export function* fetchListAction() {
  const url = 'http://localhost:3000/list?_sort=first_name&_order=asc';
  try {
    let list = yield axios.get(url);
    yield put(fillAddressList(list.data));
    yield put(changeFilterWatcher(list.data));
  } catch (err) {
    console.log(err.message || 'Fetch List API Error');
  }
}
export function* contactListSagaWatcher() {
  yield takeLatest(types.GET_ADDRESS_LIST_WATCHER, fetchListAction);
}

// CREATE CONTACT -----------------------------------------------------
export function* fetchContactCreateAction(contactAction: any) {
  const data = contactAction.payload;
  const url = 'http://localhost:3000/list';
  try {
    yield axios.post(url, data);
    // yield put(push('/list'));
    yield call(() => (window.location.href = '/list'));
  } catch (err) {
    console.log(err.message || 'Fetch contact API Error');
  }
}
export function* contactCreateSagaWatcher() {
  yield takeLatest(types.CREATE_CONTACT_WATCHER, fetchContactCreateAction);
}

//UPDATE CONTACT ----------------------------
export function* fetchContactUpdateAction(contactAction: any) {
  let data = contactAction.payload;
  const url = `http://localhost:3000/list/${data.id}`;
  try {
    yield axios.put(url, data);
    // yield put(push('/list'));
    yield call(() => (window.location.href = '/list'));
  } catch (err) {
    console.log(err.message || 'Fetch contact API Error');
  }
}
export function* contactUpdateSagaWatcher() {
  yield takeLatest(types.UPDATE_CONTACT_WATCHER, fetchContactUpdateAction);
}

//REMOVE CONTACT ----------------------------
export function* fetchContactRemoveAction(contactAction: any) {
  let { payload } = contactAction;
  try {
    yield axios.delete(`http://localhost:3000/list/${payload.id}`);
    // yield put(push('/list'));
    yield call(() => (window.location.href = '/list'));
  } catch (err) {
    console.log(err.message || 'Fetch contact API Error');
  }
}
export function* contactRemoveSagaWatcher() {
  yield takeLatest(types.REMOVE_CONTACT_WATCHER, fetchContactRemoveAction);
}
