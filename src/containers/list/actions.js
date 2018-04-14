
export const TYPES = {
  ADD_DATA: 'ADD_DATA',
  VIEW_DETAIL: 'VIEW_DETAIL',
  LOAD_MORE: 'LOAD_MORE',
  LOAD_ERROR: 'LOAD_ERROR',
};

export const addData = arr => ({
  type: TYPES.ADD_DATA,
  arr,
});

export const loadMore = params => ({
  type: TYPES.LOAD_MORE,
  ...params,
});
