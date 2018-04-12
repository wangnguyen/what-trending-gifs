
export const TYPES = {
  ADD_DATA: 'ADD_DATA',
  VIEW_DETAIL: 'VIEW_DETAIL',
  LOAD_MORE: 'LOAD_MORE',
};

export const addData = arr => ({
  type: TYPES.ADD_DATA,
  arr,
});

export const viewDetail = obj => ({
  type: TYPES.VIEW_DETAIL,
  obj,
});

export const loadMore = offset => ({
  type: TYPES.LOAD_MORE,
  offset,
});
