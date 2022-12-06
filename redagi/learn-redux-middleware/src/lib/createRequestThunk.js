import { startLoading, finishLoading } from "../modules/loading";

export default function createRequestThunk(type, request) {
  //declare action type when success or failed
  const SUCCESS = `${type}_SUCCESS`;
  const FAILURE = `${type}_FAILURE`;

  return (params) => async (dispatch) => {
    dispatch({ type }); //start
    dispatch(startLoading(type));
    try {
      const response = await request(params);
      dispatch({
        type: SUCCESS,
        payload: response.data,
      }); //success
      dispatch(finishLoading(type));
    } catch (error) {
      dispatch({
        type: FAILURE,
        payload: error,
        error: true,
      });
      dispatch(finishLoading(type));
      throw error;
    }
  };
}

//how to use createRequestThunk('GET_USERS", api.getUsers)
