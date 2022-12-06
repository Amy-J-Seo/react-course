import { createAction, handleActions } from "redux-actions";
import * as api from "../lib/api";
import { call, put, takeLatest, takelatest } from "redux-saga/effects";
import createRequestThunk from "../lib/createRequestThunk";
import { startLoading, finishLoading } from "./loading";
import createRequestSaga from "../lib/createRequestSaga";

//declare action type
//per one request-> make three

const GET_POST = "sample/GET_POST";
const GET_POST_SUCCESS = "sample/GET_POST_SUCCESS";
const GET_POST_FAILURE = "sample/GET_POST_FAILURE";

const GET_USERS = "sample/GET_USERS";
const GET_USERS_SUCCESS = "sample/GET_USERS_SUCCESS";
const GET_USERS_FAILURE = "sample/GET_USERS_FAILURE";

// create thunk function
// inside of thunk function, when start, success, fail dispatch different actions
// export const getPost = (id) => async (dispatch) => {
//   dispatch({ type: GET_POST }); //request started
//   try {
//     const response = await api.getPost(id);
//     dispatch({
//       type: GET_POST_SUCCESS,
//       payload: response.data,
//     }); //request success
//   } catch (error) {
//     dispatch({
//       type: GET_POST_FAILURE,
//       payload: error,
//     }); //request fail
//     throw error;
//   }
// };

// export const getUsers = () => async (dispatch) => {
//   dispatch({ type: GET_USERS });
//   try {
//     const response = await api.getUsers();
//     dispatch({
//       type: GET_USERS_SUCCESS,
//       payload: response.data,
//     }); //request success
//   } catch (error) {
//     dispatch({
//       type: GET_USERS_FAILURE,
//       payload: error,
//     }); //request fail
//     throw error;
//   }
// };

// export const getPost = createRequestThunk(GET_POST, api.getPost);
// export const getUsers = createRequestThunk(GET_USERS, api.getUsers);

export const getPost = createAction(GET_POST, (id) => id);
export const getUsers = createAction(GET_USERS);

// function* getPostSaga(action) {
//   yield put(startLoading(GET_POST));
//   try {
//     const post = yield call(api.getPost, action.payload);
//     yield put({
//       type: GET_POST_SUCCESS,
//       payload: post.data,
//     });
//   } catch (error) {
//     yield put({
//       type: GET_POST_FAILURE,
//       payload: error,
//       error: true,
//     });
//   }
//   yield put(finishLoading(GET_POST));
// }

// function* getUsersSaga(action) {
//   yield put(startLoading(GET_USERS));
//   try {
//     const users = yield call(api.getUsers, action.payload);
//     yield put({
//       type: GET_USERS_SUCCESS,
//       payload: users.data,
//     });
//   } catch (error) {
//     yield put({
//       type: GET_USERS_FAILURE,
//       payload: error,
//       error: true,
//     });
//   }
//   yield put(finishLoading(GET_USERS));
// }

export const getPostSaga = createRequestSaga(GET_POST, api.getPost);
export const getUsersSaga = createRequestSaga(GET_USERS, api.getUsers);

export function* sampleSaga() {
  yield takeLatest(GET_POST, getPostSaga);
  yield takeLatest(GET_USERS, getUsersSaga);
}

// initial state declare
// loading state of request is managed by loading object
const initialState = {
  post: null,
  users: null,
};

const sample = handleActions(
  {
    [GET_POST_SUCCESS]: (state, action) => ({
      ...state,
      post: action.payload,
    }),
    [GET_USERS_SUCCESS]: (state, action) => ({
      ...state,
      users: action.payload,
    }),
  },
  initialState
);

export default sample;
