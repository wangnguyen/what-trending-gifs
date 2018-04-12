
export const TYPES = {
  LOAD_MORE: 'LOAD_MORE',
  VIEW_DETAIL: 'VIEW_DETAIL',
};

export const loadMore = offset => ({
  type: TYPES.LOAD_MORE,
  offset,
});

export const viewDetail = object => ({
  type: TYPES.VIEW_DETAIL,
  object,
});
