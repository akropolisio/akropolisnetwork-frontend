import { takeLatest, put, all, delay } from 'redux-saga/effects';

import { IDependencies } from 'shared/types/app';

import * as actions from './actions';
import * as NS from '../namespace';

export default function getSaga(_deps: IDependencies) {
  const setNotificationType: NS.ISetNotification['type'] = 'NOTIFICATION:SET_NOTIFICATION';

  function* saga() {
    yield all([
      takeLatest(setNotificationType, executeSetNotificationSaga),
    ]);
  }

  return saga;
}

function* executeSetNotificationSaga() {
  yield delay(10000);
  yield put(actions.removeNotification());
}
