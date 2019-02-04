import { all } from 'redux-saga/effects';
import {
  contactListSagaWatcher,
  contactCreateSagaWatcher,
  contactUpdateSagaWatcher,
  contactRemoveSagaWatcher,
} from './session';

export default function* rootSaga() {
  yield all([
    contactListSagaWatcher(),
    contactCreateSagaWatcher(),
    contactUpdateSagaWatcher(),
    contactRemoveSagaWatcher(),
  ]);
}
