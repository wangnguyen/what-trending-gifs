import { TYPES } from './actions';

export default function reducers(state = [], action) {
  switch (action.type) {
    case TYPES.LOAD_MORE:
      console.log('Load more');
      return state;
    case TYPES.VIEW_DETAIL:
      console.log('View detail');
      return state;
    case TYPES.ADD_DATA:
      console.log('add data');
      return state;
    default:
      return state;
  }
}
