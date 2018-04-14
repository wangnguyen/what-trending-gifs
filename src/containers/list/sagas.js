import { put, call, takeEvery } from 'redux-saga/effects';
import { TYPES } from './actions';
import fetch from '../../utilities/fetch';

const endpoint = {
  gifsTrending: '/v1/gifs/trending',
};

function* fetchTrendingGifs(action) {
  try {
    const result = yield call(
      fetch,
      endpoint.gifsTrending,
      { offset: action.offset, limit: action.limit }
    );
    yield put({ type: TYPES.ADD_DATA, result });
  } catch (error) {
    yield put({ type: TYPES.LOAD_ERROR, error });
  }
}

function* sideEffect() {
  yield takeEvery(TYPES.LOAD_MORE, fetchTrendingGifs);
}

export default sideEffect;
