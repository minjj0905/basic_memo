import produce from './produce.util';

export const initialState = {
  // 메모 디테일
  memo: null,
  addMemoLoading: false,
  addMemoDone: false,
  addMemoError: null,
  loadMemoLoading: false,
  loadMemoDone: false,
  loadMemoError: null,
  updateMemoLoading: false,
  updateMemoDone: false,
  updateMemoError: null,
  destroyMemoLoading: false,
  destroyMemoDone: false,
  destroyMemoError: null,

  // 메모 리스트
  memoList: [],
  loadMemoListLoading: false,
  loadMemoListDone: false,
  loadMemoListError: null,
};

export const ADD_MEMO_REQUEST = 'ADD_MEMO_REQUEST';
export const ADD_MEMO_SUCCESS = 'ADD_MEMO_SUCCESS';
export const ADD_MEMO_FAILURE = 'ADD_MEMO_FAILURE';

export const LOAD_MEMO_REQUEST = 'LOAD_MEMO_REQUEST';
export const LOAD_MEMO_SUCCESS = 'LOAD_MEMO_SUCCESS';
export const LOAD_MEMO_FAILURE = 'LOAD_MEMO_FAILURE';

export const UPDATE_MEMO_REQUEST = 'UPDATE_MEMO_REQUEST';
export const UPDATE_MEMO_SUCCESS = 'UPDATE_MEMO_SUCCESS';
export const UPDATE_MEMO_FAILURE = 'UPDATE_MEMO_FAILURE';

export const DESTROY_MEMO_REQUEST = 'DESTROY_MEMO_REQUEST';
export const DESTROY_MEMO_SUCCESS = 'DESTROY_MEMO_SUCCESS';
export const DESTROY_MEMO_FAILURE = 'DESTROY_MEMO_FAILURE';

export const LOAD_MEMOLIST_REQUEST = 'LOAD_MEMOLIST_REQUEST';
export const LOAD_MEMOLIST_SUCCESS = 'LOAD_MEMOLIST_SUCCESS';
export const LOAD_MEMOLIST_FAILURE = 'LOAD_MEMOLIST_FAILURE';

const reducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case ADD_MEMO_REQUEST:
        draft.addMemoLoading = true;
        draft.addMemoDone = false;
        draft.addMemoError = null;
        break;
      case ADD_MEMO_SUCCESS:
        draft.addMemoLoading = false;
        draft.addMemoDone = true;
        break;
      case ADD_MEMO_FAILURE:
        draft.addMemoLoading = false;
        draft.addMemoError = action.error;
        break;

      case LOAD_MEMO_REQUEST:
        draft.loadMemoLoading = true;
        draft.loadMemoDone = false;
        draft.loadMemoError = null;
        break;
      case LOAD_MEMO_SUCCESS:
        draft.loadMemoLoading = false;
        draft.loadMemoDone = true;
        draft.memo = action.data;
        break;
      case LOAD_MEMO_FAILURE:
        draft.loadMemoLoading = false;
        draft.loadMemoError = action.error;
        break;

      case UPDATE_MEMO_REQUEST:
        draft.updateMemoLoading = true;
        draft.updateMemoDone = false;
        draft.updateMemoError = null;
        break;
      case UPDATE_MEMO_SUCCESS:
        draft.updateMemoLoading = false;
        draft.updateMemoDone = true;
        break;
      case UPDATE_MEMO_FAILURE:
        draft.updateMemoLoading = false;
        draft.updateMemoError = action.error;
        break;

      case DESTROY_MEMO_REQUEST:
        draft.destroyMemoLoading = true;
        draft.destroyMemoDone = false;
        draft.destroyMemoError = null;
        break;
      case DESTROY_MEMO_SUCCESS:
        draft.destroyMemoLoading = false;
        draft.destroyMemoDone = true;
        break;
      case DESTROY_MEMO_FAILURE:
        draft.destroyMemoLoading = false;
        draft.destroyMemoError = action.error;
        break;

      case LOAD_MEMOLIST_REQUEST:
        draft.loadMemoListLoading = true;
        draft.loadMemoListDone = false;
        draft.loadMemoListError = null;
        break;
      case LOAD_MEMOLIST_SUCCESS:
        draft.loadMemoListLoading = false;
        draft.loadMemoListDone = true;
        draft.memoList = action.data;
        break;
      case LOAD_MEMOLIST_FAILURE:
        draft.loadMemoListLoading = false;
        draft.loadMemoListError = action.error;
        break;

      default:
        break;
    }
  });

export default reducer;
