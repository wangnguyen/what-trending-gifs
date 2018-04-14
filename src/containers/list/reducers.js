import { TYPES } from './actions';

const initialState = {
  data: [],
  pagination: {
    offset: 1,
  },
  isLoading: true,
};

export default function reducers(state = initialState, action) {
  switch (action.type) {
    case TYPES.LOAD_MORE:
      return Object.assign({}, state, { isLoading: true });
    case TYPES.ADD_DATA: {
      let { data } = state;
      const { pagination } = action.result;
      const additionalData = action.result.data;
      data = data.concat(additionalData);
      return Object.assign({}, state, { data, pagination, isLoading: false });
    }
    case TYPES.LOAD_ERROR: {
      // error handler
      console.error(action.error);
      alert('Load API error');
      return Object.assign({}, state, { isLoading: false, error: action.error });
    }
    default:
      return state;
  }
}
