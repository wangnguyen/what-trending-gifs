import { put, call, takeEvery } from 'redux-saga/effects';
import { TYPES } from './actions';

function* fetchGifs() {
  try {
    const data = yield call(fetch, url, {
      method: 'POST',
      body: { api_key: apiKey },
    });
    yield put({ type: TYPES.ADD_DATA, data });
  } catch (error) {
    console.log('ERROR: ', error);
  }
}

function* sideEffect() {
  yield takeEvery(TYPES.LOAD_MORE, fetchGifs);
}

export default sideEffect;
